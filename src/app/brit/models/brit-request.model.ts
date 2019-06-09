import { BritUnit } from './brit-unit.model';
import { BritArea } from './brit-area.model';

abstract class ABritRequest<M> {
  instruction: string;
  type: string;
  passOption?: string;
  continueOption?: string;
  modelOptions?: M[];
} // ABritRequest

export const SELECT_AREA = "selectArea";
export const SELECT_UNIT = "selectUnit";
export const CONTINUE = "continue";

export class SelectAreaRequest extends ABritRequest<BritArea> { readonly type = SELECT_AREA; }
export class SelectUnitRequest extends ABritRequest<BritUnit> { readonly type = SELECT_UNIT; }
export class ContinueRequest extends ABritRequest<void> { readonly type = CONTINUE; }

export type BritRequest = SelectAreaRequest | SelectUnitRequest | ContinueRequest;