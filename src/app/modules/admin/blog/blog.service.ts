import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    getAllBlogs(): Observable<any> {
        return of(BLOGS);
    }

    postBlog(body: any): Observable<any> {
        let arr = BLOGS;
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        arr.push(body);
        return of(BLOGS);
    }

    editBlog(body: any): Observable<any> {
        let i = BLOGS.findIndex(_ => _.id === body.id);
        let data = BLOGS.find(_ => _.id === body.id);
        body.id = data.id;
        body.sn = data.sn;
        BLOGS[i] = body
        return of(BLOGS);
    }

    getBlogById(id: number): Observable<any> {
        let data = BLOGS.find(_ => _.id === id)
        return of(data);
    }

    deleteBlog(id: number): Observable<any> {
        return of()
    }

}

let BLOGS = [
    {
        id: 1,
        sn: 1,
        headerImg: null,
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
    },
    {
        id: 5,
        sn: 5,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    },
    {
        id: 6,
        sn: 6,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    },
]
