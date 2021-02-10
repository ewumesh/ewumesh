import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor() {}

    getAllTeam(): Observable<any> {
        return of(TEAM);
    }

    getTeamById(id: number): Observable<any> {
        let data = TEAM.find(_ => _.id === id);
        return of(data);
    }

    updateTeam(body: any): Observable<any> {
        let data = TEAM.findIndex(_ => _.id === body.id);
        let d = TEAM.find(_ => _.id === body.id);
        if(body.id !== 0) {
        body.id = d.id;
        body.sn = d.sn
        TEAM[data] = body;
        return of(TEAM)
        } else {
            TEAM.push(body);
            body.id=TEAM.length+1;
            body.sn=TEAM.length+1;

            return of(TEAM)
        }
    } 

    deleteTeam(id: number): Observable<any> {
        let i = TEAM.findIndex(x => x.id === id);
        TEAM.splice(i, 1);
        return of(TEAM);
    }
}

let TEAM = [
    { id: 1, sn: 1, firstName: 'Umesh', imgUrl: 'assets/images/ut.jpg', lastName: 'Thapa', position: 'Chief Executive Officer', about: 'Im Umesh Thapa, a multi disciplinary creative from Nepal, currently worked as a Web Application Developer' },
    { id: 2, sn: 2, firstName: 'Pujan', imgUrl: 'assets/images/pr.jpg', lastName: 'Rai', position: '.......', about: '...............' },
    { id: 7, sn: 7, firstName: 'Bijen', imgUrl: 'assets/images/bijen.jpg', lastName: 'Shrestha', position: '.....', about: '...........' },
    { id: 4, sn: 4, firstName: 'Deepika', imgUrl: 'assets/images/dp.jpg', lastName: 'Puri', position: '.........', about: '..............' },
    { id: 5, sn: 5, firstName: 'Dharmendra', imgUrl: 'assets/images/ds.jpg', lastName: 'Shah', position: '........', about: '............' },
    { id: 6, sn: 6, firstName: 'Sagar', lastName: 'Katuwal', imgUrl: 'assets/images/sk.jpg', position: '.............', about: '................' },
    { id: 3, sn: 3, firstName: 'Kanchan', lastName: 'Poudel', imgUrl: 'assets/images/kps.jpg', position: '.............', about: '................' },
    { id: 8, sn: 8, firstName: 'Rabin', lastName: 'Neupane', imgUrl: 'assets/images/rn.jpg', position: '.............', about: '................' },
    { id: 9, sn: 9, firstName: 'Prajwol', lastName: 'Aryal', imgUrl: 'assets/images/pa.jpg', position: '.............', about: '................' },
    { id: 10, sn: 10, firstName: 'Aadarsa', lastName: 'Neupane', imgUrl: 'assets/images/team-1.jpg', position: '.............', about: '................' },
    { id: 11, sn: 11, firstName: 'Saraswoti', lastName: 'Shrestha', imgUrl: 'assets/images/ss.jpg', position: '.............', about: '................' },
    { id: 12, sn: 12, firstName: 'Suren', lastName: 'Timilsina', imgUrl: 'assets/images/st.jpg', position: '.............', about: '................' },
]