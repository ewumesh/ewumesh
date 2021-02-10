import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TeamService } from '../admin/team/team.service';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ])
    ],
    exports: [],
    providers: [TeamService],
})
export class HomeModule { 
    
}