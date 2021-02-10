import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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


    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.team, event.previousIndex, event.currentIndex);
      }

    ngOnInit() {
        this.tService.getAllTeam().pipe(delay(500)).subscribe(x => {
            this.team = x;
        })
     }
}
