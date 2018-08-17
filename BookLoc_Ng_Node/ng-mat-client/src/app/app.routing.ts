
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./components/books/book-list/book-list.component";
import {AuthorListComponent} from "./components/authors/author-list/author-list.component";
import {BookDetailsComponent} from "./components/books/book-details/book-details.component";

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books'},
  { path: 'authors', component: AuthorListComponent},
  { path: 'books', children: [
      { path: '', component: BookListComponent },
      { path: 'new_book', component: BookDetailsComponent }
    ]
  }
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);
