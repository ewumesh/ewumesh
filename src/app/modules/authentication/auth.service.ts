import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    // getUserDetail(userData?: any): Observable<any> {

    //     let db = JSON.parse(localStorage.getItem('userdata'))
    //     let user = db.find(_ => _.userName === userData.userName);

    //     if(userData.userName === user.userName && userData.password === user.password) {
    //     return of(user);
    //     } else {
    //         return of(undefined);
    //     }
    // }

    // signUp(userData: any): Observable<any> {
    //     let checkList = USERS.find(_ => _.userName === userData.email);

    //     if (checkList !== undefined) {
    //         return of(false);
    //     } else {
    //         USERS.push(userData);
    //         userData.id = USERS.length * 638;
    //         return of(true);
    //     }
    // }

    getUsers() {
        return of(USERS);
    }


    // delete(id: number): Observable<any> {
    //     let data = JSON.parse(localStorage.getItem('userdata'));
    //     if (data !== null) {
    //         let i = data.findIndex(_ => _.id === id);
    //         data.splice(i, 1);
    //         localStorage.setItem('userdata', JSON.stringify(data));
    //         return of(data);
    //     } else {
    //         localStorage.setItem('userdata', JSON.stringify([]));
    //         let d = JSON.parse(localStorage.getItem('userdata'));
    //         let i = d.findIndex(_ => _.id === id);
    //         d.splice(i, 1);
    //         localStorage.setItem('userdata', JSON.stringify(data));
    //         return of(d);
    //     }
    // }

    // update(body: any): Observable<any> {
    //     let d = JSON.parse(localStorage.getItem('userdata'));
    //     if (d !== null) {
    //         let eValue = d.findIndex(x => x.id === body.id);
    //         body.sn = d[eValue].sn;
    //         d[eValue] = body;
    //         localStorage.setItem('userdata', JSON.stringify(d));
    //         return of(body);
    //     } else {
    //         localStorage.setItem('userdata', JSON.stringify([]));
    //         let data = JSON.parse(localStorage.getItem('userdata'));
    //         let eValue = data.findIndex(x => x.id === body.id);
    //         data[eValue] = body;
    //         localStorage.setItem('userdata', JSON.stringify(data));
    //         return of(body);
    //     }
    // }

    // signUp(body: any): Observable<any> {
    //     let data = JSON.parse(localStorage.getItem('userdata'));
    //     let checkList = data.find(_ => _.userName === body.email);

    //     if (checkList !== undefined) {
    //         return of(false);
    //     } else {
    //         data.push(body);
    //         body.id = data.length + 1;
    //         body.sn = data.length + 1;
    //         localStorage.setItem('userdata', JSON.stringify(data));
    //         localStorage.update
    //         return of(true);
    //     }

    // }

    login (authenticate: any): Observable<any> {
        return this.http.post('http://localhost:3000/login', authenticate);
    }

    register(authenticate: any): Observable<any> {
        return this.http.post('http://localhost:3000/register', authenticate);
    }

}

let USERS = [
    {sn: 1, id: 23452, userName: 'admin', password: 'admin', firstName: 'Admin', lastName: 'Admin', phone: 'Admin', designation: 'Admin' },
    {sn: 2, id: 67452, userName: 'umeshthapa539@gmail.com', password: '12345', firstName: 'Umesh', lastName: 'Thapa', phone: '9860614339', designation: 'Developer and Designer' }
]