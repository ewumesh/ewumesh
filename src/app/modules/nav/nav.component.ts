import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'top-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.scss']
})
export class NavComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit(): void { }

    home() {
        this.router.navigate(['/home'])
    }

    login() {
        this.router.navigate(['/login']);
    }


    register() {
        this.router.navigate(['/register']);
    }

    contact() {
        this.router.navigate(['/contact'])
    }

    about() {
        this.router.navigate(['/notfound']);
    }

    blog() {
        this.router.navigate(['/blogs']);
    }
}
