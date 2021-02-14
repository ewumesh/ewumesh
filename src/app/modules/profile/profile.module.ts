import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

import { ProfileComponent } from './profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [ProfileComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component: ProfileComponent}
        ]),
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
     ],
    exports: [],
    providers: [],
})
export class ProfileModule {}