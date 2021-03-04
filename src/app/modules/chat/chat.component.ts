import {AfterContentInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ChatService } from './chat.service';

@Component({
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.scss']
})
export class ChatComponent implements OnInit, DoCheck {

    chatForm: FormGroup;
    loggedUser = JSON.parse(localStorage.getItem('logged'));

    chats: any[] = [];

    individualChat: any[] = [];
    another: any[] =[];

    constructor(
        private fb: FormBuilder,
        private chatService: ChatService
    ) {



        this.initForm();
    }

    ngOnInit() {



     }

     ngDoCheck() {
        this.chatService.getAllMessages().pipe(
            map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
          ).subscribe(_ => {
            this.chats = _;


            let a =this.chats.filter(_ => _.content.name === this.loggedUser.content.email );
            this.individualChat = a;
    
            let b = this.chats.filter(_ => _.content.name !== this.loggedUser.content.email);
            this.another = b;
          })
     }

    private initForm() {
        this.chatForm = this.fb.group({
            id: 0,
            message: null,
            currentTime: Date.now(),
            name: this.loggedUser.content.email,

        })
    }

    saveChanges() {
        console.log(this.chatForm.value);
        this.chatService.sendMessage(this.chatForm.value).subscribe(_ => {
            console.log('Message sent!!!');
        });

        this.chatForm.setValue({
            id: null,
            message: null,
            currentTime: null,
            name: null
        })
    }
    
}
