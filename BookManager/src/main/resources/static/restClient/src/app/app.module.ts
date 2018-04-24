import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookService} from './shared-service/book.service'

const appRoutes: Routes = [
  { path: '', component: ListbookComponent},
  { path: 'op', component: BookFormComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
