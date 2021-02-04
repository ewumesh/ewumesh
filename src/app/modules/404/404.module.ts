import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './404.component';
import { NotFoundComponent } from './page-not-found.component';

@NgModule({
    declarations: [PageNotFoundComponent, NotFoundComponent],
    imports: [ CommonModule ],
    exports: [PageNotFoundComponent, NotFoundComponent],
    providers: [],
})
export class PageNotFoundModule {}