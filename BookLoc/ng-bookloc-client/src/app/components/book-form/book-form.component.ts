import {Component, OnDestroy, OnInit} from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnDestroy {

  constructor(private libraryService: LibraryService, private route: ActivatedRoute) { }

  subscribe: Subscription;
  id: number;

  ngOnInit() {
    this.subscribe = this.route.params.subscribe((params : Params) => {
      this.id = params['id']
      }
    )
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
