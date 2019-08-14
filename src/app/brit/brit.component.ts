import { BritNation } from './models/brit-nation.model';
import { BritRequestService } from './services/brit-request.service';
import { MessageOut } from './../shared/websocket/models/message-out.model';
import { MotifComponent } from './../shared/components/motif.component';
import { AuthService } from '../shared/login/auth.service';
import { LogRow } from './../shared/models/log-row.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromBrit from './store/brit.reducer';
import { BritBattle } from './models/brit-battle';
import { take } from 'rxjs/operators';

@Component({
  selector: 'brit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit.component.html',
  styleUrls: ['./brit.component.css']
})
export class BritComponent extends MotifComponent implements OnInit {

  logRows$: Observable<LogRow[]>;

  user: string;
  nationIds$: Observable<string[]>;
  gameStarted$: Observable<boolean>;
  showPass$: Observable<boolean>;
  battle$: Observable<BritBattle>;

  leftSidenavOpened = true;
  nationSidenavOpened = true;

  currentNationIdTab = null;
  currentNationTabIndex = null;

  constructor (
    private store: Store<any>,
    private loginService: AuthService,
    private requestService: BritRequestService
  ) { super(); }

  ngOnInit() {

    this.nationIds$ = this.store.select(fromBrit.selectNationIds);
    this.logRows$ = this.store.select(fromBrit.selectGameLog);
    this.gameStarted$ = this.store.select(fromBrit.selectGameStarted);
    this.battle$ = this.store.select(fromBrit.selectBattle);
    let request$ = this.store.select(fromBrit.selectRequest);
    let response$ = this.requestService.response$;

    // this.subscribe(this.loginService.user$, user => {
    //   this.user = user;
    //   if (user) {
    //     this.webSocket.send({ type: MessageOut.BRIT_INIT_STATE });
    //   }
    // });

    // this.subscribe(this.webSocket.britReduxActions$, message => {
    //   for (let action of message.data.actions) {
    //     this.store.dispatch(action);
    //   }
    // });

    this.subscribe(request$, request => {
      if (request) {
        this.requestService.manageRequest(request);
      }
    });

    this.subscribe(response$, data => {
      // this.webSocket.send({ type: MessageOut.BRIT_ACTION_CHOICE, data: data });
    });

    this.subscribe(this.logRows$, l => {
      setTimeout(function () {
        let objDiv = document.getElementById("left-sidenav");
        if (objDiv) {
          objDiv.scrollTop = objDiv.scrollHeight;
        }
      });
    });
    
  }

  selectNationTab(nation: BritNation) {
    if (!nation) {
      this.store.select(fromBrit.selectGameNation).pipe(
        take(1)
      ).subscribe(n => nation = n);
    }
    this.currentNationIdTab = nation.id;
    this.currentNationTabIndex = nation.sort - 1;
  }

  login (username: string) {
    if (!this.user) {
      this.loginService.login(username);
    }
  }

  startGame () {
    // this.webSocket.send({ type: MessageOut.BRIT_START });
  }

  debugState () {
    this.store.select(fromBrit.selectBrit).pipe(
      take(1)
    ).subscribe(console.log);
  }

}
