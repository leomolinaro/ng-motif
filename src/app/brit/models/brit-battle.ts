import { BritDie } from './brit-die';

export interface BritBattle {
  attNationId: string,
  attDice: BritDie[],
  defNationId: string,
  defDice: BritDie[],
  battleLandId: string
}