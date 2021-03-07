import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { SignUpComponent } from './sign-up.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { AuthService } from '../auth.service';

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
        MatSnackBarModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatNativeDateModule,
        MatDatepickerModule,
        
    ],
    exports: [],
    // providers: [AuthService],
})
export class SignUpModule { }