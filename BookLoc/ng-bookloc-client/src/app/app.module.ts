import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';

import { BookListComponent } from './components/booklist/booklist.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import {LibraryService} from "./services/library.service";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import {DataStorageService} from 'app/services/data-storage.service';
import {MyFilterByFieldPipe} from "./shared/my-filter-by-field.pipe";
import {CallbackPipe} from 'app/shared/callback.pipe';
import { SortableColumnComponent } from './components/shared/sortable-column/sortable-column.component';
import {SortService} from 'app/components/shared/sortable-column/sort.service';
import {SortableTableDirective} from 'app/components/shared/sortable-column/sortable-table.directive';
import {MyArraySortPipe} from "./components/shared/sortable-column/my-array-sort.pipe";

const appRoutes : Routes  = [
  { path: 'books', component: BookListComponent},
  { path: 'books/new',component: BookFormComponent },
  { path: 'books/edit/:id', component: BookFormComponent},
  { path: 'authors', component: AuthorListComponent},
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,

    BookListComponent,
    HeaderComponent,
    AuthorListComponent,
    PageNotFoundComponent,
    BookFormComponent,
    MyFilterByFieldPipe,
    MyArraySortPipe,
    SortableTableDirective,
    CallbackPipe,
    SortableColumnComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
      //{enableTracing: true}), // for debug :),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [LibraryService, DataStorageService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
