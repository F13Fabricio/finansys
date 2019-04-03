import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs'
import { map, catchError, flatMap } from 'rxjs/operators'
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API = ''

  //categories: Category[];

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Category> {
    const url = `${this.API}/${id}`;

    return this.http.get<Category>(url).pipe(
      catchError(this.handleError)
    );
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category[]>(this.API, category).pipe(
      catchError(this.handleError)
    );
  }

  update(category: Category): Observable<Category> {
    const url = `${this.API}/${category.id}`;

    return this.http.put<Category[]>(url, category).pipe(
      catchError(this.handleError),
      map(() => category)
    );
  }

  delete(id: number): Observable<Category> {
    const url = `${this.API}/${id}`;

    return this.http.delete<Category>(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }


  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API).pipe(
      catchError(this.handleError)
      //map((data: Category[]) => this.categories)
    );
  }

  handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO =>", error);
    return throwError(error);
  }
}
