import {Component, OnDestroy, OnInit} from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataStorageService} from 'app/services/data-storage.service';
import {Book} from 'app/model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnDestroy {

  constructor(
    private libraryService: LibraryService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  subscribe: Subscription;
  editedBookId: number = null;
  bookForm: FormGroup;

  ngOnInit() {
    this.subscribe = this.route.params.subscribe((params : Params) => {
      this.editedBookId = +params['id'];
      debugger;
      this.initForm();

      }
    )
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  isInEditMode(){
    let result = true;
    if (!this.editedBookId){
      result = false;
    }

    return result;
  }

  initForm(){
    let title = '';
    let pageCount = 1000;
    let description = '';

    if (this.isInEditMode()){
      const editedBook = this.libraryService.getBookById(this.editedBookId);
      debugger;
      title = editedBook.title;
      description = editedBook.description;
      pageCount = editedBook.pageCount;
    }

    this.bookForm = new FormGroup({
      'title': new FormControl(title, [Validators.required]),
      'description': new FormControl(description, [Validators.required]),
      'pageCount': new FormControl(pageCount, [Validators.required])
    });
  }

  onSubmit(){
    let formValues = this.bookForm.value;
    console.log(formValues);

    if (this.isInEditMode()) {
      let editedBook: Book = this.libraryService.getBookById(this.editedBookId);
      editedBook.title = formValues['title'];
      editedBook.pageCount = +formValues['pageCount'];
      editedBook.description = formValues['description'];
      this.dataStorageService.saveBook(editedBook);
    } else {
      let book = new Book(null, formValues['title'], formValues['description'], formValues['pageCount'], []);
      this.dataStorageService.createBook(book);
    }



    this.router.navigate(['/books']);


  }

}
