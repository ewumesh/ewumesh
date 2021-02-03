import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SignUpComponent } from './sign-up.component';
import { AuthService } from '../auth.service';

@NgModule({
    declarations: [SignUpComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: SignUpComponent }
        ]),
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatCheckboxModule,
        MatSnackBarModule
    ],
    exports: [],
    providers: [AuthService],
})
export class SignUpModule { }