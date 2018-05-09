import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import * as AuthActions from "./auth.actions";
import {fromPromise} from "rxjs/Observable/fromPromise";
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$.ofType(AuthActions.TRY_SIGNUP).map((action: AuthActions.TrySignup) => {
    debugger;
    return action.payload;
  }).switchMap((authData: { username: string, password: string }) => {
    debugger;
    return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
  }).switchMap(() => {
    debugger;
    return fromPromise(firebase.auth().currentUser.getIdToken());
  }).mergeMap((token: string) => {
    debugger;
    return [
      {
        type: AuthActions.SIGNUP
      },
      {
        type: AuthActions.SET_TOKEN,
        payload: token
      }
    ]
  });



  @Effect()
  signIn = this.actions$.ofType(AuthActions.TRY_SIGNIN).map((action: AuthActions.TrySignin) => {
    return action.payload;
  }).switchMap((authData: {username: string, password: string}) => {
    return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
  }).switchMap(() => {
    return fromPromise(firebase.auth().currentUser.getIdToken());
  }).mergeMap((token: string) => {
    this.router.navigate(['/']);
    return [
    {
      type: AuthActions.SIGNIN
,    },
    {
      type: AuthActions.SET_TOKEN,
      payload: token
    }
  ]
});

  @Effect({dispatch: false})
  authLogout = this.actions$.ofType(AuthActions.LOGOUT).do(() => {
      this.router.navigate(['/']);
  });




  constructor(private actions$: Actions, private router: Router) {

  }
}
