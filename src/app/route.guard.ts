import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })

export class AlwaysAuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        let data = JSON.parse(localStorage.getItem('logged'));
        if (data !== null) {
            if (data.content.role === 'admin') {
                return true;
            } 
            // else {
            //     return this.router.parseUrl('/404');
            //     // return false;
            // }

            // if(data.content.role !== 'admin') {
            //     return this.router.navigate(['/access-denied']);
            // }
        }


    }
}