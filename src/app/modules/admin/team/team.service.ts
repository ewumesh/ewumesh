import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class TeamService {
    teamList: AngularFireList<any>;
    teamRef: AngularFireObject<any>;

    constructor(
        public db: AngularFireDatabase) {
    }


    getAllTeams() {
        this.teamList = this.db.list('teams');
        return this.teamList.snapshotChanges();
    }

    getTeamById(id: number): Observable<any> {
        // let data = TEAM.find(_ => _.id === id);
        let data: any;
        this.teamList.valueChanges().subscribe(_ => {
            let a = _.find(_ => _.content.id === id);
            data = a.content;
        })
        return of(data);
    }

    updateTeam(key, body,a): Observable<any> {
        body.id = a.id;
        body.sn = a.sn;
        this.teamList.update(key, {content: body});

        return of(body);
    }

    addTeam(body: any): Observable<any> {
            let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
            body.id = rand;
            body.sn = rand;
            this.db.list('teams').push({content: body});
            return of(body)
    }

    deleteTeam(key): Observable<any> {
        let k =key;
        this.db.list('teams').remove(k);
        return of(true);
    }

    // Links

    addLinks(body): Observable<any> {
        // let data = TEAM.find(_ => _.id === body.id);
        // let d = data.links.findIndex(_ => _.id ===body.id);
        // data.links[d] = body;
        // localStorage.setItem('teams', JSON.stringify(TEAM))
        return of();
    }
}
