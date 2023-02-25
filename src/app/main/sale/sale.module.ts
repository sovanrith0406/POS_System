import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';

const saleRoutes: Routes = [
    {
        path: '',
        component: ListingComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(saleRoutes),
    ],
    declarations: [
        ListingComponent
    ],
})
export class SaleModule { }
