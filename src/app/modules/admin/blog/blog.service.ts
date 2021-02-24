import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    blogsList: AngularFireList<any>;
    constructor(private db: AngularFireDatabase) {}

    getBlogById(a?):Observable<any> {
        if(a) {
        return of(a);
        } else {
            return of([]);
        }
    }

    getAllBlogs(): Observable<any> {
        this.blogsList = this.db.list('blogs');
        return this.blogsList.snapshotChanges();
    }

    postBlog(body: any): Observable<any> {
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        this.db.list('blogs').push({ content: body });
        return of(body)
    }

    editBlog(key, body, a): Observable<any> {
        body.id = a.id;
        body.sn = a.sn;
        this.blogsList.update(key, {content: body});

        return of(body);
    }

    deleteBlog(key): Observable<any> {
        let k = key;
        this.db.list('blogs').remove(k);
        return of(true);
    }

}

let BLOGS = [
    {
        id: 1,
        sn: 1,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    },
    {
        id: 2,
        sn: 2,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    },
    {
        id: 3,
        sn: 3,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    },
    {
        id: 4,
        sn: 4,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    }
]
