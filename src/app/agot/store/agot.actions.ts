import { AgotRequest } from './../models/request.model';

import { AgotState } from './agot.reducer';
import { LogRow } from '../../shared/models/log-row.model';
import { Action } from '@ngrx/store';

export const ADD_ATTACHMENT = "ADD_ATTACHMENT";
export const ADD_CARD = "ADD_CARD";
export const ADD_DUPLICATE = "ADD_DUPLICATE";
export const ADD_LOG = "ADD_LOG";
export const EMPTY_DRAW_DECK = "EMPTY_DRAW_DECK";
export const INIT_STATE = "INIT_STATE";
export const REMOVE_ATTACHMENT = "REMOVE_ATTACHMENT";
export const REMOVE_CARD = "REMOVE_CARD";
export const REMOVE_DUPLICATE = "REMOVE_DUPLICATE";
export const REQUEST = "REQUEST";
export const SET_CARD_KNEELING = "SET_CARD_KNEELING";
export const SET_CARD_POWER = "SET_CARD_POWER";
export const SET_CARD_REVEALED = "SET_CARD_REVEALED";
export const SET_FIRST_PLAYER = "SET_FIRST_PLAYER";
export const SET_GAME_STARTED = "SET_GAME_STARTED";
export const SET_GOLD = "SET_GOLD";
export const SET_PHASE = "SET_PHASE";

export class AddAttachment implements Action { readonly type = ADD_ATTACHMENT; constructor (public payload: { cardId: number, toCard: number }) {} }
export class AddCard implements Action { readonly type = ADD_CARD; constructor (public payload: {cardId: number; toPlayer: string; toArea: string; index: number }) {} }
export class AddDuplicate implements Action { readonly type = ADD_DUPLICATE; constructor (public payload: {cardId: number; toCard: number }) {} }
export class AddLog implements Action { readonly type = ADD_LOG; constructor (public payload: {log: LogRow }) {} }
export class EmptyDrawDeck implements Action { readonly type = EMPTY_DRAW_DECK; constructor (public payload: {player: string }) {} }
export class InitState implements Action { readonly type = INIT_STATE; constructor (public payload: {state: AgotState }) {} }
export class RemoveCard implements Action { readonly type = REMOVE_CARD; constructor (public payload: {cardId: number; fromPlayer: string; fromArea: string }) {} }
export class RemoveAttachment implements Action { readonly type = REMOVE_ATTACHMENT; constructor (public payload: {cardId: number; fromCard: number }) {} }
export class RemoveDuplicate implements Action { readonly type = REMOVE_DUPLICATE; constructor (public payload: {cardId: number; fromCard: number }) {} }
export class Request implements Action { readonly type = REQUEST; constructor (public payload: {request: AgotRequest }) {} }
export class SetCardKneeling implements Action { readonly type = SET_CARD_KNEELING; constructor (public payload: {kneeling: boolean; cardId: number }) {} }
export class SetCardPower implements Action { readonly type = SET_CARD_POWER; constructor (public payload: {cardId: number; power: number }) {} }
export class SetCardRevealed implements Action { readonly type = SET_CARD_REVEALED; constructor (public payload: {cardId: number; revealed: boolean }) {} }
export class SetFirstPlayer implements Action { readonly type = SET_FIRST_PLAYER; constructor (public payload: {player: string }) {} }
export class SetGameStarted implements Action { readonly type = SET_GAME_STARTED; constructor (public payload: {started: boolean }) {} }
export class SetGold implements Action { readonly type = SET_GOLD; constructor (public payload: {player: string; gold: number }) {} }
export class SetPhase implements Action { readonly type = SET_PHASE; constructor (public payload: {round: string; phase: string; step: string }) {} }

export type AgotAction = AddAttachment | AddCard | AddDuplicate | AddLog | EmptyDrawDeck | InitState | RemoveCard | RemoveAttachment |
RemoveDuplicate | Request | SetCardKneeling | SetCardPower | SetCardRevealed | SetFirstPlayer | SetGameStarted | SetGold | SetPhase;