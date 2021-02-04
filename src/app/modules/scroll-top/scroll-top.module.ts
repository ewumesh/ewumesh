import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { ScrollTopComponent } from './scroll-top.component';

@NgModule({
    declarations: [ScrollTopComponent],
    imports: [ 
        CommonModule,MatIconModule
        
     ],
    exports: [ScrollTopComponent],
    providers: [],
})
export class ScrollTopModule {}