import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';

const posRoutes: Routes = [
    {
        path: '',
        component: ListingComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(posRoutes),
    ],
    declarations: [
        ListingComponent
    ],
})
export class PosModule { }
