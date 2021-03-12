import { Component, OnInit } from '@angular/core';
import { collectionInOut } from 'src/app/shred/animations/animations';

@Component({
    templateUrl: './404.component.html',
    styleUrls: ['./404.component.scss'],
    animations: [collectionInOut]
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
