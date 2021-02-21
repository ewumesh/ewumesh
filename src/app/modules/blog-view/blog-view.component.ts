import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
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
        this.blogService.getAllBlogs().pipe(delay(400)).subscribe(_ => {
            this.blogs = _;
        })
    }
}
