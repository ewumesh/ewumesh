import { CanActivate, Router } from "@angular/router";

export class AlwaysAuthGuard implements CanActivate {
    // constructor(private router: Router) {}

    canActivate() {
        let data = JSON.parse(localStorage.getItem('logged'));
        if (data !== null) {
            if (data.content.role === 'admin') {
                return true;
            }
        }
    }
}