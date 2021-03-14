import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { collectionInOut } from 'src/app/shred/animations/animations';
import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';

import { ContactUsService } from './contact-us.service';

@Component({
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.scss'],
    animations: [collectionInOut]
})
export class ContactUsComponent implements OnInit, OnDestroy {
    private readonly toDestroy$ = new Subject<void>();

    contactForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private cService: ContactUsService,
        private snackbar: MatSnackBar,
        ) {}

    ngOnInit() { 
        this.initForm();
    }

    private initForm() {
        this.contactForm = this.fb.group({
            id: 0,
            fullName: [null ],
            email: [null ],
            subject: [null],
            message: [null],
        })
    }

    saveChanges() {
        this.cService.postUserResponse(this.contactForm.value).pipe(delay(400)).subscribe(_ => {
            if(_) {
                this.snackbar.openFromComponent(SnackbarComponent, {
                    data: 'Thank you for your review.',
                    duration: 5000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                })
                this.contactForm.reset();
            }
        });
    }

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
