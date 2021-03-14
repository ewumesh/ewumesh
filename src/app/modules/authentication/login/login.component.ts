import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { AngularFireDatabase } from '@angular/fire/database';

// Personal shared file
import { GenericValidator } from '../../../shred/validations/generic-validators'
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AuthService } from '../auth.service';
import { SnackbarComponent } from '../../../../../src/app/shred/validations/snackbar/snackbar.component';
import { Subject } from 'rxjs';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

    // Component destroy
    private readonly toDestroy$ = new Subject<void>();
    // Mat snackbar positions
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    // boolean variable which is used for button validation on form
    isLoading: boolean = false;

    // login for
    loginForm: FormGroup;

    // logged users from api
    users: any[] = [];
    // Input field with password hide or show validation
    hide = true;

    // Used for form validation
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

    // Methods to get the users lists from API
    getListOfUsers() {
        this.authService.getAllUsers().pipe(
            map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
        ).subscribe(_ => {
            this.users = _;
        })
    }

    // Form init using form builder
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

    // Form validation logic
    private validation() {
        this.genericValidator
            .initValidationProcess(this.loginForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }

    saveChanges() {
        // set isLoading false at first for showing plain button
        this.isLoading = true;

        // Check entered userName with our database
        let a = this.users.find(_ => _.content.email === this.loginForm.value.userName && _.content.password === this.loginForm.value.password);
        if (a !== undefined) {
            // set time delay
            setTimeout(() => {
                // show snackbar message
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: 'User Login Successfully.',
                    duration: 5000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                })
                this.authService.currentUser = true;
                this.authService.logged = a.key;

                // store logged user data to the localstorage for another use
                localStorage.setItem("logged", JSON.stringify(a));

                // Navigate to the users profile with data
                this.router.navigate(['profile']);

                // After login success reload page with time delay
                setTimeout(() => {
                    window.location.reload();
                }, 600)

            }, 400)
        } else {
            setTimeout(() => {
                this.snackbarService.openFromComponent(SnackbarComponent, {
                    data: 'Login username or password incorrect.',
                    duration: 5000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                });
                this.isLoading = false;
            }, 400)
        }
    }

    // Open forgot password dialogbox
    forgotPassword() {
        const dialogRef = this.dialog.open(ForgotPasswordComponent, {
            height: '330px',
            width: '530px'
        });

    }

    // Route to the signup page using angular router
    signUp() {
        setTimeout(() => {
            this.router.navigate(['/register']);
        }, 400)
    }

    // Component destroy
    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }

}
