import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productTypeModule } from 'app/main/product/product-type/product-type.module';
import { ProductsModule } from 'app/main/product/products/products.module';

const productRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                loadChildren: () => import('app/main/product/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'product-types',
                loadChildren: () => import('app/main/product/product-type/product-type.module').then(m => m.productTypeModule)
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes),
        ProductsModule,
        productTypeModule
    ],
    exports: [
        ProductsModule,
        productTypeModule
    ]
})
export class ProductModule{}
