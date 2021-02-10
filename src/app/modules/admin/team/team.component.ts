import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs/operators';
import { TeamFormComponent } from './team.form.component';
import { TeamService } from './team.service';

@Component({
    selector: 'table-expandable-rows-example',
    templateUrl: './team.component.html',
    styleUrls: ['./team.scss'],
    animations: [
        trigger('detailExpand', [
          state('collapsed', style({height: '0px', minHeight: '0'})),
          state('expanded', style({height: '*'})),
          transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
      ],
})
export class TeamComponent implements OnInit, AfterViewInit {
    dataSource: MatTableDataSource<any> = new MatTableDataSource(null);    
    // columnsToDisplay = ['select','sn', 'firstName','lastName', 'position', 'about'];
    displayedColumns: string[] = [ 'sn', 'name', 'position', 'about', 'action'];
    expandedElement: any | null;

    @ViewChild(MatSort) sort: MatSort;
    selection = new SelectionModel<any>(true, []);

    constructor(
      private tService: TeamService,
      private dialog: MatDialog
      ) {}


    ngOnInit() {
        this.tService.getAllTeam().pipe(delay(600)).subscribe(_ => {
            this.dataSource.data = _
        })
    }

    ngAfterViewInit() {

    }

    delete(id: number) {
        // this.tService.deleteTeam(1).pipe(delay(500)).subscribe(x => {
        //     this.dataSource.data = x;
        //     this.dataSource._updateChangeSubscription();
        // })
    }

    edit(id: number) {
      let instance: MatDialogRef<TeamFormComponent, any>;
      const data = this.dataSource.data.find(_ => _.id === id);

      instance = this.dialog.open(TeamFormComponent, {
        width: '900px',
        data: data ? data : {},
        autoFocus: false,
    });

    instance.afterClosed().pipe().subscribe(_ => {

    })
    } 

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   let numSelected = this.selection.selected.length;
  //   let numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: any): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }
  }
