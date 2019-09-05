import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './agot-home.actions';
import * as fromUtil from '../../shared/reducer.util';

export interface AgotGame {
  id: number;
  name: string;
  allPlayers: {
    id: string;
    user: {
      username: string;
    }
  }[]
} // AgotGame

export interface State {
  games: AgotGame[],
  loaded: boolean,
  loading: boolean
} // State

export const initialState: State = {
  games: [],
  loaded: false,
  loading: false
} // initialState

const agotHomeReducer = createReducer (
  initialState,
  on (actions.gamesGet, (state) => ({ ...state, loading: true, loaded: false })),
  on (actions.gamesGetFailure, (state) => ({ ...state, loading: false, loaded: false })),
  on (actions.gamesGetSuccess, (state, { games }) => ({ ...state, games: games, loading: false, loaded: true })),
  on (actions.gameNew, (state) => ({ ...state, loading: true, loaded: false })),
  on (actions.gameNewFailure, (state) => ({ ...state, loading: false, loaded: false })),
  on (actions.gameNewSuccess, (state, { game }) => ({ ...state, loading: false, loaded: true, games: fromUtil.pushed (game, state.games) })),
  on (actions.gameRemoveSuccess, (state, { gameId }) => ({ ...state, games: fromUtil.removedIf (g => g.id == gameId, state.games) }))
)

export function reducer (state: State | undefined, action: Action) {
  return agotHomeReducer (state, action);
}

export const getGames = (state: State) => state.games;
export const isLoaded = (state: State) => state.loaded;