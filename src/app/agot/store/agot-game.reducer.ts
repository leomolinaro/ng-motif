import { GameLogRow } from './../../graphql-types';
import { AAgotRequest, AgotReduxActionType } from '../../graphql-types';

import * as fromAgot from './agot-game.actions';
import * as fromUtil from '../../shared/reducer.util';

export interface Player {
	id: string,
	name: string,
	gold: number,
	factionId: number,
	agendaId?: number,
	handIds: number[],
	charactersIds: number[],
	locationsIds: number[],
	discardPileIds: number[],
	drawDeckEmpty: boolean,
	plotDeckIds: number[],
	usedPlotPileIds: number[],
	revealedPlotId?: number,
	deadPileIds: number[]
} // Player

export interface Card {
	id: number;
	imageSource?: string;
	power?: number;
	kneeling?: boolean;
	revealed?: boolean;
	attachmentIds?: number[];
	duplicateIds?: number[];
} // Card

export class Area {
	static readonly FACTION = "FACTION";
	static readonly AGENDA = "AGENDA";
	static readonly HAND = "HAND";
	static readonly CHARACTERS = "CHARACTERS";
	static readonly LOCATIONS = "LOCATIONS";
	static readonly DISCARD_PILE = "DISCARD_PILE";
	static readonly DRAW_DECK = "DRAW_DECK";
	static readonly PLOT_DECK = "PLOT_DECK";
	static readonly USED_PLOT_PILE = "USED_PLOT_PILE";
	static readonly REVEALED_PLOT = "REVEALED_PLOT";
	static readonly DEAD_PILE = "DEAD_PILE";
} // Area

export interface AgotGame {
	cardMap: { [id: number]: Card },
  playerMap: { [id: string]: Player },
  playerIds: string[],
	round: string,
	phase: string,
	step: string,
	log: GameLogRow[],
  firstPlayer: string,
  started: boolean
} // AgotGame

export interface State {
	game: AgotGame,
	requests: AAgotRequest[]
} // State

export const INITIAL_STATE: State = {
	game: {
		cardMap: {},
    playerMap: {},
    playerIds: [],
		round: "",
		phase: "",
		step: "",
		log: [],
    firstPlayer: null,
    started: false
  },
  requests: []
} // INITIAL_STATE

function updateGame (game: AgotGame, state: State): State {
  return { ...state, game: game }
} // updateGame

function updatePlayerMap (playerMap: { [username: string]: Player }, state: State): State {
  let game = state.game;
  return updateGame ({ ...game, playerMap: playerMap }, state);
} // updatePlayerMap

function updateCardMap (cardMap: { [id: number]: Card }, state: State): State {
  let game = state.game;
  return updateGame ({ ...game, cardMap: cardMap }, state);
} // updateCardMap

function updatePlayer (player: Player, state: State): State {
  let playerMap = state.game.playerMap;
  return updatePlayerMap ({ ...playerMap, [player.id]: player }, state);
} // updatePlayer

function updateCard (card: Card, state: State): State {
  let cardMap = state.game.cardMap;
  return updateCardMap ({ ...cardMap, [card.id]: card }, state);
} // updatePlayer

function getCard (cardId: number, state: State): Card { return state.game.cardMap[cardId]; }

function getPlayer (playerId: string, state: State): Player { return state.game.playerMap[playerId]; }

export function reducer (
  state = INITIAL_STATE,
  action: fromAgot.AgotAction
): State {
  // console.log(action);
  //console.log(JSON.stringify(state));
  switch (action.type) {
    case fromAgot.INIT_GAME: {
      return { ... state,
        game: action.payload.game
      }
    }
    case AgotReduxActionType.RemoveCard: {
      let oldPlayer: Player = getPlayer (action.payload.fromPlayer, state);
      let newPlayer: Player;
      switch (action.payload.fromArea) {
        case Area.HAND: newPlayer = { ...oldPlayer, handIds: fromUtil.removed (action.payload.cardId, oldPlayer.handIds) }; break;
        case Area.CHARACTERS: newPlayer = { ...oldPlayer, charactersIds: fromUtil.removed (action.payload.cardId, oldPlayer.charactersIds) }; break;
        case Area.LOCATIONS: newPlayer = { ...oldPlayer, locationsIds: fromUtil.removed (action.payload.cardId, oldPlayer.locationsIds) }; break;
        case Area.DISCARD_PILE: newPlayer = { ...oldPlayer, discardPileIds: fromUtil.removed (action.payload.cardId, oldPlayer.discardPileIds) }; break;
        case Area.PLOT_DECK: newPlayer = { ...oldPlayer, plotDeckIds: fromUtil.removed (action.payload.cardId, oldPlayer.plotDeckIds) }; break;
        case Area.USED_PLOT_PILE: newPlayer = { ...oldPlayer, usedPlotPileIds: fromUtil.removed (action.payload.cardId, oldPlayer.usedPlotPileIds) }; break;
        case Area.DEAD_PILE: newPlayer = { ...oldPlayer, deadPileIds: fromUtil.removed (action.payload.cardId, oldPlayer.deadPileIds) }; break;
        case Area.REVEALED_PLOT:
          if (oldPlayer.revealedPlotId == action.payload.cardId) {
            newPlayer = { ...oldPlayer, revealedPlotId: null }; break;
          } // if
        default: console.error ("action.payload", action.payload); return state;
      } // switch - case
      return updatePlayer (newPlayer, state);
    }
    case AgotReduxActionType.AddCard: {
      if (action.payload.index != -1) { console.error ("addCard index non gestito"); return; }
      let oldPlayer: Player = getPlayer (action.payload.toPlayer, state);
      let newPlayer: Player;
      switch (action.payload.toArea) {
        case Area.HAND: newPlayer = { ...oldPlayer, handIds: fromUtil.pushed (action.payload.cardId, oldPlayer.handIds) }; break;
        case Area.CHARACTERS: newPlayer = { ...oldPlayer, charactersIds: fromUtil.pushed (action.payload.cardId, oldPlayer.charactersIds) }; break;
        case Area.LOCATIONS: newPlayer = { ...oldPlayer, locationsIds: fromUtil.pushed (action.payload.cardId, oldPlayer.locationsIds) }; break;
        case Area.DISCARD_PILE: newPlayer = { ...oldPlayer, discardPileIds: fromUtil.pushed (action.payload.cardId, oldPlayer.discardPileIds) }; break;
        case Area.PLOT_DECK: newPlayer = { ...oldPlayer, plotDeckIds: fromUtil.pushed (action.payload.cardId, oldPlayer.plotDeckIds) }; break;
        case Area.USED_PLOT_PILE: newPlayer = { ...oldPlayer, usedPlotPileIds: fromUtil.pushed (action.payload.cardId, oldPlayer.usedPlotPileIds) }; break;
        case Area.DEAD_PILE: newPlayer = { ...oldPlayer, deadPileIds: fromUtil.pushed (action.payload.cardId, oldPlayer.deadPileIds) }; break;
        case Area.REVEALED_PLOT:
        if (!oldPlayer.revealedPlotId) {
          newPlayer = { ...oldPlayer, revealedPlotId: action.payload.cardId }; break;
        } // if
        default: console.error ("action.payload", action.payload); return state;
      } // switch - case
      return updatePlayer (newPlayer, state);
    }
    case AgotReduxActionType.AddAttachment: {
      let oldCard: Card = getCard (action.payload.toCard, state);
      let newCard = { ...oldCard, attachmentIds: fromUtil.pushed (action.payload.cardId, oldCard.attachmentIds) };
      return updateCard (newCard, state);
    }
    case AgotReduxActionType.RemoveAttachment: {
      let oldCard: Card = getCard (action.payload.fromCard, state);
      let newCard = { ...oldCard, attachmentIds: fromUtil.removed (action.payload.cardId, oldCard.attachmentIds) };
      return updateCard (newCard, state);
    }
    case AgotReduxActionType.AddDuplicate: {
      let oldCard: Card = getCard (action.payload.toCard, state);
      let newCard = { ...oldCard, duplicateIds: fromUtil.pushed (action.payload.cardId, oldCard.duplicateIds) };
      return updateCard (newCard, state);
    }
    case AgotReduxActionType.RemoveDuplicate: {
      let oldCard: Card = getCard (action.payload.fromCard, state);
      let newCard = { ...oldCard, duplicateIds: fromUtil.removed (action.payload.cardId, oldCard.duplicateIds) };
      return updateCard (newCard, state);
    }    
    case AgotReduxActionType.SetCardKneeling: {
      return updateCard ({ ...getCard (action.payload.cardId, state), kneeling: action.payload.kneeling }, state);
    }
    case AgotReduxActionType.SetCardPower: {
      return updateCard ({ ...getCard (action.payload.cardId, state), power: action.payload.power }, state);
    }    
    case AgotReduxActionType.SetCardRevealed: {
      return updateCard ({ ...getCard (action.payload.cardId, state), revealed: action.payload.revealed }, state);
    }    
    case AgotReduxActionType.EmptyDrawDeck: {
      return updatePlayer ({ ...getPlayer (action.payload.player, state), drawDeckEmpty: true }, state);
    }
    case AgotReduxActionType.SetPhase: {
      return { ...state,
        game: { ...state.game,
          round: action.payload.round,
          phase: action.payload.phase,
          step: action.payload.step
        }
      }
    }    
    case fromAgot.ADD_REQUESTS: {
      return { ...state,
        requests: fromUtil.pushedMany (action.payload.requests, state.requests)
      }
    }
    case fromAgot.REMOVE_REQUEST: {
      return { ...state,
        requests: fromUtil.removed (action.payload.request, state.requests)
      }
    }
    case AgotReduxActionType.SetFirstPlayer: {
      return { ...state,
        game: { ...state.game,
          firstPlayer: action.payload.player
        }
      }
    }
    case AgotReduxActionType.SetGameStarted: {
      return { ...state,
        game: { ...state.game,
          started: action.payload.started
        }
      }
    }
    case AgotReduxActionType.SetGold: {
      return updatePlayer ({ ...getPlayer (action.payload.player, state), gold: action.payload.gold }, state)
    }    
    case AgotReduxActionType.AddLog: {
      return { ...state,
        game: { ...state.game,
          log: fromUtil.pushed (action.payload.log, state.game.log)
        } // game
      } // return
    }
  }
  return state;
} // reducer
