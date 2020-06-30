import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.scss']
})
export class UsersHeaderComponent {

  @Input() title: string;

  constructor(
    private router: Router
  ) {}

  async presentActionSheet() {
//     const actionSheet = await this.actionSheetController.create({
//       header: 'Sortuj według:',
//       buttons: [				{
//         text: 'Aktywność',
//         handler: () => {
//           this.router.navigateByUrl('uzytkownicy');
//         }
//       },
//       {
//         text: 'Rejestracje',
//         handler: () => {
//           this.router.navigateByUrl('uzytkownicy/rejestracje');
//         }
//       },
//       {
//         text: 'Alfabet',
//         handler: () => {
//           this.router.navigateByUrl('uzytkownicy/alfabetycznie');
//         }
//       },
//       {
//         text: 'Anuluj',
//         role: 'cancel',
//       }
// ]
//     });
//     await actionSheet.present();
  }

}
