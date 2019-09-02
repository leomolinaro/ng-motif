import { createReducer, on, Action } from '@ngrx/store';
import { GameLogRow } from './../../graphql-types';
import { AAgotRequest } from '../../graphql-types';

// import * as fromAgot from './agot-game.actions';
import * as fromUtil from '../../shared/reducer.util';
import * as actions from './agot-game.actions';
import { state } from '@angular/animations';

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
  gameLoading: boolean,
  gameLoaded: boolean,
  requests: AAgotRequest[],
  requestsLoading: boolean,
  requestsLoaded: boolean
} // State

const initialState: State = {
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
  gameLoaded: false,
  gameLoading: false,
  requests: [],
  requestsLoaded: false,
  requestsLoading: false
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

export const agotGameReducer = createReducer (
  initialState,
  on (actions.gameGet, (state) => ({ ...state, gameLoaded: false, gameLoading: true })),
  on (actions.gameGetSuccess, (state, payload) => ({ ...state,
    game: payload.game, gameLoaded: true, gameLoading: false
  })),
  on (actions.gameGetFailure, (state, payload) => ({ ...state,
    game: initialState.game, gameLoaded: false, gameLoading: false
  })),
  on (actions.requestsGet, (state) => ({ ...state,
    requestsLoaded: false, requestsLoading: true
  })),
  on (actions.requestsGetSuccess, (state, payload) => ({ ...state,
    requests: fromUtil.pushedMany (payload.requests, state.requests), requestsLoaded: true, requestsLoading: false
  })),
  on (actions.requestsGetFailure, (state, payload) => ({ ...state,
    requestsLoaded: false, requestsLoading: false
  })),
  on (actions.requestRemove, (state, payload) => ({ ...state,
    requests: fromUtil.removed (payload.request, state.requests)
  })),
  on (actions.removeCard, (state, payload) => {
    let oldPlayer: Player = getPlayer (payload.payload.fromPlayer, state);
    let newPlayer: Player;
    switch (payload.payload.fromArea) {
      case Area.HAND: newPlayer = { ...oldPlayer, handIds: fromUtil.removed (payload.payload.cardId, oldPlayer.handIds) }; break;
      case Area.CHARACTERS: newPlayer = { ...oldPlayer, charactersIds: fromUtil.removed (payload.payload.cardId, oldPlayer.charactersIds) }; break;
      case Area.LOCATIONS: newPlayer = { ...oldPlayer, locationsIds: fromUtil.removed (payload.payload.cardId, oldPlayer.locationsIds) }; break;
      case Area.DISCARD_PILE: newPlayer = { ...oldPlayer, discardPileIds: fromUtil.removed (payload.payload.cardId, oldPlayer.discardPileIds) }; break;
      case Area.PLOT_DECK: newPlayer = { ...oldPlayer, plotDeckIds: fromUtil.removed (payload.payload.cardId, oldPlayer.plotDeckIds) }; break;
      case Area.USED_PLOT_PILE: newPlayer = { ...oldPlayer, usedPlotPileIds: fromUtil.removed (payload.payload.cardId, oldPlayer.usedPlotPileIds) }; break;
      case Area.DEAD_PILE: newPlayer = { ...oldPlayer, deadPileIds: fromUtil.removed (payload.payload.cardId, oldPlayer.deadPileIds) }; break;
      case Area.REVEALED_PLOT:
        if (oldPlayer.revealedPlotId == payload.payload.cardId) {
          newPlayer = { ...oldPlayer, revealedPlotId: null }; break;
        } // if
      default: console.error ("payload", payload); return state;
    } // switch - case
    return updatePlayer (newPlayer, state);
  }),
  on (actions.addCard, (state, payload) => {
    if (payload.payload.index != -1) { console.error ("addCard index non gestito"); return; }
    let oldPlayer: Player = getPlayer (payload.payload.toPlayer, state);
    let newPlayer: Player;
    switch (payload.payload.toArea) {
      case Area.HAND: newPlayer = { ...oldPlayer, handIds: fromUtil.pushed (payload.payload.cardId, oldPlayer.handIds) }; break;
      case Area.CHARACTERS: newPlayer = { ...oldPlayer, charactersIds: fromUtil.pushed (payload.payload.cardId, oldPlayer.charactersIds) }; break;
      case Area.LOCATIONS: newPlayer = { ...oldPlayer, locationsIds: fromUtil.pushed (payload.payload.cardId, oldPlayer.locationsIds) }; break;
      case Area.DISCARD_PILE: newPlayer = { ...oldPlayer, discardPileIds: fromUtil.pushed (payload.payload.cardId, oldPlayer.discardPileIds) }; break;
      case Area.PLOT_DECK: newPlayer = { ...oldPlayer, plotDeckIds: fromUtil.pushed (payload.payload.cardId, oldPlayer.plotDeckIds) }; break;
      case Area.USED_PLOT_PILE: newPlayer = { ...oldPlayer, usedPlotPileIds: fromUtil.pushed (payload.payload.cardId, oldPlayer.usedPlotPileIds) }; break;
      case Area.DEAD_PILE: newPlayer = { ...oldPlayer, deadPileIds: fromUtil.pushed (payload.payload.cardId, oldPlayer.deadPileIds) }; break;
      case Area.REVEALED_PLOT:
      if (!oldPlayer.revealedPlotId) {
        newPlayer = { ...oldPlayer, revealedPlotId: payload.payload.cardId }; break;
      } // if
      default: console.error ("payload", payload); return state;
    } // switch - case
    return updatePlayer (newPlayer, state);
  }),
  on (actions.addAttachment, (state, payload) => {
    let oldCard: Card = getCard (payload.payload.toCard, state);
    let newCard = { ...oldCard, attachmentIds: fromUtil.pushed (payload.payload.cardId, oldCard.attachmentIds) };
    return updateCard (newCard, state);
  }),
  on (actions.removeAttachment, (state, payload) => {
    let oldCard: Card = getCard (payload.payload.fromCard, state);
    let newCard = { ...oldCard, attachmentIds: fromUtil.removed (payload.payload.cardId, oldCard.attachmentIds) };
    return updateCard (newCard, state);
  }),
  on (actions.addDuplicate, (state, payload) => {
    let oldCard: Card = getCard (payload.payload.toCard, state);
    let newCard = { ...oldCard, duplicateIds: fromUtil.pushed (payload.payload.cardId, oldCard.duplicateIds) };
    return updateCard (newCard, state);
  }),
  on (actions.removeDuplicate, (state, payload) => {
    let oldCard: Card = getCard (payload.payload.fromCard, state);
    let newCard = { ...oldCard, duplicateIds: fromUtil.removed (payload.payload.cardId, oldCard.duplicateIds) };
    return updateCard (newCard, state);
  }),
  on (actions.setCardKneeling, (state, payload) => {
    return updateCard ({ ...getCard (payload.payload.cardId, state), kneeling: payload.payload.kneeling }, state);
  }),
  on (actions.setCardPower, (state, payload) => {
    return updateCard ({ ...getCard (payload.payload.cardId, state), power: payload.payload.power }, state);
  }),
  on (actions.setCardRevealed, (state, payload) => {
    return updateCard ({ ...getCard (payload.payload.cardId, state), revealed: payload.payload.revealed }, state);
  }),
  on (actions.emptyDrawDeck, (state, payload) => {
    return updatePlayer ({ ...getPlayer (payload.payload.player, state), drawDeckEmpty: true }, state);
  }),
  on (actions.setPhase, (state, payload) => {
    return { ...state,
      game: { ...state.game,
        round: payload.payload.round,
        phase: payload.payload.phase,
        step: payload.payload.step
      }
    }
  }),
  on (actions.setFirstPlayer, (state, payload) => {
    return { ...state,
      game: { ...state.game,
        firstPlayer: payload.payload.player
      }
    }
  }),
  on (actions.setGameStarted, (state, payload) => {
    return { ...state,
      game: { ...state.game,
        started: payload.payload.started
      }
    }
  }),
  on (actions.setGold, (state, payload) => {
    return updatePlayer ({ ...getPlayer (payload.payload.player, state), gold: payload.payload.gold }, state)
  }),
  on (actions.addLog, (state, payload) => {
    return { ...state,
      game: { ...state.game,
        log: fromUtil.pushed (payload.payload.log, state.game.log)
      } // game
    } // return
  })
);

export function reducer (state: State | undefined, action: Action) {
  return agotGameReducer (state, action);
}

// export function reducer (
//   state = INITIAL_STATE,
//   action: fromAgot.AgotAction
// ): State {
//   // console.log(action);
//   //console.log(JSON.stringify(state));
//   switch (action.type) {
//     case fromAgot.INIT_GAME: {
//       return { ... state,
//         game: action.payload.game
//       }
//     }
//     case AgotReduxActionType.RemoveCard: {
//       let oldPlayer: Player = getPlayer (action.payload.fromPlayer, state);
//       let newPlayer: Player;
//       switch (action.payload.fromArea) {
//         case Area.HAND: newPlayer = { ...oldPlayer, handIds: fromUtil.removed (action.payload.cardId, oldPlayer.handIds) }; break;
//         case Area.CHARACTERS: newPlayer = { ...oldPlayer, charactersIds: fromUtil.removed (action.payload.cardId, oldPlayer.charactersIds) }; break;
//         case Area.LOCATIONS: newPlayer = { ...oldPlayer, locationsIds: fromUtil.removed (action.payload.cardId, oldPlayer.locationsIds) }; break;
//         case Area.DISCARD_PILE: newPlayer = { ...oldPlayer, discardPileIds: fromUtil.removed (action.payload.cardId, oldPlayer.discardPileIds) }; break;
//         case Area.PLOT_DECK: newPlayer = { ...oldPlayer, plotDeckIds: fromUtil.removed (action.payload.cardId, oldPlayer.plotDeckIds) }; break;
//         case Area.USED_PLOT_PILE: newPlayer = { ...oldPlayer, usedPlotPileIds: fromUtil.removed (action.payload.cardId, oldPlayer.usedPlotPileIds) }; break;
//         case Area.DEAD_PILE: newPlayer = { ...oldPlayer, deadPileIds: fromUtil.removed (action.payload.cardId, oldPlayer.deadPileIds) }; break;
//         case Area.REVEALED_PLOT:
//           if (oldPlayer.revealedPlotId == action.payload.cardId) {
//             newPlayer = { ...oldPlayer, revealedPlotId: null }; break;
//           } // if
//         default: console.error ("action.payload", action.payload); return state;
//       } // switch - case
//       return updatePlayer (newPlayer, state);
//     }
//     case AgotReduxActionType.AddCard: {
//       if (action.payload.index != -1) { console.error ("addCard index non gestito"); return; }
//       let oldPlayer: Player = getPlayer (action.payload.toPlayer, state);
//       let newPlayer: Player;
//       switch (action.payload.toArea) {
//         case Area.HAND: newPlayer = { ...oldPlayer, handIds: fromUtil.pushed (action.payload.cardId, oldPlayer.handIds) }; break;
//         case Area.CHARACTERS: newPlayer = { ...oldPlayer, charactersIds: fromUtil.pushed (action.payload.cardId, oldPlayer.charactersIds) }; break;
//         case Area.LOCATIONS: newPlayer = { ...oldPlayer, locationsIds: fromUtil.pushed (action.payload.cardId, oldPlayer.locationsIds) }; break;
//         case Area.DISCARD_PILE: newPlayer = { ...oldPlayer, discardPileIds: fromUtil.pushed (action.payload.cardId, oldPlayer.discardPileIds) }; break;
//         case Area.PLOT_DECK: newPlayer = { ...oldPlayer, plotDeckIds: fromUtil.pushed (action.payload.cardId, oldPlayer.plotDeckIds) }; break;
//         case Area.USED_PLOT_PILE: newPlayer = { ...oldPlayer, usedPlotPileIds: fromUtil.pushed (action.payload.cardId, oldPlayer.usedPlotPileIds) }; break;
//         case Area.DEAD_PILE: newPlayer = { ...oldPlayer, deadPileIds: fromUtil.pushed (action.payload.cardId, oldPlayer.deadPileIds) }; break;
//         case Area.REVEALED_PLOT:
//         if (!oldPlayer.revealedPlotId) {
//           newPlayer = { ...oldPlayer, revealedPlotId: action.payload.cardId }; break;
//         } // if
//         default: console.error ("action.payload", action.payload); return state;
//       } // switch - case
//       return updatePlayer (newPlayer, state);
//     }
//     case AgotReduxActionType.AddAttachment: {
//       let oldCard: Card = getCard (action.payload.toCard, state);
//       let newCard = { ...oldCard, attachmentIds: fromUtil.pushed (action.payload.cardId, oldCard.attachmentIds) };
//       return updateCard (newCard, state);
//     }
//     case AgotReduxActionType.RemoveAttachment: {
//       let oldCard: Card = getCard (action.payload.fromCard, state);
//       let newCard = { ...oldCard, attachmentIds: fromUtil.removed (action.payload.cardId, oldCard.attachmentIds) };
//       return updateCard (newCard, state);
//     }
//     case AgotReduxActionType.AddDuplicate: {
//       let oldCard: Card = getCard (action.payload.toCard, state);
//       let newCard = { ...oldCard, duplicateIds: fromUtil.pushed (action.payload.cardId, oldCard.duplicateIds) };
//       return updateCard (newCard, state);
//     }
//     case AgotReduxActionType.RemoveDuplicate: {
//       let oldCard: Card = getCard (action.payload.fromCard, state);
//       let newCard = { ...oldCard, duplicateIds: fromUtil.removed (action.payload.cardId, oldCard.duplicateIds) };
//       return updateCard (newCard, state);
//     }    
//     case AgotReduxActionType.SetCardKneeling: {
//       return updateCard ({ ...getCard (action.payload.cardId, state), kneeling: action.payload.kneeling }, state);
//     }
//     case AgotReduxActionType.SetCardPower: {
//       return updateCard ({ ...getCard (action.payload.cardId, state), power: action.payload.power }, state);
//     }    
//     case AgotReduxActionType.SetCardRevealed: {
//       return updateCard ({ ...getCard (action.payload.cardId, state), revealed: action.payload.revealed }, state);
//     }    
//     case AgotReduxActionType.EmptyDrawDeck: {
//       return updatePlayer ({ ...getPlayer (action.payload.player, state), drawDeckEmpty: true }, state);
//     }
//     case AgotReduxActionType.SetPhase: {
//       return { ...state,
//         game: { ...state.game,
//           round: action.payload.round,
//           phase: action.payload.phase,
//           step: action.payload.step
//         }
//       }
//     }    
//     case fromAgot.ADD_REQUESTS: {
//       return { ...state,
//         requests: fromUtil.pushedMany (action.payload.requests, state.requests)
//       }
//     }
//     case fromAgot.REMOVE_REQUEST: {
//       return { ...state,
//         requests: fromUtil.removed (action.payload.request, state.requests)
//       }
//     }
//     case AgotReduxActionType.SetFirstPlayer: {
//       return { ...state,
//         game: { ...state.game,
//           firstPlayer: action.payload.player
//         }
//       }
//     }
//     case AgotReduxActionType.SetGameStarted: {
//       return { ...state,
//         game: { ...state.game,
//           started: action.payload.started
//         }
//       }
//     }
//     case AgotReduxActionType.SetGold: {
//       return updatePlayer ({ ...getPlayer (action.payload.player, state), gold: action.payload.gold }, state)
//     }    
//     case AgotReduxActionType.AddLog: {
//       return { ...state,
//         game: { ...state.game,
//           log: fromUtil.pushed (action.payload.log, state.game.log)
//         } // game
//       } // return
//     }
//   }
//   return state;
// } // reducer
