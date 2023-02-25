import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Animations } from 'helpers/animations';
import { environment as env } from 'environments/environment';
import { SnackbarService } from 'app/shared/services/snackbar.service';
import { Router } from '@angular/router';
import { MyProfileService } from '../my-profile.service';

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
  public mode: any;
  public contact: any = [];
  public saving: boolean = false;
  public src: string = 'assets/images/avatars/profile.jpg';
  public data: any;

  constructor(
    private _serviceMyProfile: MyProfileService,
    private _formBuilder: UntypedFormBuilder,
    private _snackBar: SnackbarService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.data = localStorage.getItem('user');
    if (this.data) {
      this.data = JSON.parse(this.data);
      if (!this.data) {
        localStorage.clear();
        this._router.navigateByUrl('/auth/sign-in');
      }
    }
    if (this.data) {
      //this.src = this.url + this.data.avatar; //if this image is public from api
      this.src = this.data.avatar;
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

    this.saving = true;

    // Update
    this._serviceMyProfile.updateProfile(this.form.value).subscribe((res: any) => {
      // Navigate to the confirmation required page
      this.saving = false;
      console.log(res);
    }, () => {
      // Re-enable the form
      this.form.enable();

      // Reset the form
      this.myProfileNgForm.resetForm();

      this.saving = false;
    }
    );
  }

  srcChange(src: any): any {
    this.form.get('avatar').setValue(src);
  }

  private _buildForm(): any {
    this.form = this._formBuilder.group({
      name: [this.data.name, [Validators.required]],
      phone: [this.data.phone, [Validators.required, Validators.pattern('(^[0][0-9].{7}$)|(^[0][0-9].{8}$)|(^[855][0-9].{9}$)|(^[855][0-9].{10}$)|(.+@.+..+)')]],
      email: [this.data.email, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      avatar: [''],
    });
  }

}
