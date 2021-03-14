import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FloatChatService } from './float-chat.service';

@Component({
    selector: 'f-chat',
    templateUrl: './float-chat.component.html',
    styleUrls: ['./float-chat.component.scss']
})
export class FloatChatComponent implements OnInit, OnDestroy {
    private readonly toDestroy$ = new Subject<void>();

    chatForm: FormGroup;
    loggedUser = JSON.parse(localStorage.getItem('logged'));

    chats: any[] = [];
    individualChat: any[] = [];
    another: any[] = [];

    constructor(
        private fb: FormBuilder,
        private chatService: FloatChatService
    ) {
        
        this.chatService.getAllMessages().pipe(
            map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
        ).subscribe(_ => {
            this.chats = _;

            let a = this.chats.filter(_ => _.content.name === 'admin@gmail.com' || this.chats.filter(l => l.content.name === this.loggedUser.content.name));
            this.individualChat = a;
    
            let b = this.chats.filter(_ => _.content.name !== this.loggedUser.content.email);
            this.another = b;
        })
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.chatForm = this.fb.group({
            id: 0,
            message: [null, Validators.required],
            currentTime: Date.now(),
            name: this.loggedUser.content.email,
            userName: this.loggedUser.userName
        })
    }

    saveChanges() {
        let formData = this.chatForm.value;
        formData.name = this.loggedUser.content.email;
        formData.userName = this.loggedUser.content.userName;
        this.chatService.sendMessage(formData).subscribe(_ => {
            console.log('Message sent!!!');
        });

        this.chatForm.setValue({
            id: null,
            message: null,
            currentTime: null,
            name: null,
            userName: null,
        })
    }

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }

}
