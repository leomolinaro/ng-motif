import { AddAttachmentData, AddDuplicateData, AddCardData, AddLogData, EmptyDrawDeckData, AAgotRequest, AgotReduxActionType, AgotReduxActionData, RemoveCardData, RemoveAttachmentData, RemoveDuplicateData, SetCardKneelingData, SetCardPowerData, SetCardRevealedData, SetFirstPlayerData, SetGoldData, SetPhaseData, SetGameStartedData } from '../../graphql-types';
import { AgotGame } from './agot-game.reducer';
import { Action, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export const addAttachment = createAction (AgotReduxActionType.AddAttachment, props<{ payload: AddAttachmentData }> ());
export const addCard = createAction (AgotReduxActionType.AddCard, props<{ payload: AddCardData }> ());
export const addDuplicate = createAction (AgotReduxActionType.AddDuplicate, props<{ payload: AddDuplicateData }> ());
export const addLog = createAction (AgotReduxActionType.AddLog, props<{ payload: AddLogData }> ());
export const emptyDrawDeck = createAction (AgotReduxActionType.EmptyDrawDeck, props<{ payload: EmptyDrawDeckData }> ());
export const removeCard = createAction (AgotReduxActionType.RemoveCard, props<{ payload: RemoveCardData }> ());
export const removeAttachment = createAction (AgotReduxActionType.RemoveAttachment, props<{ payload: RemoveAttachmentData }> ());
export const removeDuplicate = createAction (AgotReduxActionType.RemoveDuplicate, props<{ payload: RemoveDuplicateData }> ());
export const setCardKneeling = createAction (AgotReduxActionType.SetCardKneeling, props<{ payload: SetCardKneelingData }> ());
export const setCardPower = createAction (AgotReduxActionType.SetCardPower, props<{ payload: SetCardPowerData }> ());
export const setCardRevealed = createAction (AgotReduxActionType.SetCardRevealed, props<{ payload: SetCardRevealedData }> ());
export const setFirstPlayer = createAction (AgotReduxActionType.SetFirstPlayer, props<{ payload: SetFirstPlayerData }> ());
export const setGameStarted = createAction (AgotReduxActionType.SetGameStarted, props<{ payload: SetGameStartedData }> ());
export const setGold = createAction (AgotReduxActionType.SetGold, props<{ payload: SetGoldData }> ());
export const setPhase = createAction (AgotReduxActionType.SetPhase, props<{ payload: SetPhaseData }> ());

// export const initGame = createAction ("[Agot Game Page] Game Init", props<{ game: AgotGame }> ());
// export const addRequests = createAction ("[Agot Game Page] Requests Get", props<{ requests: AAgotRequest[] }> ());

export const gameGet = createAction ("[Agot Game Page] Game Get", props<{ gameId: number }> ());
export const gameGetSuccess = createAction ("[Agot Game Page] Game Get Success", props<{ game: AgotGame }> ());
export const gameGetFailure = createAction ("[Agot Game Page] Game Get Failure", props<{ error: any }> ());

export const requestsGet = createAction ("[Agot Game Page] Requests Get", props<{ gameId: number }> ());
export const requestsGetSuccess = createAction ("[Agot Game Page] Requests Get Success", props<{ requests: AAgotRequest[] }> ());
export const requestsGetFailure = createAction ("[Agot Game Page] Requests Get Failure", props<{ error: any }> ());
export const requestRemove = createAction ("[Agot Game Page] Request Remove", props<{ request: AAgotRequest }> ());

export const requestsSubscription = createAction ("[Agot Game Page] Requests Subscription", props<{ gameId: number }> ());
export const changesSubscription = createAction ("[Agot Game Page] Changes Subscription", props<{ gameId: number }> ());