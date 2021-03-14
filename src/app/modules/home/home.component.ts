import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { fadeInOutStagger, listAnimation, collectionInOut } from 'src/app/shred/animations/animations';
import { BlogService } from '../admin/blog/blog.service';
import { TeamService } from '../admin/team/team.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss'],
  animations: [fadeInOutStagger, listAnimation, collectionInOut]
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly toDestroy$ = new Subject<void>();

  loggedUser = JSON.parse(localStorage.getItem('logged'));

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
      this.team = _.slice(0, 4);
    })

    this.getAllBlogs();
  }

  getAllBlogs() {
    this.blogService.getAllBlogs().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(_ => {
      this.blogs = _;
    })
  }

  ngOnDestroy() {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }
}
