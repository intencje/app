import { Directive, Input, OnInit } from '@angular/core';
import { SeoService } from '../../_services/seo/seo.service';
import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appAddSeoStuff]',
})
/**
 * Chcemy korzystać z dobrodziejst AsyncPipe i automatycznym unsubscribe stąd
 * pomysł, aby dynamiczne dane do SEO pozyskiwać z poziomu wygenerowanego HTML poprzez dyrektywę
 * a statyczne SEO dane przechowywać w routerze.
 */
export class AddSeoStuffDirective implements OnInit {
  @Input('appAddSeoStuff') seo: { type: string; data: any };

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    switch (this.seo.type) {
      case 'intention':
        this.seoService.updateTitleTag(this.seo.data.title);
        this.seoService.updateMetaTag({ name: 'description', content: this.seo.data.content });
        this.seoService.updateLinkTag({ rel: 'amphtml', href: this.seo.data.slug });
        this.seoService.addJSONLD([
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Intencje',
                item: environment.url,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: this.seo.data.title,
                item: environment.url + this.seo.data.slug,
              },
            ],
          },
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            image: 'http://example.com/images/image.jpg',
            url: environment.url + this.seo.data.slug,
            headline: this.seo.data.title,
            alternativeHeadline: this.seo.data.title,
            dateCreated: this.seo.data.date,
            datePublished: this.seo.data.date,
            dateModified: this.seo.data.date,
            inLanguage: 'pl-PL',
            isFamilyFriendly: 'true',
            author: {
              '@type': 'Person',
              name: this.seo.data.author_display_name,
              image: this.seo.data.author_avatar_url,
              url: 'https://example.com',
            },
            creator: {
              '@type': 'Person',
              name: this.seo.data.author_display_name,
              image: this.seo.data.author_avatar_url,
              url: 'https://example.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Intencje.pl',
              url: environment.url,
              logo: {
                '@type': 'ImageObject',
                url: 'http://www.example.com/logo.png',
                width: '400',
                height: '55',
              },
            },
            mainEntityOfPage: 'True',
            genre: ['intencje', 'prośby o modlitwę', 'skrzynka intencji'],
            articleSection: 'Intencje modlitewne',
            articleBody: this.seo.data.content,
          },
        ]);
        break;
      case 'prayer':
        this.seoService.updateTitleTag(this.seo.data.title);
        this.seoService.updateLinkTag({ rel: 'amphtml', href: 'https://intencje.pl/amp/modlitwy/'+this.seo.data.slug });
        this.seoService.addJSONLD([
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Strona główna',
                item: 'https://intencje.pl',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Modlitwy',
                item: 'https://intencje.pl/modlitwy',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: this.seo.data.title,
                item: `https://intencje.pl/${this.seo.data.slug}`,
              },
            ],
          },
        ]);
      default:
    }
  }
}
