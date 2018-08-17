
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./components/books/book-list/book-list.component";
import {AuthorListComponent} from "./components/authors/author-list/author-list.component";
import {BookDetailsComponent} from "./components/books/book-details/book-details.component";
import {BookResolver} from "./components/books/book-resolver/book.resolver";

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books'},
  { path: 'authors', component: AuthorListComponent},
  { path: 'books', children: [
      { path: '', component: BookListComponent },
      {
        path: ':bookId',
        component: BookDetailsComponent,
        resolve: { bookInfo: BookResolver }
      }
    ]
  }
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);
