import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
  preserveWhitespaces: true
})
export class CategoryListComponent implements OnInit {

  items: MenuItem[];

  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    // breadcrumb
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label:'Categories' },
    ];

    this.categoryService.getAll().subscribe(
      (data) => this.categories = data,
      (error) => alert('erro ao carregar lista')
    );
  }

  delete(category: Category) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        () => this.categories = this.categories
          .filter(element => element != category),
        (error) => alert('erro ao tentar excluir categoria')
      );
    }
  }
}
