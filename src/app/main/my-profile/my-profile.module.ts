import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';

const myProfileRoutes: Routes = [
    {
        path: '',
        component: MyProfileComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(myProfileRoutes),
    ],
    declarations: [
      MyProfileComponent
    ],
})
export class MyProfileModule {}
