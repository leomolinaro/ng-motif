import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Store } from '@ngrx/store';
import { InputPlayerInput, MotifTokenInput, AngFaction, AgotCardSeed, GetRequest, GetGame, CreateGame, SubscribeRequests } from './../../graphql-types';
import gql from 'graphql-tag';
import { Request } from './agot.actions';

const requestFragment =  gql`
  fragment RequestFragment on AAgotRequest {
    repeated
    instruction
    type
    player { id }
    choices {
      requestType
      choiceType
      cardId
      icon
      cardAction
      player
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class AgotRemoteService {

  constructor (private apollo: Apollo, private store: Store<any>) {}
  
  private getGame () {
    return this.apollo.query<GetGame.Query>({
      query: getGame
    });
  }

  private getRequest () {
    return this.apollo.query<GetRequest.Query, { token: MotifTokenInput }> ({
      query: gql`
        query GetRequest ($token: MotifTokenInput!) {
          request (token: $token) {
            ...RequestFragment
          }
        }
        ${requestFragment}
      `,
      variables: {
        token: { token: "leo.molinaro" }
      }
    });
  }

  private subscribeRequests (): Observable<{ data: SubscribeRequests.Subscription }> {
    return this.apollo.subscribe<SubscribeRequests.Subscription, SubscribeRequests.Variables> ({
      query: gql`
        subscription SubscribeRequests ($token: MotifTokenInput!) {
          request (token: $token) {
            ...RequestFragment
          }
        }
        ${requestFragment}
      `,
      variables: {
        token: { token: "leo.molinaro" }
      }
    });
  }

  private createGame (inputPlayers: InputPlayerInput[]): Observable<{ data: CreateGame.Mutation }> {
    return this.apollo.mutate<CreateGame.Mutation, CreateGame.Variables> ({
      mutation: gql`
        mutation CreateGame ($inputPlayers: [InputPlayerInput]!, $token: MotifTokenInput!) {
          createGame(
            inputPlayers: $inputPlayers,
            token: $token
          ) {
            phase
            round
            step
          }
        }
      `,
      variables: {
        token: { token: "leo.molinaro" },
        inputPlayers: inputPlayers
      }
    });
  }

  loadGame () {
    this.getGame ()
    .subscribe (x => console.log ("Apollo query", x.data));
  }

  loadRequest () {
    this.getRequest ()
    .subscribe (x => {
      console.log ("Apollo query", x.data);
      const request = x.data.request;
      this.store.dispatch (new Request ({ request: request }));
    });
  }

  linkRequests () {
    this.subscribeRequests ()
    .subscribe ((x: { data: SubscribeRequests.Subscription }) => {
      console.log ("Apollo subscription", x.data);
      const request = x.data.request;
      this.store.dispatch (new Request ({ request: request }));
    });
  }

  createSampleGame () {
    this.createGame ([
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
    ])
    .subscribe (x => console.log("Apollo mutation ", x.data));
  }

}

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