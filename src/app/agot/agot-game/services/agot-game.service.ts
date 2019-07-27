import { MessageOut } from '../../../shared/websocket/models/message-out.model';
import { filter } from 'rxjs/operators';
import { RequestChoice } from '../../models/request-choice.model';
import { AuthService } from '../../../shared/login/auth.service';
import { AgotRequestDialogComponent } from '../agot-request-dialog/agot-request-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material';
import { WebsocketService } from '../../../shared/websocket/websocket.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

import * as fromAgot from '../../store/agot.reducer';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { GetGame, CreateSampleGame } from '../../../graphql-types';

@Injectable()
export class AgotGameService {

  private requestSnackBarRef: MatSnackBarRef<SimpleSnackBar>;

  private choicesByCard = new BehaviorSubject<{ [cardId: number]: RequestChoice[] }>({});
  private choicesByCard$ = this.choicesByCard.asObservable();
  
  private genChoices = new BehaviorSubject<RequestChoice[]>(null);
  public genChoices$ = this.genChoices.asObservable ();

  private requestedPlayerId: string;

  constructor (
    private store: Store<any>,
    private webSocket: WebsocketService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public loginService: AuthService,
    private apollo: Apollo
  ) {

    const request$ = this.store.select(fromAgot.selectNewRequest).pipe(filter(request => !!request));

    request$.subscribe(request => {
      this.requestedPlayerId = request.playerId;
      console.log(request);
      this.showRequestSnackBar(request.instruction);
      const choicesByCard: { [cardId: number]: RequestChoice[] } = {};
      const genChoices: RequestChoice[] = [];
      for (const choice of request.choices) {
        if (choice.cardId) {
          let cardChoices = choicesByCard[choice.cardId];
          if (!cardChoices) { cardChoices = []; choicesByCard[choice.cardId] = cardChoices; }
          cardChoices.push(choice);
        } else {
          genChoices.push(choice);
        }
      }
      this.choicesByCard.next(choicesByCard);
      this.genChoices.next(genChoices);
    });

  }

  getCardChoices$(cardId: number): Observable<RequestChoice[]> {
    return this.choicesByCard$.pipe(
      map(choicesByCard => choicesByCard[cardId])
    );
  }

  respond(choice: RequestChoice): void {
    if (this.requestSnackBarRef) {
      this.requestSnackBarRef.dismiss();
      this.requestSnackBarRef = null;
    }
    this.choicesByCard.next({});
    this.genChoices.next([]);
    //console.log("this.requestedPlayerId", this.requestedPlayerId);
    this.webSocket.send({ type: MessageOut.AGOT_ACTION_CHOICE, data: { choice: choice, playerId: this.requestedPlayerId }});
    this.requestedPlayerId = null;
  }

  showRequestSnackBar(requestTitle: string) {
    this.requestSnackBarRef = this.snackBar.open (requestTitle, null, { verticalPosition: "top" });
  }

  openGenericRequestDialog (request: Request) {
    let requestDialogRef = this.dialog.open (AgotRequestDialogComponent, {
      height: '400px',
      width: '600px',
      data: request
    });
    requestDialogRef.afterClosed ().pipe(
      filter(choice => !!choice)
    ).subscribe (choice => {
      this.respond (choice);
    });
  }

  createGame () {
    this.apollo.mutate<CreateSampleGame.Mutation>({
      mutation: createSampleGame
    })
    .subscribe(x => console.log("Apollo mutation ", x.data));
  }

  getGame () {
    this.apollo.query<GetGame.Query>({
      query: getGame
    })
    .subscribe(x => console.log("Apollo query", x.data));
  }
  
}

const getGame = gql`
  query GetGame {
    game {
      round
    }
  }
`

const createSampleGame = gql`
  mutation CreateSampleGame {
    createGame(inputPlayers: [
      {
        id: "leo",
        faction: TYRELL,
        name: "Leo",
        deck: [
          { card: FEALTY_Core, quantity: 1 },
          { card: A_GAME_OF_THRONES_Core, quantity: 1 },
          { card: CALLING_THE_BANNERS_Core, quantity: 1 },
          { card: CONFISCATION_Core, quantity: 1 },
          { card: JOUSTING_CONTEST_Core, quantity: 2 },
          { card: MARCHED_TO_THE_WALL_Core, quantity: 1 },
          { card: WILDFIRE_ASSAULT_Core, quantity: 1 },
          { card: COURTESAN_OF_THE_ROSE_Core, quantity: 3 },
          { card: GARDEN_CARETAKER_Core, quantity: 3 },
          { card: LEFT_Core, quantity: 2 },
          { card: MAESTER_LOMYS_Core, quantity: 1 },
          { card: MARGAERY_TYRELL_Core, quantity: 3 },
          { card: OLENNAS_INFORMANT_Core, quantity: 2 },
          { card: PAXTER_REDWYNE_Core, quantity: 3 },
          { card: RANDYLL_TARLY_Core, quantity: 2 },
          { card: RIGHT_Core, quantity: 2 },
          { card: THE_KNIGHT_OF_FLOWERS_Core, quantity: 3 },
          { card: THE_QUEEN_OF_THORNS_Core, quantity: 2 },
          { card: VARYS_Core, quantity: 2 },
          { card: WARDENS_OF_THE_REACH_Core, quantity: 2 },
          { card: BODYGUARD_Core, quantity: 2 },
          { card: HEARTSBANE_Core, quantity: 2 },
          { card: MILK_OF_THE_POPPY_Core, quantity: 2 },
          { card: SEAL_OF_THE_HAND_Core, quantity: 2 },
          { card: HIGHGARDEN_Core, quantity: 3 },
          { card: ROSE_GARDEN_Core, quantity: 3 },
          { card: THE_MANDER_Core, quantity: 3 },
          { card: THE_ROSEROAD_Core, quantity: 3 },
          { card: THE_BEAR_AND_THE_MAIDEN_FAIR_Core, quantity: 1 },
          { card: GROWING_STRONG_Core, quantity: 2 },
          { card: OLENNAS_CUNNING_Core, quantity: 3 },
          { card: PUT_TO_THE_SWORD_Core, quantity: 2 },
          { card: THE_HANDS_JUDGMENT_Core, quantity: 2 }
        ]
      },
      {
        id: "fede",
        faction: THENIGHTSWATCH,
        name: "Fede",
        deck: [
          { card: FEALTY_Core, quantity: 1 },
          { card: A_NOBLE_CAUSE_Core, quantity: 1 },
          { card: CALM_OVER_WESTEROS_Core, quantity: 1 },
          { card: CONFISCATION_Core, quantity: 1 },
          { card: FILTHY_ACCUSATIONS_Core, quantity: 1 },
          { card: FORTIFIED_POSITION_Core, quantity: 1 },
          { card: POWER_BEHIND_THE_THRONE_Core, quantity: 1 },
          { card: WILDFIRE_ASSAULT_Core, quantity: 1 },
          { card: BENJEN_STARK_Core, quantity: 3 },
          { card: GHOST_Core, quantity: 3 },
          { card: JON_SNOW_Core, quantity: 3 },
          { card: LITTLEFINGER_Core, quantity: 3 },
          { card: MAESTER_AEMON_Core, quantity: 3 },
          { card: MESSENGER_RAVEN_Core, quantity: 3 },
          { card: OLD_BEAR_MORMONT_Core, quantity: 3 },
          { card: OLD_FOREST_HUNTER_Core, quantity: 3 },
          { card: RANGING_PARTY_Core, quantity: 3 },
          { card: RATTLESHIRTS_RAIDERS_Core, quantity: 3 },
          { card: SAMWELL_TARLY_Core, quantity: 3 },
          { card: SER_WAYMAR_ROYCE_Core, quantity: 3 },
          { card: STEWARD_AT_THE_WALL_Core, quantity: 3 },
          { card: VARYS_Core, quantity: 3 },
          { card: VETERAN_BUILDER_Core, quantity: 3 },
          { card: WILDLING_HORDE_Core, quantity: 3 },
          { card: YOREN_Core, quantity: 3 },
          { card: LITTLE_BIRD_Core, quantity: 3 },
          { card: LONGCLAW_Core, quantity: 3 },
          { card: MILK_OF_THE_POPPY_Core, quantity: 3 },
          { card: CASTLE_BLACK_Core, quantity: 3 },
          { card: THE_KINGSROAD_Core, quantity: 3 },
          { card: THE_ROSEROAD_Core, quantity: 3 },
          { card: THE_WALL_Core, quantity: 3 },
          { card: A_MEAGER_CONTRIBUTION_Core, quantity: 3 },
          { card: TAKE_THE_BLACK_Core, quantity: 3 },
          { card: THE_HANDS_JUDGMENT_Core, quantity: 3 }
        ]
      }
    ],
    token: { token: "leo.molinaro" }) {
      phase
      round
      step
    }
  }
`