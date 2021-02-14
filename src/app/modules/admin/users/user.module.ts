import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

import { UserComponent } from './user.component';

@NgModule({
    declarations: [UserComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '' , component: UserComponent}
        ]),
        MatTableModule, MatMenuModule
     ],
    exports: [],
    providers: [],
})
export class UserModule {}