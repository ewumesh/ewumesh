import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogViewComponent } from './blog-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BlogViewComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component: BlogViewComponent}
        ])
     ],
    exports: [],
    providers: [],
})
export class BlogViewModule {}