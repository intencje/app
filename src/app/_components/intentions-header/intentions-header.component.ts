import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth/auth.service';
import { Role } from '../../_models/firebase.model';

@Component({
  selector: 'app-intentions-header',
  templateUrl: './intentions-header.component.html',
  styleUrls: ['./intentions-header.component.scss'],
})
export class IntentionsHeaderComponent {
  possibleButtons = [
    { text: 'Moje', handler: 'moje' },
    { text: 'Wszystkie', handler: '/' },
    { text: 'Za które się modlę', handler: 'za-ktore-sie-modle' },
    { text: 'Z mojej parafii', handler: 'z-mojej-parafii' },
    { text: 'Spełnione', handler: 'spelnione' },
    { text: 'Anuluj' },
  ];

  moderateButtons = [{ text: 'Do moderacji', handler: 'do-moderacji' }];

  @Input() title: string;

  constructor(private router: Router, private auth: AuthService) {}

  async presentActionSheet() {
    // const actionSheet = await this.actionSheetController.create({
    //   header: 'Pokaż intencje:',
    //   buttons: await this.createButtons()
    // });
    // await actionSheet.present();
  }

  private async createButtons() {
    const buttons = [];

    if (await this.auth.hasRole([Role.Administrator, Role.Moderator])) {
      for (const button of this.moderateButtons) {
        const roleBasedButtons = {
          text: button.text,
          role: 'destructive',
          handler: () => {
            this.router.navigateByUrl(button.handler);
            return true;
          },
        };
        buttons.push(roleBasedButtons);
      }
    }

    for (const button of this.possibleButtons) {
      const roleBasedButtons = {
        text: button.text,
        handler: () => {
          this.router.navigateByUrl(button.handler);
          return true;
        },
      };

      buttons.push(roleBasedButtons);
    }
    return buttons;
  }
}
