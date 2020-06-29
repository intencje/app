import { Component, Input } from '@angular/core';
import { ToolsService } from '../../_services/tools/tools.service';

@Component({
  selector: 'app-tag-list-item',
  templateUrl: './tag-list-item.component.html',
  styleUrls: ['./tag-list-item.component.scss']
})
export class TagListItemComponent {

  @Input() tag;

  constructor(
    private toolsService: ToolsService,

  ) {}
}
