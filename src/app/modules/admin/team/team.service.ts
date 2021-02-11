import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor() {
        localStorage.setItem('teams', JSON.stringify(
            [
                { id: 1, sn: 1, firstName: 'Umesh', imgUrl: 'assets/images/umesh.jpg', lastName: 'Thapa', position: 'Software Developer/ Designer', about: 'Im Umesh Thapa, a multi disciplinary creative from Nepal, currently worked as a Web Application Developer', links: [{id: 1, facebook: "https://www.facebook.com/ewumesh", instagram: "https://www.instagram.com/ewumesh", twitter: "https://www.twitter.com/ewumesh", linkedin: "https://www.linkedin.com/in/umesh-thapa-3ba732156/"}] },
                { id: 2, sn: 2, firstName: 'Pujan', imgUrl: 'assets/images/pujan.jpg', lastName: 'Rai', position: 'Senior Manager, Social Media Engagement', about: 'Develop and help execute senior leader social media thought leadership programs, aligning to message platforms, business goals and executive personalities.', links: [{id: 2, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/' }]},
                { id: 3, sn: 3, firstName: 'Kanchan', lastName: 'Poudel', imgUrl: 'assets/images/kanchan-1.jpg', position: 'Administrative Officer', about: 'Administrative Officers manage the daily tasks of a company or organization by providing administrative and clerical support. ',links: [{id: 7, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 7, sn: 7, firstName: 'Bijen', imgUrl: 'assets/images/bijen-1.jpg', lastName: 'Shrestha', position: 'Frontend Developer', about: 'A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. They are usually supported by back-end web developers.', links: [{id: 3, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 5, sn: 5, firstName: 'Dharmendra', imgUrl: 'assets/images/dharmendra.jpg', lastName: 'Shah', position: 'UI/UX Designer', about: 'X-UI Designers are generally responsible for collecting, researching, investigating and evaluating user requirements.', links: [{id: 5, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}]},
                { id: 6, sn: 6, firstName: 'Sagar', lastName: 'Katuwal', imgUrl: 'assets/images/sagar.jpg', position: 'Managing Director', about: 'The Managing Directors responsibilities include developing and implementing strategic plans and company policies, maintaining an open dialogue with stakeholders, and driving organizational success.', links: [{id: 6, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 4, sn: 4, firstName: 'Deepika', imgUrl: 'assets/images/deepika.jpg', lastName: 'Puri', position: 'React Native Developer', about: 'React Native leverages common JavaScript skills while allowing a developer to simultaneously target both iOS and Android.',links: [{id: 4, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}]},
                { id: 8, sn: 8, firstName: 'Rabin', lastName: 'Neupane', imgUrl: 'assets/images/rabin.jpg', position: 'Quality Assurance(QA)', about: 'A quality assurance specialist ensures that the final product observes the companys quality standards. In general, these detail-oriented professionals are responsible for the development',links: [{id: 8, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 9, sn: 9, firstName: 'Prajwol', lastName: 'Aryal', imgUrl: 'assets/images/prajwol.jpg', position: 'Editor', about: 'Video Editors are generally responsible for editing and assembling recorded raw material into a suitable, finished product ready for broadcasting.',links: [{id: 9, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 10, sn: 10, firstName: 'Aadarsa', lastName: 'Neupane', imgUrl: 'assets/images/aadarsa.jpg', position: 'Data Analyst', about: 'A data analyst collects and stores data on sales numbers, market research, logistics, linguistics, or other behaviors. They bring technical expertise to ensure the quality and accuracy of that data',links: [{id: 10, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 11, sn: 11, firstName: 'Saraswoti', lastName: 'Shrestha', imgUrl: 'assets/images/saraswoti.jpg', position: 'PHP Developer', about: ' PHP developer is responsible for writing server-side web application logic. PHP developers usually develop back-end components, connect the application with the other (often third-party) web services.',links: [{id: 11, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
                { id: 12, sn: 12, firstName: 'Suren', lastName: 'Timilsina', imgUrl: 'assets/images/suren.jpg', position: 'Marketing Manager', about: 'A marketing manager is responsible for managing the promotion and positioning of a brand or the products and services that a company sells.',links: [{id: 12, facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/', twitter: 'https://www.twitter.com/', linkedin: 'https://www.linkedin.com/in/'}] },
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

let TEAM = JSON.parse(localStorage.getItem('teams')) || [];