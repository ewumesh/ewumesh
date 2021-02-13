import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BlogComponent } from './blog.component';
import { BlogFormComponent } from './blog.form.component';
import { BlogService } from './blog.service';


@NgModule({
    declarations: [BlogComponent, BlogFormComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component: BlogComponent}
        ]), 
        FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        MatCheckboxModule
     ],
    exports: [],
    providers: [BlogService],
    entryComponents: [BlogFormComponent]
})
export class BlogModule {}