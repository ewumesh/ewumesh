import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DeleteConfirmComponent } from './delete-confirm.component';

@NgModule({
    declarations: [DeleteConfirmComponent],
    imports: [CommonModule, MatDialogModule, MatTooltipModule,MatToolbarModule],
    exports: [DeleteConfirmComponent],
    entryComponents: [DeleteConfirmComponent]
})
export class DeleteConfirmModule { }
