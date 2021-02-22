import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsService } from './contact-us.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [ContactUsComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component: ContactUsComponent}
        ]),
        FormsModule, ReactiveFormsModule,
        MatSnackBarModule
     ],
    exports: [ContactUsComponent],
    providers: [ContactUsService],
})
export class ContactUSModule {}