import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input() title: string;

  constructor(
    public auth: AuthService
  ) {}

}
