import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { GenericValidator } from '../../../shred/validations/generic-validators';
import { Regex } from '../../../shred/validations/regex';
import { AuthService } from '../auth.service';
import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';
import { delay, map } from 'rxjs/operators';

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {

    signupForm: FormGroup;
    isLoading: boolean = false;

    users: any[] = [];

    genericValidator: GenericValidator;
    displayMessage: any = {};
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];

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

        this.getListOfUsers();
    }

    getListOfUsers() {
        this.authService.getAllUsers().pipe(
            map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
        ).subscribe(_ => {
            this.users = _;
        })
    }

    private initForm() {
        this.signupForm = this.fb.group({
            id: 0,
            email: [null, [Validators.required, Validators.pattern(Regex.emailRegex)]],
            role: 'user',
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
        let a = this.users.find(_ => _.content.email === this.signupForm.value.email);
        if (a === undefined) {
            this.authService.addUser(this.signupForm.value).pipe(delay(400)).subscribe(_ => {
                this.router.navigate(['/home']);
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: 'User registered successfully.',
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                })
                this.isLoading = false;
                this.router.navigate(['/login']);
            })
        } else {
            this.snackbarService.openFromComponent(SnackbarComponent, {
                data: 'User already registered.',
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            })
            this.isLoading = false;
        }
    }

    login() {
        setTimeout(() => {
            this.router.navigate(['/login']);
        }, 400)
    }
}
