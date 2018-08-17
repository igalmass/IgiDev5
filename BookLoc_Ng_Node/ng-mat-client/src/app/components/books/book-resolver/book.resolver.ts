import {Observable, of} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BookInfo} from "../../../models/book-info.model";

export class BookResolver implements Resolve<Observable<BookInfo>> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<BookInfo>> | Promise<Observable<BookInfo>> | Observable<BookInfo> {
    const bookId = route.paramMap.get('bookId');
    if (bookId === 'new_book'){
      return of(new BookInfo(null, "44", "Titiiii", 654));
    }
    return undefined;
  }

}
