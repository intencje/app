import { Component, Input } from '@angular/core';
import { ToolsService } from '../../_services/tools/tools.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {

  @Input() article;
  @Input() showProfileDetialsOnClick = true;
  loading

  constructor(
    private toolsService: ToolsService,

  ) {}
}
