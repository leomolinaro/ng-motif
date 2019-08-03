import { InputPlayerInput, MotifTokenInput, AngFaction, AgotCardSeed, GetRequest } from './../../../graphql-types';
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
    this.apollo.mutate<CreateSampleGame.Mutation, { inputPlayers: InputPlayerInput[], token: MotifTokenInput }>({
      mutation: createSampleGame,
      variables: {
        token: { token: "leo.molinaro" },
        inputPlayers: [
          {
            id: "leo",
            faction: AngFaction.Tyrell,
            name: "Leo",
            deck: [
              { card: AgotCardSeed.FealtyCore, quantity: 1 },
              { card: AgotCardSeed.AGameOfThronesCore, quantity: 1 },
              { card: AgotCardSeed.CallingTheBannersCore, quantity: 1 },
              { card: AgotCardSeed.ConfiscationCore, quantity: 1 },
              { card: AgotCardSeed.JoustingContestCore, quantity: 2 },
              { card: AgotCardSeed.MarchedToTheWallCore, quantity: 1 },
              { card: AgotCardSeed.WildfireAssaultCore, quantity: 1 },
              { card: AgotCardSeed.CourtesanOfTheRoseCore, quantity: 3 },
              { card: AgotCardSeed.GardenCaretakerCore, quantity: 3 },
              { card: AgotCardSeed.LeftCore, quantity: 2 },
              { card: AgotCardSeed.MaesterLomysCore, quantity: 1 },
              { card: AgotCardSeed.MargaeryTyrellCore, quantity: 3 },
              { card: AgotCardSeed.OlennasInformantCore, quantity: 2 },
              { card: AgotCardSeed.PaxterRedwyneCore, quantity: 3 },
              { card: AgotCardSeed.RandyllTarlyCore, quantity: 2 },
              { card: AgotCardSeed.RightCore, quantity: 2 },
              { card: AgotCardSeed.TheKnightOfFlowersCore, quantity: 3 },
              { card: AgotCardSeed.TheQueenOfThornsCore, quantity: 2 },
              { card: AgotCardSeed.VarysCore, quantity: 2 },
              { card: AgotCardSeed.WardensOfTheReachCore, quantity: 2 },
              { card: AgotCardSeed.BodyguardCore, quantity: 2 },
              { card: AgotCardSeed.HeartsbaneCore, quantity: 2 },
              { card: AgotCardSeed.MilkOfThePoppyCore, quantity: 2 },
              { card: AgotCardSeed.SealOfTheHandCore, quantity: 2 },
              { card: AgotCardSeed.HighgardenCore, quantity: 3 },
              { card: AgotCardSeed.RoseGardenCore, quantity: 3 },
              { card: AgotCardSeed.TheManderCore, quantity: 3 },
              { card: AgotCardSeed.TheRoseroadCore, quantity: 3 },
              { card: AgotCardSeed.TheBearAndTheMaidenFairCore, quantity: 1 },
              { card: AgotCardSeed.GrowingStrongCore, quantity: 2 },
              { card: AgotCardSeed.OlennasCunningCore, quantity: 3 },
              { card: AgotCardSeed.PutToTheSwordCore, quantity: 2 },
              { card: AgotCardSeed.TheHandsJudgmentCore, quantity: 2 }
            ]
          },
          {
            id: "fede",
            faction: AngFaction.Thenightswatch,
            name: "Fede",
            deck: [
              { card: AgotCardSeed.FealtyCore, quantity: 1 },
              { card: AgotCardSeed.ANobleCauseCore, quantity: 1 },
              { card: AgotCardSeed.CalmOverWesterosCore, quantity: 1 },
              { card: AgotCardSeed.ConfiscationCore, quantity: 1 },
              { card: AgotCardSeed.FilthyAccusationsCore, quantity: 1 },
              { card: AgotCardSeed.FortifiedPositionCore, quantity: 1 },
              { card: AgotCardSeed.PowerBehindTheThroneCore, quantity: 1 },
              { card: AgotCardSeed.WildfireAssaultCore, quantity: 1 },
              { card: AgotCardSeed.BenjenStarkCore, quantity: 3 },
              { card: AgotCardSeed.GhostCore, quantity: 3 },
              { card: AgotCardSeed.JonSnowCore, quantity: 3 },
              { card: AgotCardSeed.LittlefingerCore, quantity: 3 },
              { card: AgotCardSeed.MaesterAemonCore, quantity: 3 },
              { card: AgotCardSeed.MessengerRavenCore, quantity: 3 },
              { card: AgotCardSeed.OldBearMormontCore, quantity: 3 },
              { card: AgotCardSeed.OldForestHunterCore, quantity: 3 },
              { card: AgotCardSeed.RangingPartyCore, quantity: 3 },
              { card: AgotCardSeed.RattleshirtsRaidersCore, quantity: 3 },
              { card: AgotCardSeed.SamwellTarlyCore, quantity: 3 },
              { card: AgotCardSeed.SerWaymarRoyceCore, quantity: 3 },
              { card: AgotCardSeed.StewardAtTheWallCore, quantity: 3 },
              { card: AgotCardSeed.VarysCore, quantity: 3 },
              { card: AgotCardSeed.VeteranBuilderCore, quantity: 3 },
              { card: AgotCardSeed.WildlingHordeCore, quantity: 3 },
              { card: AgotCardSeed.YorenCore, quantity: 3 },
              { card: AgotCardSeed.LittleBirdCore, quantity: 3 },
              { card: AgotCardSeed.LongclawCore, quantity: 3 },
              { card: AgotCardSeed.MilkOfThePoppyCore, quantity: 3 },
              { card: AgotCardSeed.CastleBlackCore, quantity: 3 },
              { card: AgotCardSeed.TheKingsroadCore, quantity: 3 },
              { card: AgotCardSeed.TheRoseroadCore, quantity: 3 },
              { card: AgotCardSeed.TheWallCore, quantity: 3 },
              { card: AgotCardSeed.AMeagerContributionCore, quantity: 3 },
              { card: AgotCardSeed.TakeTheBlackCore, quantity: 3 },
              { card: AgotCardSeed.TheHandsJudgmentCore, quantity: 3 }
            ]
          }
        ]
      }
    })
    .subscribe(x => console.log("Apollo mutation ", x.data));
  }

  getGame () {
    this.apollo.query<GetGame.Query>({
      query: getGame
    })
    .subscribe(x => console.log("Apollo query", x.data));

    this.getRequest ();
  }

  getRequest () {
    this.apollo.query<GetRequest.Query, { token: MotifTokenInput }>({
      query: getRequest,
      variables: {
        token: { token: "leo.molinaro" }
      }
    })
    .subscribe(x => console.log("Apollo query", x.data));
  }
  
}

const getRequest = gql`
  query GetRequest($token: MotifTokenInput!) {
    request(token: $token) {
      instruction
    }
  }
`;

const getGame = gql`
  query GetGame {
    game {
      allCards {
        id
        imageSource
        power
        kneeling
        revealed
        attachmentIds
        duplicateIds
      }
      allPlayers {
        id
        name
        gold
        agenda {
          id
        }
        faction {
          id
        }
        hand {
          id
        }
        characters {
          id
        }
        locations {
          id
        }
        discardPile {
          id
        }
        plotDeck {
          id
        }
        usedPlotPile {
          id
        }
        deadPile {
          id
        }
        revealedPlot {
          id
        }
        drawDeckEmpty
      }
      round
      phase
      step
      log {
        message
        type
      }
      started
      firstPlayer {
        id
      }
    }
  }
`;

const createSampleGame = gql`
  mutation CreateSampleGame($inputPlayers: [InputPlayerInput]!, $token: MotifTokenInput!) {
    createGame(
      inputPlayers: $inputPlayers,
      token: $token
    ) {
      phase
      round
      step
    }
  }
`;

// game.initFaction (fede, AngFaction.TARGARYEN);
// game.initCard (fede, AgotCardSeed.A_NOBLE_CAUSE_Core, 2);
// game.initCard (fede, AgotCardSeed.BRAIDED_WARRIOR_Core, 3);
// game.initCard (fede, AgotCardSeed.DAENERYS_TARGARYEN_Core, 3);
// game.initCard (fede, AgotCardSeed.DROGON_Core, 3);
// game.initCard (fede, AgotCardSeed.HANDMAIDEN_Core, 3);
// game.initCard (fede, AgotCardSeed.KHAL_DROGO_Core, 3);
// game.initCard (fede, AgotCardSeed.LITTLEFINGER_Core, 2);
// game.initCard (fede, AgotCardSeed.MAGISTER_ILLYRIO_Core, 2);
// game.initCard (fede, AgotCardSeed.RHAEGAL_Core, 3);
// game.initCard (fede, AgotCardSeed.SER_JORAH_MORMONT_Core, 3);
// game.initCard (fede, AgotCardSeed.TARGARYEN_LOYALIST_Core, 3);
// game.initCard (fede, AgotCardSeed.UNSULLIED_Core, 3);
// game.initCard (fede, AgotCardSeed.VISERION_Core, 3);
// game.initCard (fede, AgotCardSeed.VISERYS_TARGARYEN_Core, 2);
// game.initCard (fede, AgotCardSeed.MILK_OF_THE_POPPY_Core, 2);
// game.initCard (fede, AgotCardSeed.SEAL_OF_THE_HAND_Core, 2);
// game.initCard (fede, AgotCardSeed.ILLYRIOS_ESTATE_Core, 3);
// game.initCard (fede, AgotCardSeed.PLAZA_OF_PUNISHMENT_Core, 3);
// game.initCard (fede, AgotCardSeed.THE_IRON_THRONE_Core, 1);
// game.initCard (fede, AgotCardSeed.THE_KINGSROAD_Core, 3);
// game.initCard (fede, AgotCardSeed.THE_ROSEROAD_Core, 3);
// game.initCard (fede, AgotCardSeed.DRACARYS_Core, 3);
// game.initCard (fede, AgotCardSeed.FIRE_AND_BLOOD_Core, 2);
// game.initCard (fede, AgotCardSeed.WAKING_THE_DRAGON_Core, 2);