import { BritBattle } from '../models/brit-battle';
import { BritUnit } from '../models/brit-unit.model';
import { BritRequest } from '../models/brit-request.model';
import { BritArea } from '../models/brit-area.model';
import { BritNation } from '../models/brit-nation.model';
import { LogRow } from '../../shared/models/log-row.model';
import { BritState } from './brit.reducer';
import { Action } from '@ngrx/store';

export const ADD_LOG = "[Brit] Add Log";
export const INIT_STATE = "[Brit] Init State";
export const REQUEST = "[Brit] Request";
export const SET_GAME_STARTED = "[Brit] Set Game Started";
export const SET_PHASE = "[Brit] Set Phase";
export const UPDATE_NATION = "[Brit] Update Nation";
export const UPDATE_AREA = "[Brit] Update Area";
export const UPDATE_UNIT = "[Brit] Update Unit";
export const UPDATE_BATTLE = "[Brit] Update Battle";

export class AddLog implements Action { readonly type = ADD_LOG; constructor (public payload: { logRow: LogRow }) {} }
export class InitState implements Action { readonly type = INIT_STATE; constructor (public payload: { state: BritState }) {} }
export class Request implements Action { readonly type = REQUEST; constructor (public payload: { request: BritRequest }) {} }
export class SetGameStarted implements Action { readonly type = SET_GAME_STARTED; constructor (public payload: { started: boolean } ) {} }
export class SetPhase implements Action { readonly type = SET_PHASE; constructor (public payload: { round: string, nationId: string, phase: string }) {} }
export class UpdateNation implements Action { readonly type = UPDATE_NATION; constructor (public payload: { nation: BritNation }) {} }
export class UpdateArea implements Action { readonly type = UPDATE_AREA; constructor (public payload: { area: BritArea }) {} }
export class UpdateUnit implements Action { readonly type = UPDATE_UNIT; constructor (public payload: { unit: BritUnit }) {} }
export class UpdateBattle implements Action { readonly type = UPDATE_BATTLE; constructor (public payload: { battle: BritBattle }) {} }

export type BritAction = 
AddLog |
InitState |
Request |
SetGameStarted |
SetPhase |
UpdateNation |
UpdateArea |
UpdateUnit |
UpdateBattle;