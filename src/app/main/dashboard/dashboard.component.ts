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
  public data: any;
  public loading: boolean = true;
  constructor(
    private dashboardService: DashboardService,
    private snackBar: SnackbarService,
    private route: Router,
    private loadingService: LoadingService
  ) { }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.listing();
  }

  //=======================================================>> Function List
  listing(): any {
    this.loadingService.show();
    this.dashboardService.getDashboardInfo().subscribe((response: any) => {
      this.loadingService.hide();
      this.loading = false;
      this.data = response.total_sale_today;
    }, (err: any) => {
      this.loadingService.hide();
      this.loading = false;
      console.log(err);
      this.snackBar.openSnackBar('Something went wrong.', 'error');
      localStorage.clear();
      this.route.navigateByUrl('/auth/login');
    });
  }

}
