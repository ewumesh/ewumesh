import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';

@NgModule({
    declarations: [ChatComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component: ChatComponent}
        ]),
        FormsModule, ReactiveFormsModule
     ],
    exports: [],
    providers: [ChatService],
})
export class ChatModule {}