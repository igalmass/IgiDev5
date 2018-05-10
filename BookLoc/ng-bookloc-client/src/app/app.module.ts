import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

import { BookListComponent } from './components/booklist/booklist.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import {LibraryService} from "./services/library.service";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookFormComponent } from './components/book-form/book-form.component';

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
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
      {enableTracing: true}), // for debug :),
    ReactiveFormsModule

  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
