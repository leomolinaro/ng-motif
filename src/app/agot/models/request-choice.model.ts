export interface RequestChoice {
	requestType: string,
	choiceType: AgotChoiceType,
  cardId?: number,
  cardAction?: AgotChoiceCardAction,
  icon?: AngIcon,
  player: string
}

type AngIcon = "MILITARY" | "POWER" | "INTRIGUE";
type AgotChoiceType = "SELECT_CARD" | "SELECT_CARD_ACTION" | "SELECT_PLAYER" | "SELECT_ICON" | "CONTINUE" | "PASS";
type AgotChoiceCardAction = "MARSHALL" | "PLAY" | "ACTION" | "REACTION" | "INTERRUP";