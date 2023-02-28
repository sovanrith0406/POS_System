import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ScrollbarModule } from 'helpers/directives/scrollbar';
import { ListingComponent } from './listing/listing.component';

const posRoutes: Routes = [
    {
        path: '',
        component: ListingComponent
    }
];

@NgModule({
    imports: [
        SharedModule,
        ScrollbarModule,
        RouterModule.forChild(posRoutes),
    ],
    declarations: [
        ListingComponent
    ],
})
export class PosModule { }
