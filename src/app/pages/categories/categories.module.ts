import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeng imports
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';


import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ButtonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
