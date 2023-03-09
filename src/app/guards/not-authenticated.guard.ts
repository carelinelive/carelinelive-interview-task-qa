import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class NotAuthenticatedGuard implements CanActivate {

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.authService.authenticated$.pipe(
            map(authenticated => {
                if (!authenticated) {
                    return true;
                }

                return this.router.createUrlTree(['/']);
            })
        );
    }
}
