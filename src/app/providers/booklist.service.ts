import { Books } from './../dto/books';
import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { merge, finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  private _books: Books[];

  constructor(private _httpClient: HttpClient) {
}

public getListOfBook(): Observable<any>{
  return new Observable(observable => {

    let url = 'http://super-crud.herokuapp.com/books';
    this._httpClient. get(url)
    .pipe(finalize(() => observable.complete()))
    .subscribe(
      (data:any) => {

        this._books = [];

        data.books.forEach(element => {
          this._books.push({
            _id: element._id,
            title: element.title,
            author: element.author,
            image: element.image,
            releaseDate: element.releaseDate,
            _v: element._v
          })

        });
        observable.next(this._books);
      }, error =>{
        observable.error(error);
      }

    )

  })
}}
