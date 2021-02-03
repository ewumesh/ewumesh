import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

    getUserDetail(userData: any): Observable<any> {
        let user = USERS.find(_ => _.userName === userData.userName);

        return of(user);
    }

    signUp(userData: any): Observable<any> {
        let checkList = USERS.find(_ => _.userName === userData.email);

        if (checkList !== undefined) {
            return of(false);
        } else {
            USERS.push(userData);
            userData.id = USERS.length *638;
            return of(true);
        }
    }

}

let USERS = [
    { id: 23452, userName: 'admin', password: 'admin' },
    { id: 67452, userName: 'umeshthapa539@gmail.com', password: '12345' }
]