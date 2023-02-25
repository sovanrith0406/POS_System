import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user'
})
export class UserComponent implements OnInit {
    user: any;

    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _authService: AuthService
        ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.user = localStorage.getItem('user');
        if (this.user) {
            this.user = JSON.parse(this.user);
            if (!this.user) {
                localStorage.clear();
                this._router.navigateByUrl('/auth/login');
            }
        }
    }




    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Profile
     */
    myProfile(): void {
        this._router.navigate(['my-profile']);
    };

    /**
     * Logout
     */
    Logout(): void {
        this._authService.Logout();
    }
}
