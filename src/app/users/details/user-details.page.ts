import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeAvatarComponent } from './../../_components/change-avatar/change-avatar.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  croppedImage: string;
  constructor(public readonly route: ActivatedRoute) {}

  async presentModal(): Promise<void> {
    // const modal = await this.modalController.create({
    //   component: ChangeAvatarComponent,
    //   swipeToClose: true,
    // });

    // modal.onDidDismiss().then(base64 => {
    //   this.croppedImage = base64.data;
    // });

    // return await modal.present();
  }

  ngOnInit(): void {}
}
