import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { GenericValidator } from '../../../shred/validations/generic-validators'
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AuthService } from '../auth.service';
import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';
import { __createBinding } from 'tslib';
import { delay } from 'rxjs/operators';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    isLoading: boolean = false;

    loginForm: FormGroup;

    genericValidator: GenericValidator;
    displayMessage: any = {};
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        private router: Router,
        private snackbarService: MatSnackBar,
        private authService: AuthService
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
        this.authService.login(this.loginForm.value).pipe(delay(800)).subscribe(_ => {
            console.log(_);
            if (_.responsebody) {
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: _.message,
                    duration: 10000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                })
                this.isLoading = false;
                this.router.navigate(['/profile'])
            } 
            else if(_.responsebody === undefined) {
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: _.message,
                    duration: 10000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                })
                this.isLoading = false;
            }

        })
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
