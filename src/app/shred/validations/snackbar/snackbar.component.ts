import { Component, OnInit, Inject } from "@angular/core";
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";

@Component({
  selector: "app-basic-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.css"]
})
export class SnackbarComponent implements OnInit {
  constructor(
    public sbRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
  ngOnInit() {}
}
