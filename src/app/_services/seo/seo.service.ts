import { Injectable, OnDestroy, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SeoService implements OnDestroy {
  private routeListener: Subscription;
  public renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private readonly document,
    private readonly router: Router,
    private readonly title: Title,
    private readonly meta: Meta,
    private rendererFactory: RendererFactory2,
  ) {
    // https://stackoverflow.com/questions/44989666/service-no-provider-for-renderer2
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  /**
   * Nasłuchuje eventu NavigationEnd emitowanego przez router,
   * aby móc wykonać żądaną akcję związaną z SEO zaraz po załadowaniu strony.
   * @returns void
   */
  public startRouteListener(): void {
    this.routeListener = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let url = '';
      const urlTree = this.router.parseUrl(this.router.url);
      if (urlTree.root.hasChildren()) {
        const segments = urlTree.root.children.primary.segments;

        if (segments && segments.length > 0) {
          url = segments.map((segment) => segment.path).join('/');
        }
      }

      this.updateLinkTag({
        rel: 'canonical',
        href: environment.url + url,
      });

      // Z poziomu serwisu nie można korzystać z ActivatedRoute dlatego obejście.
      let route = this.router.routerState.root;
      while (route.firstChild) {
        route = route.firstChild;
      }
      // Upewiamy się, żę dysponujemy statycznymi danymi do wykorzystania przez SEO.
      if (route.snapshot.data.title && route.snapshot.data.description) {
        // TODO clear subscription

        this.updateTitleTag(route.snapshot.data.title);
        this.updateMetaTag({ name: 'description', content: route.snapshot.data.description });
      }
    });
  }

  /**
   * Tworzy lub aktualizuje tag <link> dokumentu
   * @param tag Zawartość tagu <link>
   * @returns void
   */
  public updateLinkTag(tag: object): void {
    const selector = this._parseLinkTag(tag);
    let link = this.renderer.createElement('link');

    try {
      link = this.renderer.selectRootElement(selector);
    } catch (error) {
      this.renderer.appendChild(this.document.head, link);
    } finally {
      Object.keys(tag).forEach((prop: string) => {
        this.renderer.setAttribute(link, prop, tag[prop]);
      });
    }
  }

  /**
   * Usuwa z sekcji <head> dokumentu wybrany tag <link>
   * @param tag Opis elementu do usunięcia
   * @returns void
   */
  public removeLinkTag(tag: object): void {
    const selector = this._parseLinkTag(tag);
    const link = this.renderer.selectRootElement(selector);
    if (link) {
      this.renderer.removeChild(this.document.head, link);
    }
  }

  /**
   * Parsuje tag, aby stworzyć z niego selektor
   * @param tag Wybrany rag
   * @returns Selektor gotowy do użycia przez querySelector
   */
  private _parseLinkTag(tag: any): string {
    const attr: string = tag.rel ? 'rel' : 'hreflang';
    return `link[${attr}="${tag[attr]}"]`;
  }

  /**
   * Tworzy tag <script> w sekcji <head> dokumentu celem umieszczenia w nim zapisów JSON-LD
   * @param tag Obiekt JSON-LD do umieszczenia wewnątrz <script>
   * @returns void
   */
  public addJSONLD(data: object): void {
    const s = this.renderer.createElement('script');
    s.type = 'application/ld+json';
    s.text = `${JSON.stringify(data)}`;

    if (s) {
      this.renderer.appendChild(this.document.head, s);
    }
  }

  /**
   * Usuwa z sekcji <head> dokumentu tag <script> odpowiedzialny za prezentację JSON-LD
   * @returns void
   */
  public removeJSONLD(): void {
    const s = this.renderer.selectRootElement('script[type="application/ld+json"]');
    if (s) {
      this.renderer.removeChild(this.document.head, s);
    }
  }

  /**
   * Tworzy lub aktualizuje wartość <title> dokumentu
   * @param title Tytuł dokumentu
   * @returns void
   */
  public updateTitleTag(title: string): void {
    this.title.setTitle(title);
  }

  /**
   * Tworzy lub aktualizuje wartość <meta> dokumentu
   * @param tag Nazwa i zawartość tagu <meta>
   * @returns void
   */
  public updateMetaTag(tag: any): void {
    // TODO: interface maybe?
    this.meta.updateTag({ name: tag.name, content: tag.content });
  }

  ngOnDestroy(): void {
    //this.routeListener.unsubscribe();
  }
}
