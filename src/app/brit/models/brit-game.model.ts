import { BritBattle } from './brit-battle';
import { BritUnit } from './brit-unit.model';
import { BritArea } from './brit-area.model';
import { BritNation } from './brit-nation.model';
import { BritPlayer } from './brit-player.model';
import { LogRow } from '../../shared/models/log-row.model';

export interface BritGame {
	playerMap: { [id: string]: BritPlayer },
	nationMap: { [id: string]: BritNation },
	nationIds: string[],
	areaMap: { [id: string]: BritArea },
	areaIds: string[],
	unitMap: { [id: string]: BritUnit },
	battle: BritBattle,
	log: LogRow[],
  round: string,
  nationId: string,
	phase: string,
	started: boolean
} // BritGame