import { Component, Input } from '@angular/core';
import { ToolsService } from '../../_services/tools/tools.service';

@Component({
  selector: 'app-testimony-card',
  templateUrl: './testimony-card.component.html',
  styleUrls: ['./testimony-card.component.scss'],
})
export class TestimonyCardComponent {
  @Input() testimony;
  @Input() showProfileDetialsOnClick = true;

  constructor(public toolsService: ToolsService) {}
}
