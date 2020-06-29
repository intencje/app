import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-newest-items',
  templateUrl: './load-newest-items.component.html',
  styleUrls: ['./load-newest-items.component.scss']
})
export class LoadNewestItemsComponent {

  @Input() that: any;
  @Input() message: string;

  constructor(
  ) {}
}
