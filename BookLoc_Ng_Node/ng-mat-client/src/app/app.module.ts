import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthorListComponent } from './components/authors/author-list/author-list.component';
import { routing } from "./app.routing";
import { LibraryService } from "./services/library.service";
import { HttpClientModule } from "@angular/common/http";
import { DataStorageService } from "./services/data-storage.service";
import { BookActionMenuComponent } from './components/books/book-action-menu/book-action-menu.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    MainNavComponent,
    AuthorListComponent,
    BookActionMenuComponent,
    BookDetailsComponent
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
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ LibraryService, DataStorageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
