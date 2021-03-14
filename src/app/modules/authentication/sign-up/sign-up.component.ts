import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { GenericValidator } from '../../../shred/validations/generic-validators';
import { Regex } from '../../../shred/validations/regex';
import { AuthService } from '../auth.service';
import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';


@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly toDestroy$ = new Subject<void>();

    signupForm: FormGroup;
    isLoading: boolean = false;

    users: any[] = [];

    userName: boolean = false;

    existUserName: boolean = false;

    genericValidator: GenericValidator;
    displayMessage: any = {};
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];

    hide = true;

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
            },
            'firstName': {
                'required': 'This field is required.'
            },
            'lastName': {
                'required': 'This field is required.'
            },
            'userName': {
                'required': 'This field is required.'
            },
            'address': {
                'required': 'This field is required.'
            },
            'gender': {
                'required': 'This field is required.'
            },
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
            firstName: [null, Validators.required],
            middleName: '',
            lastName: [null, Validators.required],
            userName: [null, Validators.required],
            address: [null, Validators.required],
            dob: [null],
            phone: '',
            gender: [null, Validators.required],
            edu: null,
            about: '',
            position: [null],
            profilePic: '',
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

        this.signupForm.get('userName').valueChanges.subscribe(_ => {
            this.authService.getAllUsers().pipe(
                map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
            ).subscribe(d => {
                this.existUserName = false;
                let value = d.find(data => data.content.userName === _);
                if (value !== undefined) {
                    this.userName = true;
                    this.existUserName = true;
                } else {
                    this.userName = false;
                    this.existUserName = false;
                }
            })
        })
        this.validation();
    }

    saveChanges() {
        this.isLoading = true;
        let a = this.users.find(_ => _.content.email === this.signupForm.value.email);
        console.log(this.signupForm.value);
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

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
