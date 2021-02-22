import { Component, OnInit } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { BlogService } from '../admin/blog/blog.service';

@Component({
    templateUrl: './blog-view.component.html',
    styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

    blogs: any[] = [];

    constructor(
        private blogService: BlogService
    ) { }

    ngOnInit() {
        this.getBlogs();
     }

     getBlogs() {
        this.blogService.getAllBlogs().pipe(
            map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
          ).subscribe(_ => {
            this.blogs = _;
          })
    }
}
