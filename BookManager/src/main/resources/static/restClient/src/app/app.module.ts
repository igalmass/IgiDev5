import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const appRoutes: Routes = [
  { path: 'ob', component: ListbookComponent},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
