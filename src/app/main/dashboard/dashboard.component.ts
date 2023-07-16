import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'app/shared/services/snackbar.service';
import { LoadingService } from 'helpers/services/loading';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public totalSaleToday: number = 0;
  public isLoading: boolean     = true;

  constructor(

    private _dashboardService: DashboardService,
    private _snackBar: SnackbarService,
    // private route: Router,
    //private loadingService: LoadingService

  ) { 

  }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {

    this.getDashboardInfo();

  }

  //=======================================================>> Function List
  getDashboardInfo(): any {

   // this.loadingService.show();

    this._dashboardService.getDashboardInfo().subscribe(( res: any) => 
    // ===================================================================>> Success: HTTP 200
    {
    
      //this.loadingService.hide();
      this.isLoading = false;

      this.totalSaleToday = res.total_sale_today;
    
    // ===================================================================>> Not Success
    }, (err: any) => {

      // this.loadingService.hide();
      this.isLoading = false;

      this._snackBar.openSnackBar('Something went wrong.', 'error');
      // localStorage.clear();
      // this.route.navigateByUrl('/auth/login');

    });
  }

}
