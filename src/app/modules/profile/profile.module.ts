import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileFormComponent } from './profile-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileFormComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component: ProfileComponent}
        ]),
        FormsModule, ReactiveFormsModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatDialogModule,
        MatSnackBarModule
     ],
    exports: [],
    providers: [],
    entryComponents: [ProfileFormComponent]
})
export class ProfileModule {}