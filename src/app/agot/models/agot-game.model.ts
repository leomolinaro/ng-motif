import { Player } from './player.model';
import { LogRow } from '../../shared/models/log-row.model';
import { Card } from './card.model';

export interface AgotGame {
	cardMap: { [id: number]: Card },
  playerMap: { [id: string]: Player },
  playerIds: string[],
	round: string,
	phase: string,
	step: string,
	log: LogRow[],
  firstPlayer: string,
  started: boolean
}