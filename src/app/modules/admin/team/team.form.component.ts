import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay, filter } from 'rxjs/operators';

import { GenericValidator } from 'src/app/shred/validations/generic-validators';
import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';
import { TeamService } from './team.service';

@Component({
    templateUrl: './team.form.component.html',
    styleUrls: ['./team.scss']
})
export class TeamFormComponent implements OnInit, AfterViewInit{

    teamForm: FormGroup;
    genericValidator: GenericValidator

    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];
    displayMessage: any = {};

    isLoading: boolean = false;

    imageUrls: any[] = [
        {id: 1, value: 'assets/images/ut.jpg'},
        {id: 2, value: 'assets/images/pr.jpg'},
        {id: 3, value: 'assets/images/bs.jpg'},
        {id: 4, value: 'assets/images/ds.jpg'},
        {id: 5, value: 'assets/images/dp.jpg'},
        {id: 6, value: 'assets/images/kp.jpg'},
        {id: 7, value: 'assets/images/pa.jpg'},
        {id: 8, value: 'assets/images/sk.jpg'},
        {id: 9, value: 'assets/images/st.jpg'},
        {id: 10, value: 'assets/images/ss.jpg'},
        {id: 11, value: 'assets/images/team-1.jpg'},
        {id: 12, value: 'assets/images/team-2.jpg'},
        {id: 13, value: 'assets/images/team-4.jpg'},
        {id: 14, value: 'assets/images/team-3.jpg'},
        {id: 15, value: 'assets/images/rn.jpg'},
        {id: 16, value: 'assets/images/kps.jpg'},
        {id: 17, value: 'assets/images/bijen.jpg'},
    ]

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private tService: TeamService,
        private dialog: MatDialog,
        private snackbar: MatSnackBar,
        private dialogRef: MatDialogRef<TeamFormComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: { id: number }
    ) {
        this.genericValidator = new GenericValidator({
            'firstName': {
                'required': 'This field is required.'
            },
            'lastName': {
                'required': 'This field is required.'
            },
            'position': {
                'required': 'This field is required.'
            },
            'about': {
                'required': 'This field is required.'
            },
            'imgUrl': {
                'required': 'This field is required.'
            }
        })
     }

    ngOnInit() { 
        this.initForm();
    }

    private initForm() {
        this.teamForm = this.fb.group({
            id: 0,
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            position: [null, Validators.required],
            about: [null, Validators.required],
            imgUrl: [null, Validators.required]
        })
    }

    private patchForm(body: any) {
        this.teamForm.patchValue({
            id: body.id,
            firstName: body.firstName,
            lastName: body.lastName,
            position: body.position,
            about: body.about,
            imgUrl: body.imgUrl,
        });
    }


    private validation() {
        this.genericValidator
        .initValidationProcess(this.teamForm, this.formInputElements)
        .subscribe({ next: m => this.displayMessage = m });
    }

    saveChanges() {
        this.isLoading = true;
        this.tService.updateTeam(this.teamForm.value).pipe(delay(400)).subscribe(_ => {
            this.router.navigate(['/home']);
            this.dialogRef.close();

            if(this.teamForm.value.id === _.id) {
                this.snackbar.openFromComponent(SnackbarComponent, {
                  data: 'Team Edited Successfully..',
                  duration: 10000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
              })
              this.isLoading = false
              } else {
                this.snackbar.openFromComponent(SnackbarComponent, {
                  data: 'Team Added Successfully.',
                  duration: 10000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
              })
              this.isLoading=false;
              }
        })


    }

    cancel() {
        // if (this.teamForm.dirty) {
        //     this.dialog.open(ChangesConfirmComponent).afterClosed()
        //         .pipe(
        //             filter(_ => _)
        //         ).subscribe(_ => this.dialogRef.close());
        // } else {
            this.dialogRef.close();
        // }
    }


    ngAfterViewInit() {
        this.validation();

        if (this.data.id > 0) {
            this.tService.getTeamById(this.data.id).pipe(
                // takeUntil(this.toDestroy$),
                delay(500)
            ).subscribe(r => {
                let d: any = r;
                this.patchForm(d);
            });
        }
    }
}
