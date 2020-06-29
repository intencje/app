import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Role, User } from '../../_models/firebase.model';
import { AuthService } from '../../_services/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit, OnDestroy {
  @Input() set appHasRole(role: Role[]) {
    this.roles = role;
    this.updateView();
  }
  private user: User;
  private roles = [];
  private unsubscribe = new Subject();

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.auth.user$
      .pipe(
        map((user: User) => {
          this.viewContainer.clear();
          this.user = user;
          this.updateView();
        }),
        takeUntil(this.unsubscribe),
      )
      .subscribe();
  }

  private updateView() {
    this.checkPermission() ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
  }

  private checkPermission() {
    if (this.user && this.user.roles) {
      return this.user.roles.some((role: Role) => this.roles.includes(role));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
