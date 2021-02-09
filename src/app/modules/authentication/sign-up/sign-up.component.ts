import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { GenericValidator } from '../../../shred/validations/generic-validators';
import { Regex } from '../../../shred/validations/regex';
import { AuthService } from '../auth.service';
import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';
import { delay } from 'rxjs/operators';

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {

    signupForm: FormGroup;

    isLoading: boolean = false;

    genericValidator: GenericValidator;
    displayMessage: any = {};
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];

    psm: any;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private snackbarService: MatSnackBar,
        private authService: AuthService
    ) {
        this.genericValidator = new GenericValidator({
            'email': {
                'required': 'This field is required.',
                'pattern': 'Please enter valid email address.'
            },
            'password': {
                'required': 'This field is required.'
            },
            'confirmPassword': {
                'required': 'This field is required.'
            }
        });
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.signupForm = this.fb.group({
            id: 0,
            email: [null, [Validators.required, Validators.pattern(Regex.emailRegex)]],
            password: [null, Validators.required],
            confirmPassword: [null, Validators.required]
        }, { validator: this.passwordConfirming })
    }

    private validation() {
        this.genericValidator
            .initValidationProcess(this.signupForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return { invalid: true };
        }
    }

    ngAfterViewInit() {
        this.validation();
    }

    saveChanges() {
        this.isLoading = true;
        this.authService.register(this.signupForm.value).pipe(delay(800)).subscribe(_ => {
            if (_.responsebody) {
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: _.message,
                    duration: 10000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                })
                this.isLoading = false;
                this.router.navigate(['/profile']);
            } else if (_.responsebody === null) {
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: _.message,
                    duration: 10000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                })
            }
        })
    }

    login() {
        setTimeout(() => {
            this.router.navigate(['/login']);
        }, 400)
    }
}
