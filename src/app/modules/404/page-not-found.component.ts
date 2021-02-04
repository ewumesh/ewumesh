import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    constructor(private router: Router) { }

    goto() {
        this.router.navigate(['/home']);
    }

    ngOnInit(): void { }
}
