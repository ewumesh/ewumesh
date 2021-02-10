import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TeamService } from '../admin/team/team.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {

    team: any[] = [];
    constructor(private tService: TeamService) { }

    ngOnInit() {
        this.tService.getAllTeam().pipe(delay(500)).subscribe(x => {
            this.team = x;
        })
     }
}
