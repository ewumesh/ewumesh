import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { GenericValidator } from '../../../shred/validations/generic-validators'
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AuthService } from '../auth.service';
import { SnackbarComponent } from '../../../../../src/app/shred/validations/snackbar/snackbar.component';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    isLoading: boolean = false;
    loginForm: FormGroup;

    users: any[] = [];

    genericValidator: GenericValidator;
    displayMessage: any = {};
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        private router: Router,
        private snackbarService: MatSnackBar,
        private authService: AuthService,
        private db: AngularFireDatabase,
    ) {
        this.genericValidator = new GenericValidator({
            'userName': {
                'required': 'This field is required.'
            },
            'password': {
                'required': 'This field is required.'
            }
        })
    }

    ngOnInit() {
        this.initForm();
        this.getListOfUsers();
    }

    getListOfUsers() {
        this.authService.getAllUsers().pipe(
            map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
          ).subscribe(_ => {
            this.users = _;
          })
    }

    private initForm() {
        this.loginForm = this.fb.group({
            id: 0,
            userName: [null, Validators.required],
            password: [null, Validators.required]
        })
    }

    ngAfterViewInit() {
        this.validation();
    }

    private validation() {
        this.genericValidator
            .initValidationProcess(this.loginForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }
 
    saveChanges() {
        this.isLoading = true;
        let a = this.users.find(_ => _.content.email === this.loginForm.value.userName && _.content.password === this.loginForm.value.password);
        if(a !== undefined) {
            setTimeout(() => {
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: 'User Login Successfully.',
                    duration: 5000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                })
                this.authService.currentUser = true;
                this.authService.logged = a.key;
                localStorage.setItem("logged", JSON.stringify(a));
                
                this.router.navigate(['home']);
                window.location.reload();
            },400)
        } else {
            setTimeout(() => {
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: 'Login username or password incorrect.',
                    duration: 5000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                })
            }, 400)
        }
    }

    forgotPassword() {
        const dialogRef = this.dialog.open(ForgotPasswordComponent, {
            height: '330px',
            width: '530px'
        });

    }

    signUp() {
        setTimeout(() => {
            this.router.navigate(['/register']);
        }, 400)
    }

}
