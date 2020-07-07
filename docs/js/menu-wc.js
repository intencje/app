'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Intencje.pl documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutTheProjectPageModule.html" data-type="entity-link">AboutTheProjectPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutTheProjectPageModule-6c1d6a66e87c2c5bb54aca9c37f8eaac"' : 'data-target="#xs-components-links-module-AboutTheProjectPageModule-6c1d6a66e87c2c5bb54aca9c37f8eaac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutTheProjectPageModule-6c1d6a66e87c2c5bb54aca9c37f8eaac"' :
                                            'id="xs-components-links-module-AboutTheProjectPageModule-6c1d6a66e87c2c5bb54aca9c37f8eaac"' }>
                                            <li class="link">
                                                <a href="components/AboutTheProjectPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutTheProjectPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutTheProjectPageRoutingModule.html" data-type="entity-link">AboutTheProjectPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e5739ac0b203aef6173e15829b5587f8"' : 'data-target="#xs-components-links-module-AppModule-e5739ac0b203aef6173e15829b5587f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e5739ac0b203aef6173e15829b5587f8"' :
                                            'id="xs-components-links-module-AppModule-e5739ac0b203aef6173e15829b5587f8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link">AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppServerModule-42e8844020f9fc528412d549977edb38"' : 'data-target="#xs-components-links-module-AppServerModule-42e8844020f9fc528412d549977edb38"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-42e8844020f9fc528412d549977edb38"' :
                                            'id="xs-components-links-module-AppServerModule-42e8844020f9fc528412d549977edb38"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleCreatePageModule.html" data-type="entity-link">ArticleCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticleCreatePageModule-aba84c72854b4d48049461249d9b136f"' : 'data-target="#xs-components-links-module-ArticleCreatePageModule-aba84c72854b4d48049461249d9b136f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticleCreatePageModule-aba84c72854b4d48049461249d9b136f"' :
                                            'id="xs-components-links-module-ArticleCreatePageModule-aba84c72854b4d48049461249d9b136f"' }>
                                            <li class="link">
                                                <a href="components/ArticleCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticleCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleDetailsPageModule.html" data-type="entity-link">ArticleDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticleDetailsPageModule-9fdf548bec9c016ce13fb73275d57ac1"' : 'data-target="#xs-components-links-module-ArticleDetailsPageModule-9fdf548bec9c016ce13fb73275d57ac1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticleDetailsPageModule-9fdf548bec9c016ce13fb73275d57ac1"' :
                                            'id="xs-components-links-module-ArticleDetailsPageModule-9fdf548bec9c016ce13fb73275d57ac1"' }>
                                            <li class="link">
                                                <a href="components/ArticleDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticleDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleDetailsPageRoutingModule.html" data-type="entity-link">ArticleDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleEditDetailsPageModule.html" data-type="entity-link">ArticleEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticleEditDetailsPageModule-47eaa9bb7ef37ca229f6c52315b272cd"' : 'data-target="#xs-components-links-module-ArticleEditDetailsPageModule-47eaa9bb7ef37ca229f6c52315b272cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticleEditDetailsPageModule-47eaa9bb7ef37ca229f6c52315b272cd"' :
                                            'id="xs-components-links-module-ArticleEditDetailsPageModule-47eaa9bb7ef37ca229f6c52315b272cd"' }>
                                            <li class="link">
                                                <a href="components/ArticleEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticleEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleEditDetailsPageRoutingModule.html" data-type="entity-link">ArticleEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticlesEditPageModule.html" data-type="entity-link">ArticlesEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticlesEditPageModule-e81b53731656ff90a721c2c1915d5cb1"' : 'data-target="#xs-components-links-module-ArticlesEditPageModule-e81b53731656ff90a721c2c1915d5cb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticlesEditPageModule-e81b53731656ff90a721c2c1915d5cb1"' :
                                            'id="xs-components-links-module-ArticlesEditPageModule-e81b53731656ff90a721c2c1915d5cb1"' }>
                                            <li class="link">
                                                <a href="components/ArticlesEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticlesEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticlesEditPageRoutingModule.html" data-type="entity-link">ArticlesEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticlesPageModule.html" data-type="entity-link">ArticlesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticlesPageModule-55ac07083ea7df4b6bd027dc08eccabc"' : 'data-target="#xs-components-links-module-ArticlesPageModule-55ac07083ea7df4b6bd027dc08eccabc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticlesPageModule-55ac07083ea7df4b6bd027dc08eccabc"' :
                                            'id="xs-components-links-module-ArticlesPageModule-55ac07083ea7df4b6bd027dc08eccabc"' }>
                                            <li class="link">
                                                <a href="components/ArticlesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticlesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticlesPageRoutingModule.html" data-type="entity-link">ArticlesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlessednessOfGodPageModule.html" data-type="entity-link">BlessednessOfGodPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlessednessOfGodPageModule-a48ccccc4ae31bc16fbdb1bf10181abb"' : 'data-target="#xs-components-links-module-BlessednessOfGodPageModule-a48ccccc4ae31bc16fbdb1bf10181abb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlessednessOfGodPageModule-a48ccccc4ae31bc16fbdb1bf10181abb"' :
                                            'id="xs-components-links-module-BlessednessOfGodPageModule-a48ccccc4ae31bc16fbdb1bf10181abb"' }>
                                            <li class="link">
                                                <a href="components/BlessednessOfGodPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlessednessOfGodPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlessednessOfGodPageRoutingModule.html" data-type="entity-link">BlessednessOfGodPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogCreatePageModule.html" data-type="entity-link">BlogCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogCreatePageModule-76cb3dbb1dad3911be6a0c20d90ece7a"' : 'data-target="#xs-components-links-module-BlogCreatePageModule-76cb3dbb1dad3911be6a0c20d90ece7a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogCreatePageModule-76cb3dbb1dad3911be6a0c20d90ece7a"' :
                                            'id="xs-components-links-module-BlogCreatePageModule-76cb3dbb1dad3911be6a0c20d90ece7a"' }>
                                            <li class="link">
                                                <a href="components/BlogCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogCreatePageRoutingModule.html" data-type="entity-link">BlogCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogDetailsPageModule.html" data-type="entity-link">BlogDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogDetailsPageModule-e273c05323e040ca3148ff0b9a0ae33a"' : 'data-target="#xs-components-links-module-BlogDetailsPageModule-e273c05323e040ca3148ff0b9a0ae33a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogDetailsPageModule-e273c05323e040ca3148ff0b9a0ae33a"' :
                                            'id="xs-components-links-module-BlogDetailsPageModule-e273c05323e040ca3148ff0b9a0ae33a"' }>
                                            <li class="link">
                                                <a href="components/BlogDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogDetailsPageRoutingModule.html" data-type="entity-link">BlogDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogEditDetailsPageModule.html" data-type="entity-link">BlogEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogEditDetailsPageModule-9d951ab3d4d8aed36b9164f1c4b4fd5d"' : 'data-target="#xs-components-links-module-BlogEditDetailsPageModule-9d951ab3d4d8aed36b9164f1c4b4fd5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogEditDetailsPageModule-9d951ab3d4d8aed36b9164f1c4b4fd5d"' :
                                            'id="xs-components-links-module-BlogEditDetailsPageModule-9d951ab3d4d8aed36b9164f1c4b4fd5d"' }>
                                            <li class="link">
                                                <a href="components/BlogEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogEditDetailsPageRoutingModule.html" data-type="entity-link">BlogEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogEditPageModule.html" data-type="entity-link">BlogEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogEditPageModule-49e0098d7e5da4df64c7b894472263d5"' : 'data-target="#xs-components-links-module-BlogEditPageModule-49e0098d7e5da4df64c7b894472263d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogEditPageModule-49e0098d7e5da4df64c7b894472263d5"' :
                                            'id="xs-components-links-module-BlogEditPageModule-49e0098d7e5da4df64c7b894472263d5"' }>
                                            <li class="link">
                                                <a href="components/BlogEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogEditPageRoutingModule.html" data-type="entity-link">BlogEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogPageModule.html" data-type="entity-link">BlogPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogPageModule-a5a1b9e8b0f0223ff522054ebf20fe02"' : 'data-target="#xs-components-links-module-BlogPageModule-a5a1b9e8b0f0223ff522054ebf20fe02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogPageModule-a5a1b9e8b0f0223ff522054ebf20fe02"' :
                                            'id="xs-components-links-module-BlogPageModule-a5a1b9e8b0f0223ff522054ebf20fe02"' }>
                                            <li class="link">
                                                <a href="components/BlogPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogRoutingModule.html" data-type="entity-link">BlogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-4e5c6422758309055d6fc2a1de1f4e61"' : 'data-target="#xs-components-links-module-ComponentsModule-4e5c6422758309055d6fc2a1de1f4e61"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-4e5c6422758309055d6fc2a1de1f4e61"' :
                                            'id="xs-components-links-module-ComponentsModule-4e5c6422758309055d6fc2a1de1f4e61"' }>
                                            <li class="link">
                                                <a href="components/ArticleCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticleCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeAvatarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangeAvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntentionAddCommentDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionAddCommentDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntentionCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntentionChangeStatusDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionChangeStatusDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntentionDeleteDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionDeleteDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntentionsHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionsHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadNewestItemsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadNewestItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatronListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatronListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrayerListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayerListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrayersHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayersHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrayingListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayingListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeoStuffComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeoStuffComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestimonyCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonyCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPageModule.html" data-type="entity-link">ContactPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactPageModule-27fdec49d677865a102d45e99ce8a200"' : 'data-target="#xs-components-links-module-ContactPageModule-27fdec49d677865a102d45e99ce8a200"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactPageModule-27fdec49d677865a102d45e99ce8a200"' :
                                            'id="xs-components-links-module-ContactPageModule-27fdec49d677865a102d45e99ce8a200"' }>
                                            <li class="link">
                                                <a href="components/ContactPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPageRoutingModule.html" data-type="entity-link">ContactPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreatePageRoutingModule.html" data-type="entity-link">CreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link">DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DirectivesModule-dc03b56f6ad2395884c86202b8e2faf2"' : 'data-target="#xs-directives-links-module-DirectivesModule-dc03b56f6ad2395884c86202b8e2faf2"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-dc03b56f6ad2395884c86202b8e2faf2"' :
                                        'id="xs-directives-links-module-DirectivesModule-dc03b56f6ad2395884c86202b8e2faf2"' }>
                                        <li class="link">
                                            <a href="directives/AddSeoStuffDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddSeoStuffDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HasRoleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HasRoleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ShowActivityDetailsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowActivityDetailsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ShowArticleDetailsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowArticleDetailsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ShowPatronProfileDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowPatronProfileDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ShowPrayerDetailsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowPrayerDetailsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ShowTagDetailsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowTagDetailsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ShowTestimonyDetailsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowTestimonyDetailsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ShowUserProfileDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowUserProfileDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditPageModule.html" data-type="entity-link">EditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditPageModule-7e95ee25812879cc2685c9c05a5a4296"' : 'data-target="#xs-components-links-module-EditPageModule-7e95ee25812879cc2685c9c05a5a4296"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditPageModule-7e95ee25812879cc2685c9c05a5a4296"' :
                                            'id="xs-components-links-module-EditPageModule-7e95ee25812879cc2685c9c05a5a4296"' }>
                                            <li class="link">
                                                <a href="components/HelpEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeaturesPageModule.html" data-type="entity-link">FeaturesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeaturesPageModule-4c6395fe33657516bc243e13c12f6131"' : 'data-target="#xs-components-links-module-FeaturesPageModule-4c6395fe33657516bc243e13c12f6131"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeaturesPageModule-4c6395fe33657516bc243e13c12f6131"' :
                                            'id="xs-components-links-module-FeaturesPageModule-4c6395fe33657516bc243e13c12f6131"' }>
                                            <li class="link">
                                                <a href="components/FeaturesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeaturesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeaturesPageRoutingModule.html" data-type="entity-link">FeaturesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpCreatePageModule.html" data-type="entity-link">HelpCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpCreatePageModule-72c461bc2978d5368775582e5c56755c"' : 'data-target="#xs-components-links-module-HelpCreatePageModule-72c461bc2978d5368775582e5c56755c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpCreatePageModule-72c461bc2978d5368775582e5c56755c"' :
                                            'id="xs-components-links-module-HelpCreatePageModule-72c461bc2978d5368775582e5c56755c"' }>
                                            <li class="link">
                                                <a href="components/HelpCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpCreatePageRoutingModule.html" data-type="entity-link">HelpCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpDetailsPageModule.html" data-type="entity-link">HelpDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpDetailsPageModule-f50b3d9c9033d7a9889ce4f1841aa001"' : 'data-target="#xs-components-links-module-HelpDetailsPageModule-f50b3d9c9033d7a9889ce4f1841aa001"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpDetailsPageModule-f50b3d9c9033d7a9889ce4f1841aa001"' :
                                            'id="xs-components-links-module-HelpDetailsPageModule-f50b3d9c9033d7a9889ce4f1841aa001"' }>
                                            <li class="link">
                                                <a href="components/HelpDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpDetailsPageRoutingModule.html" data-type="entity-link">HelpDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpEditDetailsPageModule.html" data-type="entity-link">HelpEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpEditDetailsPageModule-a73049917078f75026d2af6ecbe08c67"' : 'data-target="#xs-components-links-module-HelpEditDetailsPageModule-a73049917078f75026d2af6ecbe08c67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpEditDetailsPageModule-a73049917078f75026d2af6ecbe08c67"' :
                                            'id="xs-components-links-module-HelpEditDetailsPageModule-a73049917078f75026d2af6ecbe08c67"' }>
                                            <li class="link">
                                                <a href="components/HelpEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpEditDetailsPageRoutingModule.html" data-type="entity-link">HelpEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpEditPageRoutingModule.html" data-type="entity-link">HelpEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpPageModule.html" data-type="entity-link">HelpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpPageModule-fa69e7857845d004aabf87335f8cdb23"' : 'data-target="#xs-components-links-module-HelpPageModule-fa69e7857845d004aabf87335f8cdb23"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpPageModule-fa69e7857845d004aabf87335f8cdb23"' :
                                            'id="xs-components-links-module-HelpPageModule-fa69e7857845d004aabf87335f8cdb23"' }>
                                            <li class="link">
                                                <a href="components/HelpPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpPageRoutingModule.html" data-type="entity-link">HelpPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionCreatePageModule.html" data-type="entity-link">IntentionCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntentionCreatePageModule-7c4919abf2ff250b5dc1f083d4cbfe19"' : 'data-target="#xs-components-links-module-IntentionCreatePageModule-7c4919abf2ff250b5dc1f083d4cbfe19"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntentionCreatePageModule-7c4919abf2ff250b5dc1f083d4cbfe19"' :
                                            'id="xs-components-links-module-IntentionCreatePageModule-7c4919abf2ff250b5dc1f083d4cbfe19"' }>
                                            <li class="link">
                                                <a href="components/IntentionCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionCreatePageRoutingModule.html" data-type="entity-link">IntentionCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionDetailsPageModule.html" data-type="entity-link">IntentionDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntentionDetailsPageModule-77f04e5d6a1a1549ffd53c9cf488592a"' : 'data-target="#xs-components-links-module-IntentionDetailsPageModule-77f04e5d6a1a1549ffd53c9cf488592a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntentionDetailsPageModule-77f04e5d6a1a1549ffd53c9cf488592a"' :
                                            'id="xs-components-links-module-IntentionDetailsPageModule-77f04e5d6a1a1549ffd53c9cf488592a"' }>
                                            <li class="link">
                                                <a href="components/IntentionDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionDetailsPageRoutingModule.html" data-type="entity-link">IntentionDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionEditDetailsPageModule.html" data-type="entity-link">IntentionEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntentionEditDetailsPageModule-cb790fedefb67c3c0dce99d72cc159ed"' : 'data-target="#xs-components-links-module-IntentionEditDetailsPageModule-cb790fedefb67c3c0dce99d72cc159ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntentionEditDetailsPageModule-cb790fedefb67c3c0dce99d72cc159ed"' :
                                            'id="xs-components-links-module-IntentionEditDetailsPageModule-cb790fedefb67c3c0dce99d72cc159ed"' }>
                                            <li class="link">
                                                <a href="components/IntentionEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionEditDetailsPageRoutingModule.html" data-type="entity-link">IntentionEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionEditPageModule.html" data-type="entity-link">IntentionEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntentionEditPageModule-953f1c7cd1194dfa4dad59a4cab6c717"' : 'data-target="#xs-components-links-module-IntentionEditPageModule-953f1c7cd1194dfa4dad59a4cab6c717"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntentionEditPageModule-953f1c7cd1194dfa4dad59a4cab6c717"' :
                                            'id="xs-components-links-module-IntentionEditPageModule-953f1c7cd1194dfa4dad59a4cab6c717"' }>
                                            <li class="link">
                                                <a href="components/IntentionsEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionsEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionsEditPageRoutingModule.html" data-type="entity-link">IntentionsEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionsPageModule.html" data-type="entity-link">IntentionsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntentionsPageModule-ce6ec49053842df3e95714987a5296c2"' : 'data-target="#xs-components-links-module-IntentionsPageModule-ce6ec49053842df3e95714987a5296c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntentionsPageModule-ce6ec49053842df3e95714987a5296c2"' :
                                            'id="xs-components-links-module-IntentionsPageModule-ce6ec49053842df3e95714987a5296c2"' }>
                                            <li class="link">
                                                <a href="components/IntentionsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntentionsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntentionsPageRoutingModule.html" data-type="entity-link">IntentionsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-2f938c978fce272be06aa90630801e4e"' : 'data-target="#xs-components-links-module-LoginPageModule-2f938c978fce272be06aa90630801e4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-2f938c978fce272be06aa90630801e4e"' :
                                            'id="xs-components-links-module-LoginPageModule-2f938c978fce272be06aa90630801e4e"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link">LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesPageModule.html" data-type="entity-link">MessagesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MessagesPageModule-3e3dd9ddab27572ad5a1a64fff198a16"' : 'data-target="#xs-components-links-module-MessagesPageModule-3e3dd9ddab27572ad5a1a64fff198a16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessagesPageModule-3e3dd9ddab27572ad5a1a64fff198a16"' :
                                            'id="xs-components-links-module-MessagesPageModule-3e3dd9ddab27572ad5a1a64fff198a16"' }>
                                            <li class="link">
                                                <a href="components/MessagesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessagesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesPageRoutingModule.html" data-type="entity-link">MessagesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MissionPageModule.html" data-type="entity-link">MissionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MissionPageModule-e30c2dd2a6199fdee400549c869cc2de"' : 'data-target="#xs-components-links-module-MissionPageModule-e30c2dd2a6199fdee400549c869cc2de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MissionPageModule-e30c2dd2a6199fdee400549c869cc2de"' :
                                            'id="xs-components-links-module-MissionPageModule-e30c2dd2a6199fdee400549c869cc2de"' }>
                                            <li class="link">
                                                <a href="components/MissionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MissionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MissionPageRoutingModule.html" data-type="entity-link">MissionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundPageModule.html" data-type="entity-link">NotFoundPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotFoundPageModule-d09ecda1a2a49fc7a5bf6283cfb73609"' : 'data-target="#xs-components-links-module-NotFoundPageModule-d09ecda1a2a49fc7a5bf6283cfb73609"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotFoundPageModule-d09ecda1a2a49fc7a5bf6283cfb73609"' :
                                            'id="xs-components-links-module-NotFoundPageModule-d09ecda1a2a49fc7a5bf6283cfb73609"' }>
                                            <li class="link">
                                                <a href="components/NotFoundPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundPageRoutingModule.html" data-type="entity-link">NotFoundPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsPageModule.html" data-type="entity-link">NotificationsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotificationsPageModule-bc4575c254f1b49cb79e6608991bef81"' : 'data-target="#xs-components-links-module-NotificationsPageModule-bc4575c254f1b49cb79e6608991bef81"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationsPageModule-bc4575c254f1b49cb79e6608991bef81"' :
                                            'id="xs-components-links-module-NotificationsPageModule-bc4575c254f1b49cb79e6608991bef81"' }>
                                            <li class="link">
                                                <a href="components/NotificationsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsPageRoutingModule.html" data-type="entity-link">NotificationsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParishCreatePageModule.html" data-type="entity-link">ParishCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParishCreatePageModule-119ed0f30893c22d52d057ccfec559ea"' : 'data-target="#xs-components-links-module-ParishCreatePageModule-119ed0f30893c22d52d057ccfec559ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParishCreatePageModule-119ed0f30893c22d52d057ccfec559ea"' :
                                            'id="xs-components-links-module-ParishCreatePageModule-119ed0f30893c22d52d057ccfec559ea"' }>
                                            <li class="link">
                                                <a href="components/ParishCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParishCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParishCreatePageRoutingModule.html" data-type="entity-link">ParishCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParishDetailsPageModule.html" data-type="entity-link">ParishDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParishDetailsPageModule-03a3064d6e0d15137f4e3aa6d20f4317"' : 'data-target="#xs-components-links-module-ParishDetailsPageModule-03a3064d6e0d15137f4e3aa6d20f4317"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParishDetailsPageModule-03a3064d6e0d15137f4e3aa6d20f4317"' :
                                            'id="xs-components-links-module-ParishDetailsPageModule-03a3064d6e0d15137f4e3aa6d20f4317"' }>
                                            <li class="link">
                                                <a href="components/ParishDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParishDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParishDetailsPageRoutingModule.html" data-type="entity-link">ParishDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParishEditDetailsPageModule.html" data-type="entity-link">ParishEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParishEditDetailsPageModule-e7bc942fefaa5c4778d67f003e6da711"' : 'data-target="#xs-components-links-module-ParishEditDetailsPageModule-e7bc942fefaa5c4778d67f003e6da711"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParishEditDetailsPageModule-e7bc942fefaa5c4778d67f003e6da711"' :
                                            'id="xs-components-links-module-ParishEditDetailsPageModule-e7bc942fefaa5c4778d67f003e6da711"' }>
                                            <li class="link">
                                                <a href="components/ParishEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParishEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParishEditDetailsPageRoutingModule.html" data-type="entity-link">ParishEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParishesEditPageModule.html" data-type="entity-link">ParishesEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParishesEditPageModule-86ac5c47d4369c1f91e1311297ef50e4"' : 'data-target="#xs-components-links-module-ParishesEditPageModule-86ac5c47d4369c1f91e1311297ef50e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParishesEditPageModule-86ac5c47d4369c1f91e1311297ef50e4"' :
                                            'id="xs-components-links-module-ParishesEditPageModule-86ac5c47d4369c1f91e1311297ef50e4"' }>
                                            <li class="link">
                                                <a href="components/ParishesEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParishesEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParishesEditPageRoutingModule.html" data-type="entity-link">ParishesEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParishesPageModule.html" data-type="entity-link">ParishesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParishesPageModule-cbc7fe744b736c880e120e9777937d68"' : 'data-target="#xs-components-links-module-ParishesPageModule-cbc7fe744b736c880e120e9777937d68"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParishesPageModule-cbc7fe744b736c880e120e9777937d68"' :
                                            'id="xs-components-links-module-ParishesPageModule-cbc7fe744b736c880e120e9777937d68"' }>
                                            <li class="link">
                                                <a href="components/ParishesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParishesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParishesPageRoutingModule.html" data-type="entity-link">ParishesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatronCreatePageModule.html" data-type="entity-link">PatronCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatronCreatePageModule-5bb242e91af356ff9ee5359fbf01843d"' : 'data-target="#xs-components-links-module-PatronCreatePageModule-5bb242e91af356ff9ee5359fbf01843d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatronCreatePageModule-5bb242e91af356ff9ee5359fbf01843d"' :
                                            'id="xs-components-links-module-PatronCreatePageModule-5bb242e91af356ff9ee5359fbf01843d"' }>
                                            <li class="link">
                                                <a href="components/PatronCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatronCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatronCreatePageRoutingModule.html" data-type="entity-link">PatronCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatronDetailsPageModule.html" data-type="entity-link">PatronDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatronDetailsPageModule-52d0d9fdcc5ea18df82e988be18a7e2c"' : 'data-target="#xs-components-links-module-PatronDetailsPageModule-52d0d9fdcc5ea18df82e988be18a7e2c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatronDetailsPageModule-52d0d9fdcc5ea18df82e988be18a7e2c"' :
                                            'id="xs-components-links-module-PatronDetailsPageModule-52d0d9fdcc5ea18df82e988be18a7e2c"' }>
                                            <li class="link">
                                                <a href="components/PatronDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatronDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatronDetailsPageRoutingModule.html" data-type="entity-link">PatronDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatronEditDetailsPageModule.html" data-type="entity-link">PatronEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatronEditDetailsPageModule-3e1fedef725175aa7f1dfc3e3fc6cf30"' : 'data-target="#xs-components-links-module-PatronEditDetailsPageModule-3e1fedef725175aa7f1dfc3e3fc6cf30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatronEditDetailsPageModule-3e1fedef725175aa7f1dfc3e3fc6cf30"' :
                                            'id="xs-components-links-module-PatronEditDetailsPageModule-3e1fedef725175aa7f1dfc3e3fc6cf30"' }>
                                            <li class="link">
                                                <a href="components/PatronEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatronEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatronEditDetailsPageRoutingModule.html" data-type="entity-link">PatronEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatronsEditPageModule.html" data-type="entity-link">PatronsEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatronsEditPageModule-e88c0063528027c6bc8d100e0dae77f3"' : 'data-target="#xs-components-links-module-PatronsEditPageModule-e88c0063528027c6bc8d100e0dae77f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatronsEditPageModule-e88c0063528027c6bc8d100e0dae77f3"' :
                                            'id="xs-components-links-module-PatronsEditPageModule-e88c0063528027c6bc8d100e0dae77f3"' }>
                                            <li class="link">
                                                <a href="components/PatronsEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatronsEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatronsEditPageRoutingModule.html" data-type="entity-link">PatronsEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatronsPageModule.html" data-type="entity-link">PatronsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatronsPageModule-1b372e500dac7f911d1f6031e115d55a"' : 'data-target="#xs-components-links-module-PatronsPageModule-1b372e500dac7f911d1f6031e115d55a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatronsPageModule-1b372e500dac7f911d1f6031e115d55a"' :
                                            'id="xs-components-links-module-PatronsPageModule-1b372e500dac7f911d1f6031e115d55a"' }>
                                            <li class="link">
                                                <a href="components/PatronsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatronsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatronsPageRoutingModule.html" data-type="entity-link">PatronsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayerCreatePageModule.html" data-type="entity-link">PrayerCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayerCreatePageModule-0edaef279687a6c8584742cdbef7be35"' : 'data-target="#xs-components-links-module-PrayerCreatePageModule-0edaef279687a6c8584742cdbef7be35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayerCreatePageModule-0edaef279687a6c8584742cdbef7be35"' :
                                            'id="xs-components-links-module-PrayerCreatePageModule-0edaef279687a6c8584742cdbef7be35"' }>
                                            <li class="link">
                                                <a href="components/PrayerCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayerCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayerCreatePageRoutingModule.html" data-type="entity-link">PrayerCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayerDetailsPageModule.html" data-type="entity-link">PrayerDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayerDetailsPageModule-bb3b6beeeb17bb4ac6b08963e2f8a123"' : 'data-target="#xs-components-links-module-PrayerDetailsPageModule-bb3b6beeeb17bb4ac6b08963e2f8a123"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayerDetailsPageModule-bb3b6beeeb17bb4ac6b08963e2f8a123"' :
                                            'id="xs-components-links-module-PrayerDetailsPageModule-bb3b6beeeb17bb4ac6b08963e2f8a123"' }>
                                            <li class="link">
                                                <a href="components/PrayerDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayerDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayerDetailsPageRoutingModule.html" data-type="entity-link">PrayerDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayerEditDetailsPageModule.html" data-type="entity-link">PrayerEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayerEditDetailsPageModule-4d1627b285547c3852c1731a2ec5a205"' : 'data-target="#xs-components-links-module-PrayerEditDetailsPageModule-4d1627b285547c3852c1731a2ec5a205"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayerEditDetailsPageModule-4d1627b285547c3852c1731a2ec5a205"' :
                                            'id="xs-components-links-module-PrayerEditDetailsPageModule-4d1627b285547c3852c1731a2ec5a205"' }>
                                            <li class="link">
                                                <a href="components/PrayerEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayerEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayerEditDetailsPageRoutingModule.html" data-type="entity-link">PrayerEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersActsPageModule.html" data-type="entity-link">PrayersActsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayersActsPageModule-e1978456b91becfe46812d6c8df8817d"' : 'data-target="#xs-components-links-module-PrayersActsPageModule-e1978456b91becfe46812d6c8df8817d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayersActsPageModule-e1978456b91becfe46812d6c8df8817d"' :
                                            'id="xs-components-links-module-PrayersActsPageModule-e1978456b91becfe46812d6c8df8817d"' }>
                                            <li class="link">
                                                <a href="components/PrayersActsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayersActsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersActsPageRoutingModule.html" data-type="entity-link">PrayersActsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersBasicPageModule.html" data-type="entity-link">PrayersBasicPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayersBasicPageModule-d91ed7af840f1bc31034fb7a4a415ecd"' : 'data-target="#xs-components-links-module-PrayersBasicPageModule-d91ed7af840f1bc31034fb7a4a415ecd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayersBasicPageModule-d91ed7af840f1bc31034fb7a4a415ecd"' :
                                            'id="xs-components-links-module-PrayersBasicPageModule-d91ed7af840f1bc31034fb7a4a415ecd"' }>
                                            <li class="link">
                                                <a href="components/PrayersBasicPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayersBasicPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersBasicPageRoutingModule.html" data-type="entity-link">PrayersBasicPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersEditPageModule.html" data-type="entity-link">PrayersEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayersEditPageModule-d5fcd3f25d798beb35440766574cf4b4"' : 'data-target="#xs-components-links-module-PrayersEditPageModule-d5fcd3f25d798beb35440766574cf4b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayersEditPageModule-d5fcd3f25d798beb35440766574cf4b4"' :
                                            'id="xs-components-links-module-PrayersEditPageModule-d5fcd3f25d798beb35440766574cf4b4"' }>
                                            <li class="link">
                                                <a href="components/PrayersEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayersEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersEditPageRoutingModule.html" data-type="entity-link">PrayersEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersLitaniesPageModule.html" data-type="entity-link">PrayersLitaniesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayersLitaniesPageModule-95597825114f596c5458ef1d1425a767"' : 'data-target="#xs-components-links-module-PrayersLitaniesPageModule-95597825114f596c5458ef1d1425a767"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayersLitaniesPageModule-95597825114f596c5458ef1d1425a767"' :
                                            'id="xs-components-links-module-PrayersLitaniesPageModule-95597825114f596c5458ef1d1425a767"' }>
                                            <li class="link">
                                                <a href="components/PrayersLitaniesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayersLitaniesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersLitaniesPageRoutingModule.html" data-type="entity-link">PrayersLitaniesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersNovenaPageModule.html" data-type="entity-link">PrayersNovenaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayersNovenaPageModule-6a0167ddfba93c43429fac4be113128e"' : 'data-target="#xs-components-links-module-PrayersNovenaPageModule-6a0167ddfba93c43429fac4be113128e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayersNovenaPageModule-6a0167ddfba93c43429fac4be113128e"' :
                                            'id="xs-components-links-module-PrayersNovenaPageModule-6a0167ddfba93c43429fac4be113128e"' }>
                                            <li class="link">
                                                <a href="components/PrayersNovenaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayersNovenaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersNovenaPageRoutingModule.html" data-type="entity-link">PrayersNovenaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersPageModule.html" data-type="entity-link">PrayersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayersPageModule-ff3b24eff2c4067375b6eec46d8e5042"' : 'data-target="#xs-components-links-module-PrayersPageModule-ff3b24eff2c4067375b6eec46d8e5042"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayersPageModule-ff3b24eff2c4067375b6eec46d8e5042"' :
                                            'id="xs-components-links-module-PrayersPageModule-ff3b24eff2c4067375b6eec46d8e5042"' }>
                                            <li class="link">
                                                <a href="components/PrayersPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersPageRoutingModule.html" data-type="entity-link">PrayersPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersThematicPageModule.html" data-type="entity-link">PrayersThematicPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrayersThematicPageModule-d608aed998b09f364a2730137ec2ff46"' : 'data-target="#xs-components-links-module-PrayersThematicPageModule-d608aed998b09f364a2730137ec2ff46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrayersThematicPageModule-d608aed998b09f364a2730137ec2ff46"' :
                                            'id="xs-components-links-module-PrayersThematicPageModule-d608aed998b09f364a2730137ec2ff46"' }>
                                            <li class="link">
                                                <a href="components/PrayersThematicPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrayersThematicPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrayersThematicPageRoutingModule.html" data-type="entity-link">PrayersThematicPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RadioPageModule.html" data-type="entity-link">RadioPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RadioPageModule-222116901ad6f65d23ff2c961dd5026b"' : 'data-target="#xs-components-links-module-RadioPageModule-222116901ad6f65d23ff2c961dd5026b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioPageModule-222116901ad6f65d23ff2c961dd5026b"' :
                                            'id="xs-components-links-module-RadioPageModule-222116901ad6f65d23ff2c961dd5026b"' }>
                                            <li class="link">
                                                <a href="components/RadioPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RadioPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RadioRoutingModule.html" data-type="entity-link">RadioRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReadingsPageModule.html" data-type="entity-link">ReadingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReadingsPageModule-d37365d59ae4fbf6b43da3892ce4ab2b"' : 'data-target="#xs-components-links-module-ReadingsPageModule-d37365d59ae4fbf6b43da3892ce4ab2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReadingsPageModule-d37365d59ae4fbf6b43da3892ce4ab2b"' :
                                            'id="xs-components-links-module-ReadingsPageModule-d37365d59ae4fbf6b43da3892ce4ab2b"' }>
                                            <li class="link">
                                                <a href="components/ReadingsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReadingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReadingsPageRoutingModule.html" data-type="entity-link">ReadingsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsEmailNotificationsPageModule.html" data-type="entity-link">SettingsEmailNotificationsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsEmailNotificationsPageModule-c18682c4c09c08043d768d2172ce6b72"' : 'data-target="#xs-components-links-module-SettingsEmailNotificationsPageModule-c18682c4c09c08043d768d2172ce6b72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsEmailNotificationsPageModule-c18682c4c09c08043d768d2172ce6b72"' :
                                            'id="xs-components-links-module-SettingsEmailNotificationsPageModule-c18682c4c09c08043d768d2172ce6b72"' }>
                                            <li class="link">
                                                <a href="components/SettingsEmailNotificationsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsEmailNotificationsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsEmailNotificationsPageRoutingModule.html" data-type="entity-link">SettingsEmailNotificationsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link">SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-b222659de7b0029f6b5cdebbb04eed1d"' : 'data-target="#xs-components-links-module-SettingsPageModule-b222659de7b0029f6b5cdebbb04eed1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-b222659de7b0029f6b5cdebbb04eed1d"' :
                                            'id="xs-components-links-module-SettingsPageModule-b222659de7b0029f6b5cdebbb04eed1d"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageRoutingModule.html" data-type="entity-link">SettingsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPushNotificationsPageModule.html" data-type="entity-link">SettingsPushNotificationsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPushNotificationsPageModule-b26a6645887767380c5d0d932ab0cc5d"' : 'data-target="#xs-components-links-module-SettingsPushNotificationsPageModule-b26a6645887767380c5d0d932ab0cc5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPushNotificationsPageModule-b26a6645887767380c5d0d932ab0cc5d"' :
                                            'id="xs-components-links-module-SettingsPushNotificationsPageModule-b26a6645887767380c5d0d932ab0cc5d"' }>
                                            <li class="link">
                                                <a href="components/SettingsPushNotificationsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPushNotificationsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPushNotificationsPageRoutingModule.html" data-type="entity-link">SettingsPushNotificationsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRemindersPageModule.html" data-type="entity-link">SettingsRemindersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsRemindersPageModule-1e159686416e6695d347f0445eba1329"' : 'data-target="#xs-components-links-module-SettingsRemindersPageModule-1e159686416e6695d347f0445eba1329"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsRemindersPageModule-1e159686416e6695d347f0445eba1329"' :
                                            'id="xs-components-links-module-SettingsRemindersPageModule-1e159686416e6695d347f0445eba1329"' }>
                                            <li class="link">
                                                <a href="components/SettingsRemindersPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsRemindersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRemindersPageRoutingModule.html" data-type="entity-link">SettingsRemindersPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TagCreatePageModule.html" data-type="entity-link">TagCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TagCreatePageModule-421ae5d1d5eeabbf8b852be88e07b625"' : 'data-target="#xs-components-links-module-TagCreatePageModule-421ae5d1d5eeabbf8b852be88e07b625"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TagCreatePageModule-421ae5d1d5eeabbf8b852be88e07b625"' :
                                            'id="xs-components-links-module-TagCreatePageModule-421ae5d1d5eeabbf8b852be88e07b625"' }>
                                            <li class="link">
                                                <a href="components/TagCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagCreatePageRoutingModule.html" data-type="entity-link">TagCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TagDetailsPageModule.html" data-type="entity-link">TagDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TagDetailsPageModule-4209988b92219482529dab9d99b5f1ce"' : 'data-target="#xs-components-links-module-TagDetailsPageModule-4209988b92219482529dab9d99b5f1ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TagDetailsPageModule-4209988b92219482529dab9d99b5f1ce"' :
                                            'id="xs-components-links-module-TagDetailsPageModule-4209988b92219482529dab9d99b5f1ce"' }>
                                            <li class="link">
                                                <a href="components/TagDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagDetailsPageRoutingModule.html" data-type="entity-link">TagDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TagEditDetailsPageModule.html" data-type="entity-link">TagEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TagEditDetailsPageModule-10fddde7c06727624e9caa7bc1e2f399"' : 'data-target="#xs-components-links-module-TagEditDetailsPageModule-10fddde7c06727624e9caa7bc1e2f399"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TagEditDetailsPageModule-10fddde7c06727624e9caa7bc1e2f399"' :
                                            'id="xs-components-links-module-TagEditDetailsPageModule-10fddde7c06727624e9caa7bc1e2f399"' }>
                                            <li class="link">
                                                <a href="components/TagEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagEditDetailsPageRoutingModule.html" data-type="entity-link">TagEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TagsEditPageModule.html" data-type="entity-link">TagsEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TagsEditPageModule-35376d8fe041897be4ac1f0272931509"' : 'data-target="#xs-components-links-module-TagsEditPageModule-35376d8fe041897be4ac1f0272931509"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TagsEditPageModule-35376d8fe041897be4ac1f0272931509"' :
                                            'id="xs-components-links-module-TagsEditPageModule-35376d8fe041897be4ac1f0272931509"' }>
                                            <li class="link">
                                                <a href="components/TagsEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagsEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsEditPageRoutingModule.html" data-type="entity-link">TagsEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TagsPageModule.html" data-type="entity-link">TagsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TagsPageModule-d4cd1f19c194e7af10c3b2ce7d92e8f5"' : 'data-target="#xs-components-links-module-TagsPageModule-d4cd1f19c194e7af10c3b2ce7d92e8f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TagsPageModule-d4cd1f19c194e7af10c3b2ce7d92e8f5"' :
                                            'id="xs-components-links-module-TagsPageModule-d4cd1f19c194e7af10c3b2ce7d92e8f5"' }>
                                            <li class="link">
                                                <a href="components/TagsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsPageRoutingModule.html" data-type="entity-link">TagsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestimoniesEditPageModule.html" data-type="entity-link">TestimoniesEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimoniesEditPageModule-5b9dfcc429abf1232adac07139df4019"' : 'data-target="#xs-components-links-module-TestimoniesEditPageModule-5b9dfcc429abf1232adac07139df4019"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimoniesEditPageModule-5b9dfcc429abf1232adac07139df4019"' :
                                            'id="xs-components-links-module-TestimoniesEditPageModule-5b9dfcc429abf1232adac07139df4019"' }>
                                            <li class="link">
                                                <a href="components/TestimoniesEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimoniesEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimoniesEditPageRoutingModule.html" data-type="entity-link">TestimoniesEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestimoniesPageModule.html" data-type="entity-link">TestimoniesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimoniesPageModule-fe9ad280bfe3823dbe2c1106449a8bbd"' : 'data-target="#xs-components-links-module-TestimoniesPageModule-fe9ad280bfe3823dbe2c1106449a8bbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimoniesPageModule-fe9ad280bfe3823dbe2c1106449a8bbd"' :
                                            'id="xs-components-links-module-TestimoniesPageModule-fe9ad280bfe3823dbe2c1106449a8bbd"' }>
                                            <li class="link">
                                                <a href="components/TestimoniesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimoniesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimoniesPageRoutingModule.html" data-type="entity-link">TestimoniesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonyCreatePageModule.html" data-type="entity-link">TestimonyCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimonyCreatePageModule-c91040e37d0fd6f4a622d586332e9303"' : 'data-target="#xs-components-links-module-TestimonyCreatePageModule-c91040e37d0fd6f4a622d586332e9303"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimonyCreatePageModule-c91040e37d0fd6f4a622d586332e9303"' :
                                            'id="xs-components-links-module-TestimonyCreatePageModule-c91040e37d0fd6f4a622d586332e9303"' }>
                                            <li class="link">
                                                <a href="components/TestimonyCreatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonyCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonyCreatePageRoutingModule.html" data-type="entity-link">TestimonyCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonyDetailsPageModule.html" data-type="entity-link">TestimonyDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimonyDetailsPageModule-609cefa3f404ead8c096c57e7b124d2f"' : 'data-target="#xs-components-links-module-TestimonyDetailsPageModule-609cefa3f404ead8c096c57e7b124d2f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimonyDetailsPageModule-609cefa3f404ead8c096c57e7b124d2f"' :
                                            'id="xs-components-links-module-TestimonyDetailsPageModule-609cefa3f404ead8c096c57e7b124d2f"' }>
                                            <li class="link">
                                                <a href="components/TestimonyDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonyDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonyDetailsPageRoutingModule.html" data-type="entity-link">TestimonyDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonyEditDetailsPageModule.html" data-type="entity-link">TestimonyEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimonyEditDetailsPageModule-40c04f88a90711674cf58a7ccecc1b86"' : 'data-target="#xs-components-links-module-TestimonyEditDetailsPageModule-40c04f88a90711674cf58a7ccecc1b86"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimonyEditDetailsPageModule-40c04f88a90711674cf58a7ccecc1b86"' :
                                            'id="xs-components-links-module-TestimonyEditDetailsPageModule-40c04f88a90711674cf58a7ccecc1b86"' }>
                                            <li class="link">
                                                <a href="components/TestimonyEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonyEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonyEditDetailsPageRoutingModule.html" data-type="entity-link">TestimonyEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThreadPageModule.html" data-type="entity-link">ThreadPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThreadPageModule-80e6b150f1b76dc6842c8dc53442120b"' : 'data-target="#xs-components-links-module-ThreadPageModule-80e6b150f1b76dc6842c8dc53442120b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThreadPageModule-80e6b150f1b76dc6842c8dc53442120b"' :
                                            'id="xs-components-links-module-ThreadPageModule-80e6b150f1b76dc6842c8dc53442120b"' }>
                                            <li class="link">
                                                <a href="components/ThreadPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThreadPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThreadPageRoutingModule.html" data-type="entity-link">ThreadPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TosPageModule.html" data-type="entity-link">TosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TosPageModule-087a824db1452c543191c75d615a72cf"' : 'data-target="#xs-components-links-module-TosPageModule-087a824db1452c543191c75d615a72cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TosPageModule-087a824db1452c543191c75d615a72cf"' :
                                            'id="xs-components-links-module-TosPageModule-087a824db1452c543191c75d615a72cf"' }>
                                            <li class="link">
                                                <a href="components/TosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TosPageRoutingModule.html" data-type="entity-link">TosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserDetailsPageModule.html" data-type="entity-link">UserDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserDetailsPageModule-20d3c201226e0bc3d2cd40751064458b"' : 'data-target="#xs-components-links-module-UserDetailsPageModule-20d3c201226e0bc3d2cd40751064458b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserDetailsPageModule-20d3c201226e0bc3d2cd40751064458b"' :
                                            'id="xs-components-links-module-UserDetailsPageModule-20d3c201226e0bc3d2cd40751064458b"' }>
                                            <li class="link">
                                                <a href="components/UserDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserDetailsPageRoutingModule.html" data-type="entity-link">UserDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserEditDetailsPageModule.html" data-type="entity-link">UserEditDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserEditDetailsPageModule-5f5329389ba607c8ba34b4321752becc"' : 'data-target="#xs-components-links-module-UserEditDetailsPageModule-5f5329389ba607c8ba34b4321752becc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserEditDetailsPageModule-5f5329389ba607c8ba34b4321752becc"' :
                                            'id="xs-components-links-module-UserEditDetailsPageModule-5f5329389ba607c8ba34b4321752becc"' }>
                                            <li class="link">
                                                <a href="components/UserEditDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserEditDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserEditDetailsPageRoutingModule.html" data-type="entity-link">UserEditDetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersPageModule.html" data-type="entity-link">UsersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersPageModule-bc937e4338a1043e83ca05d421b00804"' : 'data-target="#xs-components-links-module-UsersPageModule-bc937e4338a1043e83ca05d421b00804"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersPageModule-bc937e4338a1043e83ca05d421b00804"' :
                                            'id="xs-components-links-module-UsersPageModule-bc937e4338a1043e83ca05d421b00804"' }>
                                            <li class="link">
                                                <a href="components/UsersPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersPageRoutingModule.html" data-type="entity-link">UsersPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CustomValidators.html" data-type="entity-link">CustomValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/HowlerPlayer.html" data-type="entity-link">HowlerPlayer</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DbService.html" data-type="entity-link">DbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FcmService.html" data-type="entity-link">FcmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterceptorService.html" data-type="entity-link">InterceptorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessagesService.html" data-type="entity-link">MessagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationsService.html" data-type="entity-link">NotificationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScreenService.html" data-type="entity-link">ScreenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeoService.html" data-type="entity-link">SeoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToolsService.html" data-type="entity-link">ToolsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link">Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Intention.html" data-type="entity-link">Intention</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationGroups.html" data-type="entity-link">NotificationGroups</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notifications.html" data-type="entity-link">Notifications</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationsOptions.html" data-type="entity-link">NotificationsOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Praying.html" data-type="entity-link">Praying</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SoundInterface.html" data-type="entity-link">SoundInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SoundProgressInterface.html" data-type="entity-link">SoundProgressInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tags.html" data-type="entity-link">Tags</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Testimony.html" data-type="entity-link">Testimony</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TestiomnyThanking.html" data-type="entity-link">TestiomnyThanking</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});