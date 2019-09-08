import { AgotGameEffects } from './agot-game.effects';
import { AgotHomeEffects } from './agot-home.effects';
import * as fromHome from './agot-home.reducer';
import * as fromGame from './agot-game.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  game: fromGame.State,
  home: fromHome.State
} // State

export const reducers: ActionReducerMap<State> = {
  game: fromGame.reducer,
  home: fromHome.reducer
} // reducers

export const effects = [AgotHomeEffects, AgotGameEffects];

export const featureKey = "agot";

export const getAgotState = createFeatureSelector<State>(featureKey);
export const getGameState = createSelector (getAgotState, (state: State) => state.game);
export const getHomeState = createSelector (getAgotState, (state: State) => state.home);

export const getHomeGames = createSelector (getHomeState, fromHome.getGames);
export const isHomeLoaded = createSelector (getHomeState, fromHome.isLoaded);

export const getGame = createSelector (getGameState, state => state.game);
export const getGameStarted = createSelector (getGame, game => game.started);
export const getGamePhase = createSelector (getGame, game => game.phase);
export const getGameRound = createSelector (getGame, game => game.round);
export const getGameStep = createSelector (getGame, game => game.step);
export const getGameLog = createSelector (getGame, game => game.log);
export const getCardMap = createSelector (getGame, game => game.cardMap);
// export const getCardById = (cardId: number) => createSelector (getCardMap, cardMap => cardMap[cardId]);
export const getCardsByIds = (cardIds: number[]) => createSelector (getCardMap, cardMap => cardIds ? cardIds.map(cardId => cardMap[cardId]) : []);
export const getPlayerById = (playerId: string) => createSelector (getGame, game => game.playerMap[playerId]);
export const getPlayerIds = createSelector (getGame, game => game.playerIds);
export const getFaction = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? cardMap[player.factionId]: null);
export const getFactionPower = (playerId: string) => createSelector (getFaction (playerId), (faction) => faction.power);
export const getAgenda = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? cardMap[player.agendaId]: null);
export const getRevealedPlot = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? cardMap[player.revealedPlotId]: null);
export const getHand = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? player.handIds.map(handId => cardMap[handId]) : []);
export const getCharacters = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? player.charactersIds.map(handId => cardMap[handId]) : []);
export const getLocations = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? player.locationsIds.map(handId => cardMap[handId]) : []);
export const getDiscardPile = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? player.discardPileIds.map(handId => cardMap[handId]) : []);
export const getPlotDeck = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? player.plotDeckIds.map(handId => cardMap[handId]) : []);
export const getUsedPlotPile = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? player.usedPlotPileIds.map(handId => cardMap[handId]) : []);
export const getDeadPile = (playerId: string) => createSelector (getPlayerById (playerId), getCardMap, (player, cardMap) => player ? player.deadPileIds.map(handId => cardMap[handId]) : []);
export const getDrawDeckEmpty = (playerId: string) => createSelector (getPlayerById (playerId), player => player ? player.drawDeckEmpty : false);
export const getGold = (playerId: string) => createSelector (getPlayerById (playerId), player => (player ? player.gold : 0));
export const getRequests = createSelector (getGameState, state => state.requests);
