import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualViewComponent } from './individual-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [IndividualViewComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component: IndividualViewComponent}
        ])
     ],
    exports: [IndividualViewComponent],
    providers: [],
})
export class IndividualViewModule {}