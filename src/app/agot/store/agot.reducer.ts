import { AgotRequest } from './../models/request.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Card } from '../models/card.model';
import { Area } from '../models/area.model';
import { Player } from '../models/player.model';
import { AgotGame } from '../models/agot-game.model';

import * as fromAgot from './agot.actions';
import * as fromUtil from '../../shared/reducer.util';

export interface AgotState {
	game: AgotGame,
	userPlayerIds: string[],
	request?: AgotRequest
}

export const INITIAL_STATE: AgotState = {
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
	userPlayerIds: []
}

function updateGame (game: AgotGame, state: AgotState): AgotState {
  return { ...state, game: game }
} // updateGame

function updatePlayerMap (playerMap: { [username: string]: Player }, state: AgotState): AgotState {
  let game = state.game;
  return updateGame ({ ...game, playerMap: playerMap }, state);
} // updatePlayerMap

function updateCardMap (cardMap: { [id: number]: Card }, state: AgotState): AgotState {
  let game = state.game;
  return updateGame ({ ...game, cardMap: cardMap }, state);
} // updateCardMap

function updatePlayer (player: Player, state: AgotState): AgotState {
  let playerMap = state.game.playerMap;
  return updatePlayerMap ({ ...playerMap, [player.id]: player }, state);
} // updatePlayer

function updateCard (card: Card, state: AgotState): AgotState {
  let cardMap = state.game.cardMap;
  return updateCardMap ({ ...cardMap, [card.id]: card }, state);
} // updatePlayer

function getCard (cardId: number, state: AgotState): Card { return state.game.cardMap[cardId]; }

function getPlayer (playerId: string, state: AgotState): Player { return state.game.playerMap[playerId]; }

export function reducer (
  state = INITIAL_STATE,
  action: fromAgot.AgotAction
): AgotState {
  //console.log(action);
  //console.log(JSON.stringify(state));
  switch (action.type) {
    case fromAgot.INIT_STATE: {
      return action.payload.state;
    }
    case fromAgot.REMOVE_CARD: {
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
    case fromAgot.ADD_CARD: {
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
    case fromAgot.ADD_ATTACHMENT: {
      let oldCard: Card = getCard (action.payload.toCard, state);
      let newCard = { ...oldCard, attachmentIds: fromUtil.pushed (action.payload.cardId, oldCard.attachmentIds) };
      return updateCard (newCard, state);
    }
    case fromAgot.REMOVE_ATTACHMENT: {
      let oldCard: Card = getCard (action.payload.fromCard, state);
      let newCard = { ...oldCard, attachmentIds: fromUtil.removed (action.payload.cardId, oldCard.attachmentIds) };
      return updateCard (newCard, state);
    }
    case fromAgot.ADD_DUPLICATE: {
      let oldCard: Card = getCard (action.payload.toCard, state);
      let newCard = { ...oldCard, duplicateIds: fromUtil.pushed (action.payload.cardId, oldCard.duplicateIds) };
      return updateCard (newCard, state);
    }
    case fromAgot.REMOVE_DUPLICATE: {
      let oldCard: Card = getCard (action.payload.fromCard, state);
      let newCard = { ...oldCard, duplicateIds: fromUtil.removed (action.payload.cardId, oldCard.duplicateIds) };
      return updateCard (newCard, state);
    }    
    case fromAgot.SET_CARD_KNEELING: {
      return updateCard ({ ...getCard (action.payload.cardId, state), kneeling: action.payload.kneeling }, state);
    }
    case fromAgot.SET_CARD_POWER: {
      return updateCard ({ ...getCard (action.payload.cardId, state), power: action.payload.power }, state);
    }    
    case fromAgot.SET_CARD_REVEALED: {
      return updateCard ({ ...getCard (action.payload.cardId, state), revealed: action.payload.revealed }, state);
    }    
    case fromAgot.EMPTY_DRAW_DECK: {
      return updatePlayer ({ ...getPlayer (action.payload.player, state), drawDeckEmpty: true }, state);
    }
    case fromAgot.SET_PHASE: {
      return { ...state,
        game: { ...state.game,
          round: action.payload.round,
          phase: action.payload.phase,
          step: action.payload.step
        }
      }
    }    
    case fromAgot.REQUEST: {
      return { ...state, request: action.payload.request }
    }
    case fromAgot.SET_FIRST_PLAYER: {
      return { ...state,
        game: { ...state.game,
          firstPlayer: action.payload.player
        }
      }
    }
    case fromAgot.SET_GAME_STARTED: {
      return { ...state,
        game: { ...state.game,
          started: action.payload.started
        }
      }
    }
    case fromAgot.SET_GOLD: {
      return updatePlayer ({ ...getPlayer (action.payload.player, state), gold: action.payload.gold }, state)
    }    
    case fromAgot.ADD_LOG: {
      return { ...state,
        game: { ...state.game,
          log: fromUtil.pushed (action.payload.log, state.game.log)
        } // game
      } // return
    }
  }
  return state;
} // reducer

export const selectAgot = createFeatureSelector<AgotState> ('agot');

export const selectState = createSelector (selectAgot, state => state);
//export const selectContext = createSelector (selectAgot, state => state.context);
export const selectGameStarted = createSelector (selectAgot, state => state.game.started);
export const selectGamePhase = createSelector (selectAgot, state => state.game.phase);
export const selectGameRound = createSelector (selectAgot, state => state.game.round);
export const selectGameStep = createSelector (selectAgot, state => state.game.step);
export const selectGameLog = createSelector (selectAgot, state => state.game.log);
export const selectCardById = (id: number) => createSelector (selectAgot, state => state.game.cardMap[id]);
export const selectDuplicateIdsByCard = (cardId: number) => createSelector (selectCardById (cardId), card => card.duplicateIds);
export const selectPlayerByUsername = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username]);
export const selectPlayerIds = createSelector (selectAgot, state => state.game.playerIds);
//export const selectPlayer = createSelector (selectAgot, state => state.userPlayerIds[0]);
//export const selectOpponent = createSelector (selectAgot, state => state.userPlayerIds[1]);
export const selectFaction = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].factionId);
export const selectAgenda = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].agendaId);
export const selectHand = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].handIds);
export const selectCharacters = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].charactersIds);
export const selectLocations = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].locationsIds);
export const selectDiscardPile = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].discardPileIds);
export const selectDrawDeckEmpty = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].drawDeckEmpty);
export const selectPlotDeck = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].plotDeckIds);
export const selectUsedPlotPile = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].usedPlotPileIds);
export const selectRevealedPlot = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].revealedPlotId);
export const selectDeadPile = (username: string) => createSelector (selectAgot, state => state.game.playerMap[username].deadPileIds);
export const selectGold = (username: string) => createSelector (selectAgot, state => (state.game.playerMap[username] ? state.game.playerMap[username].gold : 0));

export const selectNewRequest = createSelector (selectAgot, state => state.request);