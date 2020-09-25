import { Component, Input } from '@angular/core';
import { ToolsService } from '../../_services/tools/tools.service';

@Component({
  selector: 'app-prayer-list-item',
  templateUrl: './prayer-list-item.component.html',
  styleUrls: ['./prayer-list-item.component.scss']
})
export class PrayerListItemComponent {

  @Input() prayer;

  constructor(
    private toolsService: ToolsService,

  ) {}
}
