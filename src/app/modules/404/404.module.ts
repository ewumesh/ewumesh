import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './404.component';
import { NotFoundComponent } from './page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
    declarations: [PageNotFoundComponent, NotFoundComponent, AccessDeniedComponent],
    imports: [ CommonModule ],
    exports: [PageNotFoundComponent, NotFoundComponent, AccessDeniedComponent],
    providers: [],
})
export class PageNotFoundModule {}