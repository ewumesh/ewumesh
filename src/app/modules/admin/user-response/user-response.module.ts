import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserResponseComponent } from './user-response.component';

@NgModule({
    declarations: [UserResponseComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: UserResponseComponent }
        ])

    ],
    exports: [],
    providers: [],
})
export class UserResponseModule { }