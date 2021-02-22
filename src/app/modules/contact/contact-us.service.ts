import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactUsService {
    teamList: AngularFireList<any>;
    constructor(public db: AngularFireDatabase) {

    }


    postUserResponse(body: any): Observable<any> {
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        this.db.list('userResponse').push({ content: body });
        return of(body)
    }
}