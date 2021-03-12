import { Component, OnInit } from '@angular/core';
import { collectionInOut } from 'src/app/shred/animations/animations';

@Component({
    templateUrl: './access-denied.component.html',
    styleUrls: ['./access-denied.scss'],
    animations: [collectionInOut]
})
export class AccessDeniedComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
