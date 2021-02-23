import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ChangesConfirmComponent } from './changes-confirm.component';

@NgModule({
    declarations: [ChangesConfirmComponent],
    imports: [CommonModule, MatDialogModule, MatTooltipModule],
    exports: [ChangesConfirmComponent],
    entryComponents: [ChangesConfirmComponent]
})
export class ChangesConfirmModule { }
