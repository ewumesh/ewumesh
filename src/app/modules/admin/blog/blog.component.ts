import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { delay, map } from 'rxjs/operators';

import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';
import { BlogFormComponent } from './blog.form.component';
import { BlogService } from './blog.service';
import { DeleteConfirmComponent } from 'src/app/shred/delete-confirm/delete-confirm.component';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class BlogComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource(null);
  displayedColumns: string[] = ['sn', 'title', 'date', 'author', 'headerImg', 'content', 'action'];

  constructor(
    private dialog: MatDialog,
    private blogService: BlogService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getAllBlogs().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(_ => {
      this.dataSource.data = _;
    })
  }


  edit(id: number) {
    let instance: MatDialogRef<BlogFormComponent, any>;
    const data = this.dataSource.data.find(_ => _.content.id === id);
    instance = this.dialog.open(BlogFormComponent, {
      width: '1300px',
      height: '100vh',
      data: data ? data : {},
      autoFocus: false,
      hasBackdrop: false
    });

    instance.afterClosed().pipe(delay(500)).subscribe(_ => {
      this.dataSource._updateChangeSubscription();
    })
  }

  delete(id: number) {
    this.dialog.open(DeleteConfirmComponent).afterClosed().subscribe(_ => {
      if (_) {
        const data = this.dataSource.data.find(_ => _.content.id === id);
        this.blogService.deleteBlog(data.key).pipe(delay(400)).subscribe(_ => {
          this.snackbar.openFromComponent(SnackbarComponent, {
            data: 'Post Deleted Successfully.',
            duration: 5000,
            verticalPosition: "top",
            horizontalPosition: "right"
          })
        })
      }
    })

  }
}
