import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map } from 'rxjs/operators';
import { BlogService } from '../admin/blog/blog.service';

@Component({
    templateUrl: './blog-view.component.html',
    styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

    blogs: any[] = [];

    constructor(
        private blogService: BlogService,
        private router: Router
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

    readBlog(data) {
        // let a = this.blogs.find(_ => _.content.id === id);
        // if(a !== undefined) {
        //     this.blogService.getBlogById(a);
        // }

        this.router.navigate(['/view', data.id], {queryParams:data.title });

    }
}
