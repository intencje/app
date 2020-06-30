import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeAvatarComponent } from 'src/app/_components/change-avatar/change-avatar.component';

@Component({
  selector: 'app-user-edit-details',
  templateUrl: './user-edit-details.page.html',
  styleUrls: ['./user-edit-details.page.scss'],
})
export class UserEditDetailsPage implements OnInit {
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
