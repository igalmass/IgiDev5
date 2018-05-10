import {Component, OnDestroy, OnInit} from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnDestroy {

  constructor(private libraryService: LibraryService, private route: ActivatedRoute, private router: Router) { }

  subscribe: Subscription;
  id: number = null;
  bookForm: FormGroup;

  ngOnInit() {
    this.subscribe = this.route.params.subscribe((params : Params) => {
      this.id = +params['id'];
      this.initForm();

      }
    )
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  isInEditMode(){
    let result = this.id != null;
    return result;
  }

  initForm(){
    let title = '';
    let pageCount = 1000;
    let description = '';

    if (this.isInEditMode()){
      const editedBook = this.libraryService.getBookById(this.id);
      title = editedBook.getTitle();
      description = editedBook.getDescription();
      pageCount = editedBook.getPageCount();
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

    if (this.isInEditMode()){
      const editedBook = this.libraryService.getBookById(this.id);
      editedBook.setTitle(formValues['title']);

    }

    this.router.navigate(['/books']);


  }

}
