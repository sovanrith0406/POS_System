import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  displayedColumns: string[] = [
    'trx',
    'plate',
    'price',
    'date',
    'address',
    'winner',
    'action',
  ];

  dataSource: any;
  public isSearching: boolean = true;
  public setup: any = {};
  public data: any[] = [];
  public halls: any[] = [];
  public total: number = 10;
  public limit: number = 10;
  public page: number = 1;
  public key: string = '';
  public start: any;
  public status: number = 0;
  public hall: number = 0;
  public form: UntypedFormGroup;
  public to: any;
  constructor() { }

  ngOnInit(): void {
  }

  listing(): void {
    
  }

}
