import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GenericValidator } from '../../../shred/validations/generic-validators';
import { Regex } from '../../../shred/validations/regex';

@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {

    forgotPasswordForm: FormGroup;

    genericValidator: GenericValidator;
    displayMessage: any = {};
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];

    constructor(
        private fb: FormBuilder,
        private snackbar: MatSnackBar,
        private dialogRef:MatDialogRef<ForgotPasswordComponent>
    ) { 
        this.genericValidator = new GenericValidator({
            'email': {
                'required': 'This field is required.',
                'pattern': 'Please enter valid email address'
            }
        })
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.forgotPasswordForm = this.fb.group({
            id: 0,
            email: [null, [Validators.required, Validators.pattern(Regex.emailRegex)]]
        })
    }

    ngAfterViewInit() {
        this.validation();
    }

    private validation() {
        this.genericValidator
            .initValidationProcess(this.forgotPasswordForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }

    sumbit() {
        setTimeout(() => {
            this.dialogRef.close();
            this.snackbar.open('Please check your email.','Close', {
                duration: 1000,
                        horizontalPosition: 'right',
                        verticalPosition: 'top',
            });
        }, 1500)
        

    }

    cancel() {
        this.dialogRef.close();
    }
}
