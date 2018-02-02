import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'shared/services/auth.service';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin)
  }
}
