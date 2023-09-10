// ==========================================================>> Core Library
import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// ==========================================================>> Custom Library
import { Animations } from 'helpers/animations';
import { environment as env } from 'environments/environment';
import { SnackbarService } from 'app/shared/services/snackbar.service';
import { MyProfileService } from '../my-profile.service';
import { LoadingService } from 'helpers/services/loading';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: Animations
})
export class OverviewComponent implements OnInit {

  @ViewChild('myProfileNgForm') myProfileNgForm: NgForm;

  public form: UntypedFormGroup;

  public url = env.apiUrl;
  public file = env.fileUrl;
  public mode: any;
  public contact: any = [];
  public saving: boolean = false;
  public src: string = 'assets/images/avatars/profile.jpg';
  public data: any;
  public phone: any;
  public title: string = 'បញ្ចូលរូបថតអ្នក'
  user: any = {
    id: null,
    name: null,
    email: null,
    avatar: null,
    phone: null,
  };

  constructor(
    private _serviceMyProfile: MyProfileService,
    private _formBuilder: UntypedFormBuilder,
    private _snackBar: SnackbarService,
    private _router: Router,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.data = localStorage.getItem('user');
    if (this.data) {
      this.data = JSON.parse(this.data);
      if (!this.data) {
        localStorage.clear();
        this._router.navigateByUrl('/auth/login');
      }
    }
    if (this.data) {
      //this.src = this.url + this.data.avatar; //if this image is public from api
      this.src = this.file + this.data.avatar;
    }
    this._buildForm();
  }

  /**
     * Update User
     */
  submit(): void {
    // Do nothing if the form is invalid
    if (this.form.invalid) {
      return;
    }

    // Disable the form
    this.form.disable();
    this.loadingService.show();
    this.saving = true;

    // Update
    this._serviceMyProfile.updateProfile(this.form.value).subscribe((res: any) => {

      this.form.enable();
      this.saving = false;

      if (res.data) {
        let user = {
          'id'        : res.data.id,
          'name'      : res.data.name,
          'avatar'    : res.data.avatar, 
          'phone'     : res.data.phone,
          'email'     : res.data.email
        }

        localStorage.setItem('user',JSON.stringify(user));
      }

      this._snackBar.openSnackBar(res.message,'');

    }, (err: any) => {
      // Re-enable the form
      this.form.enable();

      // Reset the form
      this.myProfileNgForm.resetForm();

      this.saving = false;
      this._snackBar.openSnackBar(err.error.message,'error');
    });
    
  }

  srcChange(src: any): any {
    this.form.get('image').setValue(src);
  }

  private _buildForm(): any {
    this.form = this._formBuilder.group({
      name: [this.data.name, [Validators.required]],
      phone: [this.data.phone, [Validators.required, Validators.pattern('(^[0][0-9].{7}$)|(^[0][0-9].{8}$)|(^[855][0-9].{9}$)|(^[855][0-9].{10}$)|(.+@.+..+)')]],
      email: [this.data.email, [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      image: [],
    });
  }

}
