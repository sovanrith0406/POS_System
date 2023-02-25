import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ScrollbarModule } from 'helpers/directives/scrollbar';
import { ListingComponent } from './listing/listing.component';
import { UiSwitchModule } from 'ngx-ui-switch';

const userRoutes: Routes = [
    {
        path: '',
        component: ListingComponent
    }
];

@NgModule({
    imports: [
        SharedModule,
        ScrollbarModule,
        UiSwitchModule,
        RouterModule.forChild(userRoutes),
    ],
    declarations: [
        ListingComponent
    ],
})
export class UserModule { }
