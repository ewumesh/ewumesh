import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.scss']
})
export class ProfileComponent implements OnInit {
    panelOpenState = false;
    users: any = {};

    constructor() { }

    ngOnInit() {
    }
}
