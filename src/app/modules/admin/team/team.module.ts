import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { TeamService } from './team.service';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { TeamFormComponent } from './team.form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SocialLinkComponent } from './social/social-link.component';
import { DeleteConfirmModule } from 'src/app/shred/delete-confirm/delete-confirm.module';
import { ChangesConfirmModule } from 'src/app/shred/changes-confirm/changes-confirm.module';

@NgModule({
    declarations: [TeamComponent, TeamFormComponent, SocialLinkComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: TeamComponent
            }
        ]),
        FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule,
        MatTableModule,MatCheckboxModule,MatSortModule, MatMenuModule, MatSnackBarModule, MatAutocompleteModule,
        DeleteConfirmModule, ChangesConfirmModule
     ],
    exports: [],
    providers: [TeamService],
    entryComponents:[TeamFormComponent, SocialLinkComponent]
})
export class TeamModule {}