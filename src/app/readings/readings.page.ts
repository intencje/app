import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SeoService } from '../_services/seo/seo.service';

export interface Item {
  name: string;
}

@Component({
  selector: 'app-readings',
  templateUrl: './readings.page.html',
  styleUrls: ['./readings.page.scss'],
})
export class ReadingsPage implements OnInit {
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;
  constructor(
    private afs: AngularFirestore,
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
  ) {
    this.itemDoc = afs.doc<Item>('readings/data');
    this.item = this.itemDoc.valueChanges();
  }

  ngOnInit() {}
}
