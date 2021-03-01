import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { delay, filter, map } from 'rxjs/operators';
import { ChangesConfirmComponent } from 'src/app/shred/changes-confirm/changes-confirm.component';

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

    teamData: any;

    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];
    displayMessage: any = {};

    isLoading: boolean = false;

    imageUrls: any[] = [
        {id: 1, value: 'assets/images/umesh.jpg'},
        {id: 2, value: 'assets/images/pujan.jpg'},
        {id: 3, value: 'assets/images/bijen-1.jpg'},
        {id: 4, value: 'assets/images/dharmendra.jpg'},
        {id: 5, value: 'assets/images/deepika.jpg'},
        {id: 6, value: 'assets/images/kanchan-1.jpg'},
        {id: 7, value: 'assets/images/prajwol.jpg'},
        {id: 8, value: 'assets/images/sagar.jpg'},
        {id: 9, value: 'assets/images/suren.jpg'},
        {id: 10, value: 'assets/images/saraswoti.jpg'},
        {id: 11, value: 'assets/images/team-1.jpg'},
        {id: 12, value: 'assets/images/team-2.jpg'},
        {id: 13, value: 'assets/images/team-4.jpg'},
        {id: 14, value: 'assets/images/team-3.jpg'},
        {id: 15, value: 'assets/images/rabin.jpg'},
        {id: 18, value: 'assets/images/aadarsa.jpg'},
    ]

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private tService: TeamService,
        private dialog: MatDialog,
        private snackbar: MatSnackBar,
        private dialogRef: MatDialogRef<TeamFormComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: any
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
        if(this.data.key) {
        this.tService.getAllTeams().pipe(
            map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
          ).subscribe(_ => {
            this.teamData = _;
            let a = _.find(_ => _.key === this.data.key);
            // console.log(a);
            this.patchForm(a.content);
          })
        }
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
        
        if(this.data.key) {
            let existValue: any = {};
            existValue.id = this.data.content.id;
            existValue.sn = this.data.content.sn;

            this.tService.updateTeam(this.data.key, this.teamForm.value, existValue).pipe(delay(400)).subscribe(_ => {
                this.dialogRef.close();
                this.snackbar.openFromComponent(SnackbarComponent, {
                    data: 'Team Updated Successfully.',
                    duration: 5000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                })
            })
        } else {
        this.tService.addTeam(this.teamForm.value).pipe(delay(400)).subscribe(_ => {
            this.snackbar.openFromComponent(SnackbarComponent, {
                data: 'Team Added Successfully.',
                duration: 5000,
                verticalPosition: "top",
                horizontalPosition: "right"
            })
            this.dialogRef.close();
        })
    }


    }

    cancel() {
        if (this.teamForm.dirty) {
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
        // if (this.data.content.id > 0) {
        //     this.tService.getTeamById(this.data.content.id).pipe(
        //         // takeUntil(this.toDestroy$),
        //         delay(500)
        //     ).subscribe(r => {
        //         let d: any = r;
        //         // console.log(d);
        //         this.patchForm(d);
        //     });
        // }


        //   console.log(this.teamList);

          
        // }
    }
}
