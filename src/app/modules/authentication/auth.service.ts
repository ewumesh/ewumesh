import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

    usersList: AngularFireList<any>;

    currentUser: boolean = false;
    logged: any;

    constructor(
        private db: AngularFireDatabase
    ) {

    }
    isLogged() {
        return this.currentUser;
    }

    getAllUsers(): Observable<any> {
        this.usersList = this.db.list('users');
        return this.usersList.snapshotChanges();
    }

    addUser(body): Observable<any> {
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        this.db.list('users').push({ content: body });
        return of(body)
    }

    deleteUser(key): Observable<any> {
        let k = key;
        this.db.list('users').remove(k);
        return of(true);
    }

    logOut() {
        return this.currentUser = false;
    }

}
