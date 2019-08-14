import { AddAttachmentData, AddDuplicateData, AddCardData, AddLogData, EmptyDrawDeckData, AAgotRequest, AgotReduxActionType, AgotReduxActionData, RemoveCardData, RemoveAttachmentData, RemoveDuplicateData, SetCardKneelingData, SetCardPowerData, SetCardRevealedData, SetFirstPlayerData, SetGoldData, SetPhaseData, SetGameStartedData } from './../../graphql-types';
import { AgotGame } from './../models/agot-game.model';
import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export const INIT_GAME = "INIT_GAME";
export const REQUEST = "REQUEST";

abstract class ChangeAction<P extends AgotReduxActionData> implements TypedAction<AgotReduxActionType> {
  readonly type: AgotReduxActionType;
  constructor (public payload: P) {}
} // ChangeAction

export class AddAttachment extends ChangeAction<AddAttachmentData> { readonly type = AgotReduxActionType.AddAttachment; }
export class AddCard extends ChangeAction<AddCardData> { readonly type = AgotReduxActionType.AddCard; }
export class AddDuplicate extends ChangeAction<AddDuplicateData> { readonly type = AgotReduxActionType.AddDuplicate; }
export class AddLog extends ChangeAction<AddLogData> { readonly type = AgotReduxActionType.AddLog; }
export class EmptyDrawDeck extends ChangeAction<EmptyDrawDeckData> { readonly type = AgotReduxActionType.EmptyDrawDeck; }
export class RemoveCard extends ChangeAction<RemoveCardData> { readonly type = AgotReduxActionType.RemoveCard; }
export class RemoveAttachment extends ChangeAction<RemoveAttachmentData> { readonly type = AgotReduxActionType.RemoveAttachment; }
export class RemoveDuplicate extends ChangeAction<RemoveDuplicateData> { readonly type = AgotReduxActionType.RemoveDuplicate; }
export class SetCardKneeling extends ChangeAction<SetCardKneelingData> { readonly type = AgotReduxActionType.SetCardKneeling; }
export class SetCardPower extends ChangeAction<SetCardPowerData> { readonly type = AgotReduxActionType.SetCardPower; }
export class SetCardRevealed extends ChangeAction<SetCardRevealedData> { readonly type = AgotReduxActionType.SetCardRevealed; }
export class SetFirstPlayer extends ChangeAction<SetFirstPlayerData> { readonly type = AgotReduxActionType.SetFirstPlayer; }
export class SetGameStarted extends ChangeAction<SetGameStartedData> { readonly type = AgotReduxActionType.SetGameStarted; }
export class SetGold extends ChangeAction<SetGoldData> { readonly type = AgotReduxActionType.SetGold; }
export class SetPhase extends ChangeAction<SetPhaseData> { readonly type = AgotReduxActionType.SetPhase; }

export class InitGame implements Action { readonly type = INIT_GAME; constructor (public payload: { game: AgotGame }) {} }
export class Request implements Action { readonly type = REQUEST; constructor (public payload: {request: AAgotRequest }) {} }

export type AgotAction = AddAttachment | AddCard | AddDuplicate | AddLog | EmptyDrawDeck | InitGame | RemoveCard | RemoveAttachment |
RemoveDuplicate | Request | SetCardKneeling | SetCardPower | SetCardRevealed | SetFirstPlayer | SetGameStarted | SetGold | SetPhase;