import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
    selector: 'top-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.scss']
})
export class NavComponent implements OnInit {
    constructor(
        private router: Router,
        public authService: AuthService
    ) { }

    ngOnInit(): void { }

    home() {
        this.router.navigate(['/home'])
    }

    login() {
        this.router.navigate(['/login']);
    }

    logout() {
        this.authService.currentUser = undefined;
    }


    register() {
        this.router.navigate(['/register']);
    }

    contact() {
        this.router.navigate(['/contact'])
    }

    about() {
        this.router.navigate(['/about']);
    }

    blog() {
        this.router.navigate(['/blogs']);
    }
}
