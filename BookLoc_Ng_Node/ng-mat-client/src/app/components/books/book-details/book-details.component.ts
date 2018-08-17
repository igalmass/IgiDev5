import { Component, OnInit } from '@angular/core';
import {BookInfo} from "../../../models/book-info.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  bookInfo: BookInfo = null;
  isModelReady = false;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {bookInfo: BookInfo}) => {
      this.bookInfo = data.bookInfo;
      this.isModelReady = true;
    });
  }

  onBackToListClicked() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute})
  }

  isNewBook(){
    if (this.bookInfo.id){
      return false;
    } else {
      return true;
    }
  }

  onSubmit(){
    debugger;
    console.log('submitting ....');
  }
}
