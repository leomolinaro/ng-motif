import { WebsocketService } from '../websocket/websocket.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private user = new BehaviorSubject<string>(null); 

  user$ = this.user.asObservable();

  getUser(): string {
    return this.user.getValue();
  }

  isLoggedIn() {
    return this.getUser() ? true : false;
  }

  constructor(private websocket: WebsocketService) {
  }

  login(username: string): Observable<boolean> {
    this.websocket.connect(username);

    return this.websocket.notifyOpenConnection$.pipe(
      take(1),
      map(message => {
        if (message.user) {
          this.user.next(message.user.username);
          return true;
        } else {
          return false;
        }
      })
    );

  }

  logout() { 
    this.user.next(null);
  }

}
