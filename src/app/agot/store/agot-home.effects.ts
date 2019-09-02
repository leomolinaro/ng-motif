import { AngFaction, AgotCardSeed } from './../../graphql-types';
import { AgotGame } from './agot-home.reducer';
import { AgotApiService } from './../api/agot-api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import * as actions from './agot-home.actions';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, map, exhaustMap, catchError, tap, switchMap } from 'rxjs/operators';

@Injectable ()
export class AgotHomeEffects {

  constructor(
    private actions$: Actions,
    private api: AgotApiService
  ) {}

  loadGames$ = createEffect (() => this.actions$.pipe (
    ofType (actions.gamesGet),
    exhaustMap ((action) => this.api.getGames ()
      .pipe (
        map (games => actions.gamesGetSuccess ({ games })),
        catchError (error => of (actions.gamesGetFailure ({ error })))
      )
    )
  ));

  newGame$ = createEffect (() => this.actions$.pipe (
    ofType (actions.gameNew),
    exhaustMap ((action) => this.createSampleGame ()
      .pipe (
        map (res => actions.gameNewSuccess ({ game: res })),
        catchError (error => of (actions.gameNewFailure ({ error })))
    ))
  ));

  createSampleGame () {
    return this.api.newGame ("Game 1",
      [{
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
    ]);
  } // createSampleGame

} // AgotHomeEffects

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