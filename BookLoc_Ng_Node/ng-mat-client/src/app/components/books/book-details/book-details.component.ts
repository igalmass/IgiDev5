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
  bookInfo: BookInfo = {
    id: "1",
    isbn: "2",
    title: "titoo",
    pageCount: 4444
  };

  ngOnInit() {
    let a = 3;
  }

  onBackToListClicked() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute})
  }
}
