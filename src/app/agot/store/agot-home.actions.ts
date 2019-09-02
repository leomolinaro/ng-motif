import { AgotGame } from './agot-home.reducer';
import { createAction, props } from '@ngrx/store';

export const gamesGet = createAction ("[Agot Home Page] Games Get");
export const gamesGetSuccess = createAction ("[Agot Home Page] Games Get Success", props<{ games: AgotGame[] }> ());
export const gamesGetFailure = createAction ("[Agot Home Page] Games Get Failure", props<{ error: any }> ());
export const gameNew = createAction ("[Agot Home Page] Game New");
export const gameNewSuccess = createAction ("[Agot Home Page] Game New Success", props<{ game: AgotGame }> ());
export const gameNewFailure = createAction ("[Agot Home Page] Game New Failure", props<{ error: any }> ());