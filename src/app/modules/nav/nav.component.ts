import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
    selector: 'top-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.scss']
})
export class NavComponent implements OnInit {

    isLogged: boolean = false;

    loggedData: any;

    constructor(
        private router: Router,
        public authService: AuthService
    ) { }

    ngOnInit() {
        let a = JSON.parse(localStorage.getItem('logged'));
        if(a !== null) {
            this.isLogged = true;
            this.loggedData = a;
        }
     }

    home() {
        this.router.navigate(['/home'])
    }

    login() {
        this.router.navigate(['/login']);
    }

    logout() {
        localStorage.setItem('logged', null);
        this.router.navigate(['/home']);
        window.location.reload();
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
    blogAdmin() {
        this.router.navigate(['/admin/blogs']);
    }

    profile() {
        this.router.navigate(['/profile']);
    }
    team() {
        this.router.navigate(['/admin/team']);
    }

    user() {
        this.router.navigate(['admin/users'])
    }

}
