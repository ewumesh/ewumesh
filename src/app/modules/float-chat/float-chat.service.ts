import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FloatChatService {

    chats: AngularFireList<any>;

    constructor(
        private db: AngularFireDatabase
    ) {}

    sendMessage(body): Observable<any> {
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        this.db.list('liveChat').push({ content: body });
        return of(body)
    }

    getAllMessages() {
        this.chats = this.db.list('liveChat');
        return this.chats.snapshotChanges();
    }

}