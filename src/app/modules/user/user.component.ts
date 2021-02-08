import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.scss']
})
export class UserComponent implements OnInit {
    panelOpenState = false;
    users: any = {};

    constructor() { }

    ngOnInit() {
    }
}
