import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthorListComponent } from './components/authors/author-list/author-list.component';
import {routing} from "./app.routing";
import {LibraryService} from "./services/library.service";
import {HttpClientModule} from "@angular/common/http";
import {DataStorageService} from "./services/data-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    MainNavComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    routing
  ],
  providers: [ LibraryService, DataStorageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
