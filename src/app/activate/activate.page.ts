import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.page.html',
  styleUrls: ['./activate.page.scss'],
})
export class ActivatePage {
  constructor(public readonly route: ActivatedRoute, public auth: AuthService) {}
}
