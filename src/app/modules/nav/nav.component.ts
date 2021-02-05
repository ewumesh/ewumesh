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
        setTimeout(() => {
            this.router.navigate(['/home'])
        }, 300);
    }

    login() {
        setTimeout(() => {
            this.router.navigate(['/login']);
        }, 300)
    }


    register(){

        setTimeout(() => {
            this.router.navigate(['/register']);
        }, 300)
    }

    contact() {
        this.router.navigate(['/asd'])
    }

    about() {
        this.router.navigate(['/notfound']);
    }
}
