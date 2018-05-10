import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BookService} from 'app/services/book.service';
import { BooklistComponent } from './components/booklist/booklist.component';


@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
