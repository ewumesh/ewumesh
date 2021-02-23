import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    templateUrl: './changes-confirm.component.html'
})

export class ChangesConfirmComponent implements OnDestroy {

    private toDestroy$ = new Subject<void>();

    constructor(
        public dialogRef: MatDialogRef<ChangesConfirmComponent>
    ) {
        this.dialogRef._containerInstance._config.autoFocus = false;
        this.dialogRef.updateSize('250px', '200px');
    }

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
