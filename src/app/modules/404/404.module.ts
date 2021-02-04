import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './404.component';

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [ CommonModule ],
    exports: [PageNotFoundComponent],
    providers: [],
})
export class PageNotFoundModule {}