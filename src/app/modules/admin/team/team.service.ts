import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

let TEAM = JSON.parse(localStorage.getItem('teams')) || [];

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor() {
        localStorage.setItem('teams', JSON.stringify(
            [
                { id: 1, sn: 1, firstName: 'Umesh', imgUrl: 'assets/images/ut.jpg', lastName: 'Thapa', position: 'Chief Executive Officer', about: 'Im Umesh Thapa, a multi disciplinary creative from Nepal, currently worked as a Web Application Developer', links: [{id: 1, facebook: "https://www.facebook.com/ewumesh", instagram: "https://www.instagram.com/ewumesh", twitter: "https://www.twitter.com/ewumesh", linkedin: "https://www.linkedin.com/in/umesh-thapa-3ba732156/"}] },
                { id: 2, sn: 2, firstName: 'Pujan', imgUrl: 'assets/images/pr.jpg', lastName: 'Rai', position: '.......', about: '...............', links: [{id: 2, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/' }]},
                { id: 7, sn: 7, firstName: 'Bijen', imgUrl: 'assets/images/bijen.jpg', lastName: 'Shrestha', position: '.....', about: '...........', links: [{id: 3, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 4, sn: 4, firstName: 'Deepika', imgUrl: 'assets/images/dp.jpg', lastName: 'Puri', position: '.........', about: '..............',links: [{id: 4, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}]},
                { id: 5, sn: 5, firstName: 'Dharmendra', imgUrl: 'assets/images/ds.jpg', lastName: 'Shah', position: '........', about: '............', links: [{id: 5, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}]},
                { id: 6, sn: 6, firstName: 'Sagar', lastName: 'Katuwal', imgUrl: 'assets/images/sk.jpg', position: '.............', about: '................', links: [{id: 6, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 3, sn: 3, firstName: 'Kanchan', lastName: 'Poudel', imgUrl: 'assets/images/kps.jpg', position: '.............', about: '................',links: [{id: 7, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 8, sn: 8, firstName: 'Rabin', lastName: 'Neupane', imgUrl: 'assets/images/rn.jpg', position: '.............', about: '................',links: [{id: 8, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 9, sn: 9, firstName: 'Prajwol', lastName: 'Aryal', imgUrl: 'assets/images/pa.jpg', position: '.............', about: '................',links: [{id: 9, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 10, sn: 10, firstName: 'Aadarsa', lastName: 'Neupane', imgUrl: 'assets/images/an.jpg', position: '.............', about: '................',links: [{id: 10, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 11, sn: 11, firstName: 'Saraswoti', lastName: 'Shrestha', imgUrl: 'assets/images/ss.jpg', position: '.............', about: '................',links: [{id: 11, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 12, sn: 12, firstName: 'Suren', lastName: 'Timilsina', imgUrl: 'assets/images/st.jpg', position: '.............', about: '................',links: [{id: 12, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
            ]
        ))
    }

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
        if (body.id !== 0) {
            body.id = d.id;
            body.sn = d.sn
            TEAM[data] = body;
            localStorage.setItem('teams', JSON.stringify(TEAM))
            return of(body)
        } else {
            TEAM.push(body);
            body.id = TEAM.length + 1;
            body.sn = TEAM.length + 1;
            localStorage.setItem('teams', JSON.stringify(TEAM));
            return of(body)
        }
    }

    deleteTeam(id: number): Observable<any> {
        let i = TEAM.findIndex(x => x.id === id);
        TEAM.splice(i, 1);
        localStorage.setItem('teams', JSON.stringify(TEAM));
        return of(TEAM);
    }

    // Links

    addLinks(body): Observable<any> {
        let data = TEAM.find(_ => _.id === body.id);
        let d = data.links.findIndex(_ => _.id ===body.id);
        data.links[d] = body;
        localStorage.setItem('teams', JSON.stringify(TEAM))
        return of(TEAM);
    }
}