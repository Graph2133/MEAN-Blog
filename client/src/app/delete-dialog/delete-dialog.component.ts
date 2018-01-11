import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

    public title: string;
    public message: string;
    public xx:string;
    constructor(public dialogRef: MdDialogRef<DeleteDialogComponent>) {

    }

  ngOnInit() {
  }

}
