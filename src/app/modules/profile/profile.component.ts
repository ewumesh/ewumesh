import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { collectionInOut, listAnimation, rowsAnimation } from 'src/app/shred/animations/animations';
import { AuthService } from '../authentication/auth.service';
import { ProfileFormComponent } from './profile-form.component';
import { ProfilePictureComponent } from './profile-image/profile-picture.component';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.scss'],
    animations: [collectionInOut,listAnimation,rowsAnimation]
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {

    private readonly toDestroy$ = new Subject<void>();
    
    loggedUserProfile = JSON.parse(localStorage.getItem('logged'));
    list: any[] = [];
    user: any = {};

    changePasswordForm: FormGroup;

    constructor(
        private dialog: MatDialog,
        private fb: FormBuilder,
        private authService: AuthService
    ) {
        this.getListOfUsers();
    }

    ngOnInit() {
        this.initForm();
     }

    private initForm() {
        this.changePasswordForm = this.fb.group({
            currentPassword: null,
            newPassword: null,
            cPassword: null,
        });
    }

    upDatePassword() {
        // let formData = this.changePasswordForm.value;
        // this.authService.getAllUsers().pipe(
        //     map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
        // ).subscribe(_ => {
        //     let data = this.list.find(a => a.key === this.loggedUserProfile.key);

        //     this.authService.editUser(data.key, data)
        // });
    }

    getListOfUsers() {
        this.authService.getAllUsers().pipe(
            map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
        ).subscribe(_ => {
            this.list = _;
            let data = this.list.find(a => a.key === this.loggedUserProfile.key)
            this.user = data;
        });
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

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
