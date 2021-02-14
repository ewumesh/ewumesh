import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { delay, map } from 'rxjs/operators';
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
    this.tService.getAllTeams().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(_ => {
      this.team = _;
    })
  }
}
