import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [NavComponent],
    imports: [ 
        CommonModule,
        MatMenuModule
     ],
    exports: [NavComponent],
    providers: [],
})
export class NavModule {}