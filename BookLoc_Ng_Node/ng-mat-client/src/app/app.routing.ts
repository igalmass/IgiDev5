
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./components/books/book-list/book-list.component";
import {AuthorListComponent} from "./components/authors/author-list/author-list.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'authors', component: AuthorListComponent},
  { path: 'books', component: BookListComponent}
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);
