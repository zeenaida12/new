import { finalize } from 'rxjs/operators';
import { BooklistService } from './providers/booklist.service';
import { Books } from './dto/books';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  _books: Books[];
  hasError: boolean;
  refreshing: boolean;
constructor(private bookData: BooklistService){

}
ngOnInit(){
  this.hasError =false;
  this.refreshing=true;
  this.bookData.getListOfBook()
  .pipe(finalize(()=>this.refreshing=false))
  .subscribe((bookList)=>{
    this._books = bookList;
  }
  ,error => {
    this.hasError=true;
  }
)
}
}

