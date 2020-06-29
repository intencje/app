import { Component, Input } from '@angular/core';
import { ToolsService } from '../../_services/tools/tools.service';

@Component({
  selector: 'app-patron-list-item',
  templateUrl: './patron-list-item.component.html',
  styleUrls: ['./patron-list-item.component.scss']
})
export class PatronListItemComponent {

  @Input() patron;

  constructor(
    public toolsService: ToolsService,

  ) {}
}
