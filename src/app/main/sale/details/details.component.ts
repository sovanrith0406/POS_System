import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public displayedColumns: string[] = ['no', 'product', 'price', 'qty', 'total'];
  public dataSource: any;
  public data: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public getRow: any,
    private dialogRef: MatDialogRef<DetailsComponent>,
  ) { 
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.getRow);
    this.data = this.getRow?.details;
    this.dataSource = new MatTableDataSource(this.data);
  }

  print(): void {

  }

}
