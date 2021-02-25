import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
    selector: 'top-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.scss']
})
export class NavComponent implements OnInit {

    loggedList: AngularFireList<any>;
    isLogged: boolean = false;

    constructor(
        private router: Router,
        public authService: AuthService,
        private db: AngularFireDatabase
    ) { }

    ngOnInit() {
        this.loggedList = this.db.list('loggedUser');
        this.loggedList.snapshotChanges().subscribe(_ => {
            console.log(_);
        })
     }

    home() {
        this.router.navigate(['/home'])
    }

    login() {
        this.router.navigate(['/login']);
    }

    logout() {
        this.authService.currentUser = undefined;
    }


    register() {
        this.router.navigate(['/register']);
    }

    contact() {
        this.router.navigate(['/contact'])
    }

    about() {
        this.router.navigate(['/about']);
    }

    blog() {
        this.router.navigate(['/blogs']);
    }
}
