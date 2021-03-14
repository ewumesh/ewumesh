import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { collectionInOut } from 'src/app/shred/animations/animations';
import { BlogService } from '../admin/blog/blog.service';

@Component({
    templateUrl: './blog-view.component.html',
    styleUrls: ['./blog-view.component.scss'],
    animations: [collectionInOut]
})
export class BlogViewComponent implements OnInit, OnDestroy {
    private readonly toDestroy$ = new Subject<void>();
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

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
