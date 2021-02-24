import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { BlogService } from '../admin/blog/blog.service';
import { TeamService } from '../admin/team/team.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {

  team: any[] = [];
  blogs: any[] = [];
  constructor(
    private tService: TeamService,
    private blogService: BlogService
    ) { }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.team, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.tService.getAllTeams().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(_ => {
      this.team = _;
    })

    this.getAllBlogs();
  }

  getAllBlogs() {
    this.blogService.getAllBlogs().pipe(
        map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
      ).subscribe(_ => {
        this.blogs = _;
      })
}
}
