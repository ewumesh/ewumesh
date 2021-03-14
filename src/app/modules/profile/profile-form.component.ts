import { AfterViewInit, ElementRef, Inject } from '@angular/core';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericValidator } from 'src/app/shred/validations/generic-validators';
import { Regex } from 'src/app/shred/validations/regex';
import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';
import { AuthService } from '../authentication/auth.service';

@Component({
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile.scss']
})
export class ProfileFormComponent implements OnInit, AfterViewInit {
    profileForm: FormGroup;
    isLoading: boolean = false;

    genericValidator: GenericValidator;
    displayMessage: any = {};
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        private dialogRef: MatDialogRef<ProfileFormComponent>,
        private authService: AuthService,
        private snackbarService: MatSnackBar,
        @Inject(MAT_DIALOG_DATA)
        public data: any
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
        })
    }

    ngOnInit() {
        this.initForm();
        this.patchForm(this.data.content);
    }

    private initForm() {
        this.profileForm = this.fb.group({
            id: 0,
            sn: 0,
            email: [null, [Validators.required, Validators.pattern(Regex.emailRegex)]],
            role: 'user',
            firstName: [null, Validators.required],
            middleName: [null],
            lastName: [null, Validators.required],
            userName: [null, Validators.required],
            address: [null, Validators.required],
            dob: null,
            phone: null,
            gender: [null, Validators.required],
            edu: null,
            about: null,
            position: null,
            profilePic: null,
            password: [null, Validators.required],
            confirmPassword: [null, Validators.required]
        }, { validator: this.passwordConfirming })
    }

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return { invalid: true };
        }
    }

    saveChanges() {
        this.isLoading = true;
        this.authService.editUser(this.data.key, this.profileForm.value).subscribe(a => {

            this.snackbarService.openFromComponent(SnackbarComponent, {
                data: 'Profile Updated Successfully!!',
                duration: 5000,
                verticalPosition: "top",
                horizontalPosition: "right"
            })
            this.dialogRef.close();
            this.isLoading = false;
        });
    }

    private patchForm(d) {
        this.profileForm.patchValue({
            id: d.id,
            sn: d.sn,
            email: d.email,
            role: d.role,
            firstName: d.firstName,
            middleName: d.middleName,
            lastName: d.lastName,
            userName: d.userName,
            address: d.address,
            dob: d.dob,
            phone: d.phone,
            gender: d.gender,
            edu: d.edu,
            about: d.about,
            position: d.position,
            profilePic: d.profilePic,
            password: d.password,
            confirmPassword: d.password
        })
    }

    ngAfterViewInit() {
        // if (this.data.content.id > 0) {
            
        // }
        this.validation();


    }

    private validation() {
        this.genericValidator
            .initValidationProcess(this.profileForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }

    cancel() {
        this.dialogRef.close();
    }
}
