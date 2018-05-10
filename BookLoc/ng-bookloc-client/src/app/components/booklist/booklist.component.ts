import { Component, OnInit } from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private libraryService: LibraryService, private route: ActivatedRoute, private router: Router) { }

  getAllTheBooks(){
    return this.libraryService.getAllTheBooks();
  }

  ngOnInit() {

  }

  onEdit(bookId: number){
    this.router.navigate(['edit', bookId], {relativeTo: this.route});

  }

  onNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
