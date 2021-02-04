import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ScrollTopModule } from '../scroll-top/scroll-top.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ]),ScrollTopModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule { }