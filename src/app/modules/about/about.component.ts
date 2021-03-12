import { Component, OnInit } from '@angular/core';
import { collectionInOut } from 'src/app/shred/animations/animations';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.scss'],
    animations: [collectionInOut]
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
