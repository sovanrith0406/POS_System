import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    // Redirect signed in user to the '/dashboards'
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'auth',
                loadChildren: () => import('app/main/auth/auth.module').then(m => m.AuthModule),
            },
        ]
    },

    // Admin routes & authenticated users
    {
        path       : '',
        canActivate: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [

            // =============================>> Dashboard
            {
                path: 'dashboard',
                loadChildren: () => import('app/main/dashboard/dashboard.module').then(m => m.DashboardModule)
            },

            // =============================>> Pos
            {
                path: 'pos',
                loadChildren: () => import('app/main/pos/pos.module').then(m => m.PosModule)
            },

            // =============================>> Sale
            {
                path: 'sales',
                loadChildren: () => import('app/main/sale/sale.module').then(m => m.SaleModule)
            },

            // =============================>> Product
            {
                path: 'product',
                loadChildren: () => import('app/main/product/product.module').then(m => m.ProductModule)
            },

            // =============================>> User
            {
                path: 'users',
                loadChildren: () => import('app/main/user/user.module').then(m => m.UserModule)
            },

            // =============================>> My Profile
            {
                path: 'my-profile',
                loadChildren: () => import('app/main/my-profile/my-profile.module').then(m => m.MyProfileModule),
            },

            // 404 & Catch all
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/main/error/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
