import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-restart-dialog',
  templateUrl: './restart-dialog.component.html',
  styleUrls: ['./restart-dialog.component.css']
})
export class RestartDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RestartDialogComponent>
  ) {}

  ngOnInit(): void {
  }

}
