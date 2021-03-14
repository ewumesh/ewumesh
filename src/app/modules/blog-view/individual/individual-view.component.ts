import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService } from '../../admin/blog/blog.service';

@Component({
    templateUrl: './individual-view.component.html',
    styleUrls: ['./individual-view.scss']
})
export class IndividualViewComponent implements OnInit, OnDestroy {

    private readonly toDestroy$ = new Subject<void>();

    public subs$;

    individualBlog: any;

    blogs: any[] =[];

    constructor(
        private blogService: BlogService,
        private router: Router,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.subs$ = this._route
            .queryParams
            .subscribe((params) => {
                // this.memberName = params["name"];
                // this.individualBlog = this.blogs.find(_ => _.id === params)
                this.individualBlog = params;

            });
            
            this.getAllBlogs();
    }

    getAllBlogs() {
        this.blogService.getAllBlogs().pipe(
            map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
          ).subscribe(_ => {
            this.blogs = _;
          })
    }

    // this is to kill the subscription
    ngOnDestroy() {
        if (this.subs$) {
            this.subs$.unsubscribe();
        }

        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
