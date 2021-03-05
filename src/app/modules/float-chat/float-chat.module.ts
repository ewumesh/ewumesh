import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatChatComponent } from './float-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatChatService } from './float-chat.service';

@NgModule({
    declarations: [FloatChatComponent],
    imports: [ 
        CommonModule,
        FormsModule, ReactiveFormsModule
     ],
    exports: [FloatChatComponent],
    providers: [FloatChatService],
})
export class FloatChatModule {}