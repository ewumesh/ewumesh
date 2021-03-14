import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { collectionInOut } from 'src/app/shred/animations/animations';

@Component({
    templateUrl: './access-denied.component.html',
    styleUrls: ['./access-denied.scss'],
    animations: [collectionInOut]
})
export class AccessDeniedComponent implements OnInit {
    
    constructor(private router: Router) { }

    ngOnInit(): void { }

    // Navigate to hompepage
    goHome() {
        this.router.navigate(['/home']);
    }
}
