import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prayers-header',
  templateUrl: './prayers-header.component.html',
  styleUrls: ['./prayers-header.component.scss']
})
export class PrayersHeaderComponent {

  @Input() title: string;

  constructor(
    private router: Router
  ) {}

  async presentActionSheet() {
//     const actionSheet = await this.actionSheetController.create({
//       header: 'Pokaż modlitwy:',
//       buttons: [				{
//         text: 'Wszystkie',
//         handler: () => {
//           this.router.navigateByUrl('/modlitwy');
//         }
//       },
//       {
//         text: 'Podstawowe',
//         handler: () => {
//           this.router.navigateByUrl('modlitwy/podstawowe');
//         }
//       },
//       {
//         text: 'Tematyczne',
//         handler: () => {
//           this.router.navigateByUrl('modlitwy/tematyczne');
//         }
//       },
//       {
//         text: 'Litanie',
//         handler: () => {
//           this.router.navigateByUrl('modlitwy/litanie');
//         }
//       },
//       {
//         text: 'Nowenny',
//         handler: () => {
//           this.router.navigateByUrl('modlitwy/nowenny');
//         }
//       },
//       {
//         text: 'Akty',
//         handler: () => {
//           this.router.navigateByUrl('modlitwy/akty');

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
