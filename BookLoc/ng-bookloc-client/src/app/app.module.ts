import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {BookService} from 'app/model/book.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
