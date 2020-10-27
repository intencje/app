import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from '../../_models/custom-validators.model';
import { DbService } from '../../_services/db/db.service';
import { Intention, User } from '../../_models/firebase.model';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../_services/tools/tools.service';
import { AuthService } from '../../_services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/_services/seo/seo.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-prayer-create',
  templateUrl: './prayer-create.page.html',
  styleUrls: ['./prayer-create.page.scss'],
})
export class PrayerCreatePage implements OnInit {
  prayerCategoriesList: string[] = ['Podstawowe', 'Tematyczne', 'Litanie', 'Nowenny', 'Akty'];
  tags: string[] = ['Podstawowe', 'Tematyczne', 'Litanie', 'Nowenny', 'Akty'];

  options: AnimationOptions = {
    loop: true,
    path: '/assets/animations/intention-created.json',
  };
  animationCreated() {}

  loading = false;
  submitted = false;
  confirmed = false;

  public addPrayerForm: FormGroup;
  private geoIP: Record<string, any>;
  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
    private db: DbService,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    private tools: ToolsService,
    private auth: AuthService,
  ) {
    this.addPrayerForm = formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40),
          CustomValidators.cannotContainSwearwords,
        ],
      ],
      content: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
          CustomValidators.cannotContainSwearwords,
        ],
      ],
      categories: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.http.get<any>('https://geoip.int.intencje.pl').subscribe((res) => {
      this.geoIP = res;
    });
  }

  get form() {
    return this.addPrayerForm.controls;
  }

  async addPrayer(payload: { title: string; content: string }): Promise<any> {
    this.loading = true;
    this.submitted = true;

    if (this.addPrayerForm.valid) {
      const user: User = await this.auth.getUser();
      const prayer: Intention = {
        uid: user.uid,
        status: 'draft',
        authorDisplayName: user.displayName,
        authorAvatarURL: 'assets/icons/avatar.png',
        content: payload.content,
        date: new Date(),
        title: payload.title,
        parish: user.parish,
        praying: [],
      };

      this.db.update('prayers', prayer);
      // .then((docRef) => {
      //   // Kolekcje możemy dodać tylko wtedy znamy ID dokum  entu
      //   this.db.update(`intentions/${docRef.id}/geoIP`, this.geoIP);
      // })
      // .catch(() => {
      //   // TODO: Bugtracker
      // });

      // Z uwagi na możliwość dodawania intencji w trybie offline powiadomienie o dodaniu intencji pokazujemy
      // kiedy formularz jest wypelniony prawidlowo - bez czekania na callback z backendu
      this.confirmed = true;
    }
    this.loading = false;
  }
}
