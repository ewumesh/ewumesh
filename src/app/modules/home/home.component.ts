import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { fadeInOutStagger, listAnimation, collectionInOut} from 'src/app/shred/animations/animations';
import { BlogService } from '../admin/blog/blog.service';
import { TeamService } from '../admin/team/team.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss'],
  animations: [fadeInOutStagger, listAnimation, collectionInOut]
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
      this.team = _.slice(0,4);
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
