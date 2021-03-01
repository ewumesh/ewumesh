import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

import { UserComponent } from './user.component';
import { DeleteConfirmModule } from 'src/app/shred/delete-confirm/delete-confirm.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [UserComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '' , component: UserComponent}
        ]),
        MatTableModule, MatMenuModule,MatDialogModule, DeleteConfirmModule
     ],
    exports: [],
    providers: [],
})
export class UserModule {}