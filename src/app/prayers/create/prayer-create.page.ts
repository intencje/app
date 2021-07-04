import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ImageService } from 'src/app/_services/image/image.service';
import { SeoService } from 'src/app/_services/seo/seo.service';
import { CustomValidators } from '../../_models/custom-validators.model';
import { Prayer, User } from '../../_models/firebase.model';
import { AuthService } from '../../_services/auth/auth.service';
import { DbService } from '../../_services/db/db.service';
import { ToolsService } from '../../_services/tools/tools.service';

export interface Tag {
  id: string;
  name: string;
}

@Component({
  selector: 'app-prayer-create',
  templateUrl: './prayer-create.page.html',
  styleUrls: ['./prayer-create.page.scss'],
})
export class PrayerCreatePage implements OnInit {
  value = 'TinyMCE Material';
  value2 = 'TinyMCE Material';

  //public Balon = BalloonEditor;
  html = `fff`;
  contento = new FormControl();

  // TODO: do modeli
  prayerCategoriesList: string[] = ['Podstawowe', 'Tematyczne', 'Litanie', 'Nowenny', 'Akty'];

  /** control for the MatSelect filter keyword multi-selection */
  public tagSelector: FormControl = new FormControl();

  /** list of tags filtered by search keyword */
  public filteredTags: ReplaySubject<Tag[]> = new ReplaySubject<Tag[]>(1);

  @ViewChild('tags', { static: true }) tags: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  editable: false;

  prayerID = '';

  loading = false;
  submitted = false;
  confirmed = false;
  croppedImage;
  downloadUrl;
  tags$: Tag[];
  now = new Date().getTime();

  public addPrayerTitleDescriptionForm: FormGroup;
  public addPrayerCategoryTagsForm: FormGroup;

  private geoIP: Record<string, any>;
  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
    private db: DbService,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    private tools: ToolsService,
    public auth: AuthService,
    public image: ImageService,
    private cdr: ChangeDetectorRef,
  ) {
    this.addPrayerTitleDescriptionForm = formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(80),
          CustomValidators.cannotContainSwearwords,
        ],
      ],
      content: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(10000),
          CustomValidators.cannotContainSwearwords,
        ],
      ],
    });

    this.addPrayerCategoryTagsForm = formBuilder.group({
      categories: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
  }

  async ngOnInit(): Promise<void> {
    this.http.get<any>('https://geoip.int.intencje.pl').subscribe((res) => {
      this.geoIP = res;
    });
  }

  protected filterBanksMulti() {
    if (!this.tags$) {
      return;
    }
    // get the search keyword
    let search = this.tagSelector.value;
    if (!search) {
      this.filteredTags.next(this.tags$.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter tags
    this.filteredTags.next(this.tags$.filter((tag) => tag.name.toLowerCase().indexOf(search) > -1));
  }

  ngOnDestroy(): void {
    this.image.deleteImage();
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  click(e: Record<string, unknown>): void {
    switch (e.selectedIndex) {
      case 1:
        this.addPrayerTitleDescription(this.addPrayerTitleDescriptionForm.value);
        this.db.collection$('tags').subscribe((tags) => {
          this.tags$ = tags;
          // load the initial tag list
          this.filteredTags.next(this.tags$.slice());

          // listen for search field value changes
          this.tagSelector.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
            this.filterBanksMulti();
          });
        });

        break;
      case 2:
        this.addPrayerCategoryTags(this.addPrayerCategoryTagsForm.value);
        break;
      case 3:
        this.image.downloadUrl ? this.addPrayerCoverPhoto() : false;
        break;
    }
  }
  async addPrayerTitleDescription(payload: { title: string; content: string }): Promise<any> {
    if (this.addPrayerTitleDescriptionForm.valid) {
      const user: User = await this.auth.getUser();
      const prayer: Prayer = {
        uid: user.uid,
        status: 'published',
        title: payload.title,
        content: payload.content,
        date: new Date(),
      };

      this.db.update('prayers', prayer).then((docRef) => {
        // We can add cover photo when we know the ID of created prayer
        this.prayerID = docRef.id;
      });
    }
  }

  async addPrayerCategoryTags(payload): Promise<any> {
    if (this.addPrayerCategoryTagsForm.valid) {
      const prayer: Prayer = {
        tags: payload.tags.map((tag) => tag.name),
        category: payload.categories.toLowerCase(),
      };
      this.db.update(`prayers/${this.prayerID}`, prayer);
    }
  }

  addPrayerCoverPhoto(): void {
    this.db.update(`prayers/${this.prayerID}`, { coverImage: this.image.downloadUrl });
  }

  addPrayerHeaderPhoto(): void {
    this.db.update(`prayers/${this.prayerID}`, { headerImage: this.image.downloadUrl });
  }
}
