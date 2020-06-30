import { Component, Input } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';


@Component({
  selector: 'app-praying-list-item',
  templateUrl: './praying-list-item.component.html',
  styleUrls: ['./praying-list-item.component.scss']
})
export class PrayingListItemComponent {
  currentUser: any;

  @Input() praying;
  @Input() intentionAuthor;

  constructor(
    public authService: AuthService
  ) {
    //this.authService.currentUser.subscribe(x => this.currentUser = x);

  }
}


