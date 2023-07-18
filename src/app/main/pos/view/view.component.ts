// ==========================================================>> Core Library
import { Component, Inject, OnInit } from '@angular/core';

// ==========================================================>> Third Party Library
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public displayedColumns: string[] = ['no', 'product', 'price', 'qty', 'total'];
  public dataSource: any;
  public data: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public getRow: any,
    private dialogRef: MatDialogRef<ViewComponent>,
  ) { 
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.data = this.getRow?.details;
    this.dataSource = new MatTableDataSource(this.data);
  }

}
