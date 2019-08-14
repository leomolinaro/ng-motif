import { GameLogRow } from './../../graphql-types';
import { Player } from './player.model';
import { Card } from './card.model';

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
}