import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

import { SnackbarComponent } from './snackbar.component';

@NgModule({
    declarations: [SnackbarComponent],
    imports: [ 
        CommonModule,
        MatSnackBarModule,
        MatIconModule
     ],
    exports: [SnackbarComponent],
    providers: [],
})
export class SnackbarModule {}