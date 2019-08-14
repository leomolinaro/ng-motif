import { MotifApiService } from './../api/motif-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private token = new BehaviorSubject<string>(null); 

  token$ = this.token.asObservable();

  getToken (): string {
    return this.token.getValue();
  } // getToken

  isLoggedIn () {
    return this.getToken () ? true : false;
  } // isLoggedIn

  constructor(private api: MotifApiService) { }

  login (username: string): Observable<boolean> {

    return this.api.login (username).pipe (
      map (x => {
        const token = x.data.login.token;
        this.token.next (token);
        return true;
      })
    );

    // this.websocket.connect(username);

    // return this.websocket.notifyOpenConnection$.pipe(
    //   take(1),
    //   map(message => {
    //     if (message.user) {
    //       this.user.next(message.user.username);
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   })
    // );

  } // login

  logout () { 
    this.token.next(null);
  } // logout

} // AuthService
