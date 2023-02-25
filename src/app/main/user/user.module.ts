import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';

const userRoutes: Routes = [
    {
        path: '',
        component: ListingComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes),
    ],
    declarations: [
        ListingComponent
    ],
})
export class UserModule { }
