import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav.component';

@NgModule({
    declarations: [NavComponent],
    imports: [ CommonModule ],
    exports: [NavComponent],
    providers: [],
})
export class NavModule {}