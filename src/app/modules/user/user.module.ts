import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

import { UserComponent } from './user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [UserComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component: UserComponent}
        ]),
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
     ],
    exports: [],
    providers: [],
})
export class UserModule {}