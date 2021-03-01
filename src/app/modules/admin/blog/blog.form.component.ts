import { Component, ElementRef, Inject, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay, filter, map } from 'rxjs/operators';

import { AngularEditorConfig } from '@kolkov/angular-editor';

import { GenericValidator } from 'src/app/shred/validations/generic-validators';
import { BlogService } from './blog.service';
import { ChangesConfirmComponent } from 'src/app/shred/changes-confirm/changes-confirm.component';

@Component({
    templateUrl: './blog.form.component.html',
    styleUrls: ['./blog.scss']
})
export class BlogFormComponent implements OnInit {

    blogForm: FormGroup;
    genericValidator: GenericValidator;

    editorConfig: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: 'auto',
        minHeight: '0',
        maxHeight: 'auto',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
        placeholder: 'Enter text here...',
        defaultParagraphSeparator: '',
        defaultFontName: '',
        defaultFontSize: '',
        fonts: [
            { class: 'arial', name: 'Arial' },
            { class: 'times-new-roman', name: 'Times New Roman' },
            { class: 'calibri', name: 'Calibri' },
            { class: 'comic-sans-ms', name: 'Comic Sans MS' }
        ],
        customClasses: [
            {
                name: 'quote',
                class: 'quote',
            },
            {
                name: 'redText',
                class: 'redText'
            },
            {
                name: 'titleText',
                class: 'titleText',
                tag: 'h1',
            },
        ],
        uploadUrl: 'v1/image',
        uploadWithCredentials: false,
        sanitize: true,
        toolbarPosition: 'top',
        toolbarHiddenButtons: [
            ['bold', 'italic'],
            ['fontSize']
        ]
    };


    blogData: any[] = [];

    isLoading: boolean = false;
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];
    displayMessage: any = {};

    imageUrls: any[] = [
        { id: 1, value: 'assets/images/umesh.jpg' },
        { id: 2, value: 'assets/images/pujan.jpg' },
        { id: 3, value: 'assets/images/bijen-1.jpg' },
        { id: 4, value: 'assets/images/dharmendra.jpg' },
        { id: 5, value: 'assets/images/deepika.jpg' },
        { id: 6, value: 'assets/images/kanchan-1.jpg' },
        { id: 7, value: 'assets/images/prajwol.jpg' },
        { id: 8, value: 'assets/images/sagar.jpg' },
        { id: 9, value: 'assets/images/suren.jpg' },
        { id: 10, value: 'assets/images/saraswoti.jpg' },
        { id: 11, value: 'assets/images/team-1.jpg' },
        { id: 12, value: 'assets/images/team-2.jpg' },
        { id: 13, value: 'assets/images/team-4.jpg' },
        { id: 14, value: 'assets/images/team-3.jpg' },
        { id: 15, value: 'assets/images/rabin.jpg' },
        { id: 18, value: 'assets/images/aadarsa.jpg' },
    ]

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private blogService: BlogService,
        private dialog: MatDialog,
        private snackbar: MatSnackBar,
        private dialogRef: MatDialogRef<BlogFormComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: any
    ) {

        this.genericValidator = new GenericValidator({
            'title': {
                'required': 'This field is required.'
            }
        })
    }

    ngOnInit() {
        // console.log(this.data.content.id)
        this.initForm();
        this.getBlogs();
    }

    getBlogs() {
        if (this.data.key) {
            this.blogService.getAllBlogs().pipe(
                map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
            ).subscribe(_ => {
                this.blogData = _;
                let a = _.find(_ => _.key === this.data.key);
                // console.log(a);
                this.patchForm(a.content);
            })
        }
    }

    private initForm() {
        this.blogForm = this.fb.group({
            id: 0,
            author: null,
            date: null,
            title: [null, Validators.required],
            headerImg: null,
            content: null
        })
    }


    private patchForm(d: any) {
        this.blogForm.patchValue({
            id: d.id,
            sn: d.sn,
            author: d.author,
            date: d.date,
            title: d.title,
            headerImg: d.headerImg,
            content: d.content
        })
    }

    private validation() {
        this.genericValidator
            .initValidationProcess(this.blogForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }

    saveChanges() {
        if (this.data.key) {
            let existValue: any = {};
            existValue.id = this.data.content.id;
            existValue.sn = this.data.content.sn;

            this.blogService.editBlog(this.data.key, this.blogForm.value, existValue).pipe(delay(400)).subscribe(_ => {
                this.dialogRef.close();
            })

        } else {
            this.blogService.postBlog(this.blogForm.value).pipe(delay(500)).subscribe(_ => {
                if (_) {
                    this.router.navigate(['/blogs']);
                    this.dialogRef.close();
                }
            })
        }

    }

    cancel() {
        if (this.blogForm.dirty) {
            this.dialog.open(ChangesConfirmComponent).afterClosed()
                .pipe(
                    filter(_ => _)
                ).subscribe(_ => this.dialogRef.close());
        } else {
            this.dialogRef.close();
        }
    }

    ngAfterViewInit() {
        this.validation();
    }
}
