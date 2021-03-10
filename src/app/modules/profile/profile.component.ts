import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { AuthService } from '../authentication/auth.service';
import { ProfileFormComponent } from './profile-form.component';
import { ProfilePictureComponent } from './profile-image/profile-picture.component';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
    loggedUserProfile = JSON.parse(localStorage.getItem('logged'));
    list: any[] = [];
    user: any = {};

    constructor(
        private dialog: MatDialog,
        private authService: AuthService
    ) {
        this.getListOfUsers();
    }

    ngOnInit() { }

    getListOfUsers() {
        this.authService.getAllUsers().pipe(
            map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
        ).subscribe(_ => {
            this.list = _;
            let data = this.list.find(a => a.key === this.loggedUserProfile.key)
            this.user = data;
        })
    }

    edit(data) {
        let d = this.list.find(_ => _.key === this.loggedUserProfile.key);
        let instance: MatDialogRef<ProfileFormComponent, any>;
        instance = this.dialog.open(ProfileFormComponent, {
            width: '900px',
            data: d ? d : {},
            autoFocus: false,
            hasBackdrop: false
        });
    }

    uplaodImage() {
        let d = this.list.find(_ => _.key === this.loggedUserProfile.key);
        this.dialog.open(ProfilePictureComponent, {
            width: '100%',
            height: '100vh',
            data: d ? d : {},
        });
    }

    ngAfterViewInit() {

    }
}
