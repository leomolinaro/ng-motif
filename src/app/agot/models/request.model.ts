import { RequestChoice } from './request-choice.model';

export interface AgotRequest {
  playerId: string;
  instruction: string,
  type: string,
  choices?: RequestChoice[],
  repeated: boolean
}

// export const SELECT_ACTION_TO_PERFORM = "selectActionToPerform";
// export const SELECT_REACTION_TO_PERFORM = "selectReactionToPerform";
// export const SELECT_INTERRUPT_TO_PERFORM = "selectInterruptToPerform";
// export const SELECT_CHARACTER_TO_KILL = "selectCharacterToKill";
// export const SELECT_CHARACTER_TO_DEFEND = "selectCharacterToDefend";
// export const SELECT_CHALLENGE_TO_INITIATE = "selectChallengeToInitiate";
// export const SELECT_CHARACTER_TO_ATTACK = "selectCharacterToAttack";
// export const SELECT_CHARACTER_TO_BYPASS = "selectCharacterToBypass";
// export const SELECT_DEFENDER = "selectDefender";
// export const SELECT_PLOT_TO_REVEAL = "selectPlotToReveal";
// export const SELECT_FIRST_PLAYER = "selectFirstPlayer";
// export const SELECT_CARD_TO_ATTACH = "selectCardToAttach";
// export const SELECT_CARD_TO_DISCARD = "selectCardToDiscard";
// export const CHOOSE_CARD = "chooseCard";
// export const CONTINUE = "continue";

// export class SelectActionToPerformRequest extends ARequest { readonly type = SELECT_ACTION_TO_PERFORM; }
// export class SelectReactionToPerformRequest extends ARequest { readonly type = SELECT_REACTION_TO_PERFORM; }

// export type AgotRequest = SelectActionToPerformRequest | SelectReactionToPerformRequest;