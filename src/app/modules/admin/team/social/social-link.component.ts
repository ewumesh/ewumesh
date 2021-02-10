import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { delay } from 'rxjs/operators';
import { TeamService } from '../team.service';

@Component({
    templateUrl: './social-link.component.html',
    styleUrls: ['../team.scss']
})
export class SocialLinkComponent implements OnInit,AfterViewInit {

    constructor(
        private fb: FormBuilder,
        private tService: TeamService,
        private dialogRef: MatDialogRef<SocialLinkComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: { id: number }
        ) { }

    sForm: FormGroup;
    isLoading: boolean = false;

    ngOnInit() { 
        this.initForm();
    }

    private initForm() {
        this.sForm = this.fb.group({
            id: 0,
            facebook: null,
            instagram: null,
            twitter: null,
            linkedin: null
        })
    }

    private patchForm(d: any) {
        this.sForm.patchValue({
            id: d.id,
            facebook: d.facebook,
            twitter: d.twitter,
            linkedin: d.linkedin,
            instagram: d.instagram
        })
    }

    ngAfterViewInit() {
        if (this.data.id > 0) {
            this.tService.getTeamById(this.data.id).pipe(
                // takeUntil(this.toDestroy$),
                delay(500)
            ).subscribe(r => {
                let d: any = r.links;
               let a = d.find(_ => _)
                this.patchForm(a);
            });
        }
    }

    saveChanges() {
        let formData = this.sForm.value;
        formData.id = this.data.id;
        this.tService.addLinks(formData).pipe().subscribe(_ => {
            console.log(_);
        })
    }

    cancel() {
        this.dialogRef.close();
    }
}
