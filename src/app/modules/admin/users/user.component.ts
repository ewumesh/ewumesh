import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { delay, map } from 'rxjs/operators';
import { DeleteConfirmComponent } from 'src/app/shred/delete-confirm/delete-confirm.component';

import { SnackbarComponent } from '../../../../../src/app/shred/validations/snackbar/snackbar.component';
import { AuthService } from '../../authentication/auth.service';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {

    dataSource: MatTableDataSource<any> = new MatTableDataSource(null);
    displayedColumns: string[] = ['sn', 'userName', 'password', 'action'];

    constructor(
        private authService: AuthService,
        private snackbar: MatSnackBar,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.authService.getAllUsers().pipe(
            map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
        ).subscribe(_ => {
            this.dataSource.data = _;
        })
    }

    delete(id: number) {
        this.dialog.open(DeleteConfirmComponent).afterClosed().subscribe(_ => {
            if (_) {
                const data = this.dataSource.data.find(_ => _.content.id === id);
                this.authService.deleteUser(data.key).pipe(delay(400)).subscribe(_ => {
                    this.snackbar.openFromComponent(SnackbarComponent, {
                        data: 'Team Deleted Successfully.',
                        duration: 5000,
                        verticalPosition: "top",
                        horizontalPosition: "right"
                    })
                })
            }
        })
    }


    ngAfterViewInit() {

    }
}
