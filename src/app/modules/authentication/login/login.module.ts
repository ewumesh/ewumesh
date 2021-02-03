import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AuthService } from '../auth.service';

@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,


        RouterModule.forChild([
            { path: '', component: LoginComponent }
        ]),

        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCheckboxModule
    ],
    exports: [],
    providers: [AuthService],
    entryComponents: [ForgotPasswordComponent]
})
export class LoginModule { }