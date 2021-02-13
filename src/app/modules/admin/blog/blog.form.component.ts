import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './blog.form.component.html',
    styleUrls: ['./blog.scss']
})
export class BlogFormComponent implements OnInit {

    blogForm: FormGroup;
    isLoading: boolean = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit() { }

    private initForm() {
        this.blogForm = this.fb.group({
            id: 0,
            author: null,
            date: null,
            title: null,
            image: null,
            body: null
        })
    }
}
