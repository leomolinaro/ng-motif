import { BritRequest } from '../models/brit-request.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BritGame } from '../models/brit-game.model';
// import { Request } from '../actions/agot.actions';
// import { Card } from '../../agot/models/card.model';
// import { Area } from '../../agot/models/area.model';
// import { Player } from '../../agot/models/player.model';
// import { Context } from '../../agot/models/context.model';
// import { Game } from '../../agot/models/game.model';

import * as fromBrit from './brit.actions';
import * as fromUtil from '../../shared/reducer.util';

export interface BritState {
	game: BritGame,
	// context: Context,
	request?: BritRequest
}

export const INITIAL_STATE: BritState = {
	game: {
		playerMap: {},
		nationMap: {},
		nationIds: [],
		areaMap: {},
		areaIds: [],
		unitMap: {},
		battle: null,
		log: [],
		round: "",
		nationId: "",
		phase: "",
		started: false
	},
	// context: {
	// 	player: "",
	// 	opponent: ""
	// }
}

export function reducer(
  state = INITIAL_STATE,
  action: fromBrit.BritAction
): BritState {

  switch (action.type) {
		case fromBrit.ADD_LOG: {
      return { ...state,
        game: { ...state.game,
          log: fromUtil.pushed (action.payload.logRow, state.game.log)
        }
      }
		}
    case fromBrit.INIT_STATE: {
      return action.payload.state;
		}
		case fromBrit.REQUEST: {
			return { ...state, request: action.payload.request }
		}
		case fromBrit.SET_GAME_STARTED: {
			return { ...state, game: {
				...state.game,
				started: action.payload.started
			} }
		}
		case fromBrit.SET_PHASE: {
			return { ...state, game: {
				...state.game,
				round: action.payload.round,
				nationId: action.payload.nationId,
				phase: action.payload.phase,
			} }
		}
		case fromBrit.UPDATE_AREA: {
			return { ...state, game: { ...state.game, areaMap: { ...state.game.areaMap, [action.payload.area.id]: action.payload.area } } }
		}
		case fromBrit.UPDATE_BATTLE: {
			return { ...state, game: { ...state.game, battle: action.payload.battle } }
		}
		case fromBrit.UPDATE_NATION: {
			return { ...state, game: { ...state.game, nationMap: { ...state.game.nationMap, [action.payload.nation.id]: action.payload.nation } } }
		}
		case fromBrit.UPDATE_UNIT: {
			return { ...state, game: { ...state.game, unitMap: { ...state.game.unitMap, [action.payload.unit.id]: action.payload.unit } } }
		}
  }
  return state;
}

export const selectBrit = createFeatureSelector<BritState> ('brit');

export const selectNationIds = createSelector(selectBrit, state => state.game.nationIds);
export const selectAreaIds = createSelector(selectBrit, state => state.game.areaIds);
export const selectGameStarted = createSelector(selectBrit, state => state.game.started);
export const selectGameRound = createSelector(selectBrit, state => state.game.round);
export const selectGameNationId = createSelector(selectBrit, state => state.game.nationId);
export const selectGameNation = createSelector(selectBrit, state => state.game.nationMap[state.game.nationId]);
export const selectGameNationTurn = createSelector(selectGameNation, nation => nation.name);
export const selectGamePhase = createSelector(selectBrit, state => state.game.phase);
export const selectGameLog = createSelector(selectBrit, state => state.game.log);
export const selectBattle = createSelector(selectBrit, state => state.game.battle);
export const selectNationById = (id: string) => createSelector(selectBrit, state => state.game.nationMap[id]);
export const selectAreaById = (id: string) => createSelector(selectBrit, state => state.game.areaMap[id]);
export const selectUnitById = (id: string) => createSelector(selectBrit, state => state.game.unitMap[id]);
export const selectRequest = createSelector(selectBrit, state => state.request);

// export const selectContext = (state: AgotState) => state.context;