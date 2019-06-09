export class Area {
	static readonly FACTION = "FACTION";
	static readonly AGENDA = "AGENDA";
	static readonly HAND = "HAND";
	static readonly CHARACTERS = "CHARACTERS";
	static readonly LOCATIONS = "LOCATIONS";
	static readonly DISCARD_PILE = "DISCARD_PILE";
	static readonly DRAW_DECK = "DRAW_DECK";
	static readonly PLOT_DECK = "PLOT_DECK";
	static readonly USED_PLOT_PILE = "USED_PLOT_PILE";
	static readonly REVEALED_PLOT = "REVEALED_PLOT";
	static readonly DEAD_PILE = "DEAD_PILE";
} // Area

export interface IState {
	game: IGame,
	context: IContext,
	request?: IRequest
} // IState

export interface ICard {
	id: number;
	imageSource: string;
	power?: number;
	kneeling?: boolean;
	revealed?: boolean;
	attachments?: number[];
	duplicates?: number[];
} // ICard

export interface IPlayer {
	username: string,
	name: string,
	gold: number,
	faction: number,
	agenda?: number,
	hand: number[],
	characters: number[],
	locations: number[],
	discardPile: number[],
	drawDeck: { empty: boolean },
	plotDeck: number[],
	usedPlotPile: number[],
	revealedPlot?: number,
	deadPile: number[]
} // IPlayer

interface IGame {
	cardMap: { [id: number]: ICard },
	playerMap: { [username: string]: IPlayer },
	round: string,
	phase: string,
	step: string,
	players: string[],
	log: ILogRow[],
	firstPlayer: string
} // IGame

export interface ILogRow {
	message: string,
	type: string
} // ILogRow

interface IContext {
	player: string,
	opponent: string
} // IContext

export interface IRequest {
	title: string,
	options: IRequestOption[]
} // IRequest

export interface IRequestOption {
	key: string,
	label: string,
	card?: ICardAction,
} // IRequestOption

export interface ICardAction {
	cardId: number,
	action: string
} // ICardAction

export const INITIAL_STATE: IState = {
	game: {
		cardMap: {},
		playerMap: {},
		round: "",
		phase: "",
		step: "",
		players: [],
		log: [],
		firstPlayer: null
	}, // game
	context: {
		player: "",
		opponent: ""
	} // session
} // INITIAL_STATE

export interface IAction<D extends ActionData> {
	type: string;
	data?: D;
} // IAction

class ActionData {}

class AddAttachmentData extends ActionData { cardId: number; toCard: number }
class AddCardData extends ActionData { cardId: number; toPlayer: string; toArea: string; index: number }
class AddDuplicateData extends ActionData { cardId: number; toCard: number }
class AddLogData extends ActionData { log: ILogRow }
class EmptyDrawDeckData extends ActionData { player: string }
class InitStateData extends ActionData { state: IState }
class RemoveCardData extends ActionData { cardId: number; fromPlayer: string; fromArea: string }
class RemoveAttachmentData extends ActionData { cardId: number; fromCard: number }
class RemoveDuplicateData extends ActionData { cardId: number; fromCard: number }
class RequestData extends ActionData { request: IRequest }
class SetCardKneelingData extends ActionData { kneeling: boolean; cardId: number }
class SetCardPowerData extends ActionData { cardId: number; power: number }
class SetCardRevealedData extends ActionData { cardId: number; revealed: boolean }
class SetFirstPlayerData extends ActionData { player: string }
class SetGoldData extends ActionData { player: string; gold: number }
class SetPhaseData extends ActionData { round: string; phase: string; step: string }

export const ADD_ATTACHMENT = "ADD_ATTACHMENT";
export const ADD_CARD = "ADD_CARD";
export const ADD_DUPLICATE = "ADD_DUPLICATE";
export const ADD_LOG = "ADD_LOG";
export const EMPTY_DRAW_DECK = "EMPTY_DRAW_DECK";
export const INIT_STATE = "INIT_STATE";
export const REMOVE_ATTACHMENT = "REMOVE_ATTACHMENT";
export const REMOVE_CARD = "REMOVE_CARD";
export const REMOVE_DUPLICATE = "REMOVE_DUPLICATE";
export const REQUEST = "REQUEST";
export const SET_CARD_KNEELING = "SET_CARD_KNEELING";
export const SET_CARD_POWER = "SET_CARD_POWER";
export const SET_CARD_REVEALED = "SET_CARD_REVEALED";
export const SET_FIRST_PLAYER = "SET_FIRST_PLAYER";
export const SET_GOLD = "SET_GOLD";
export const SET_PHASE = "SET_PHASE";

export function rootReducer<D extends ActionData> (state: IState, action: IAction<any>): IState {
	let executer = new Executer (state);
  switch (action.type) {
    case ADD_ATTACHMENT: return executer.addAttachment (action.data);
    case ADD_CARD: return executer.addCard (action.data);
    case ADD_DUPLICATE: return executer.addDuplicate (action.data);
		case ADD_LOG: return executer.addLog (action.data);
		case EMPTY_DRAW_DECK: return executer.emptyDrawDeck (action.data);
    case INIT_STATE: return executer.initState (action.data);
    case REMOVE_ATTACHMENT: return executer.removeAttachment (action.data);
    case REMOVE_CARD: return executer.removeCard (action.data);
		case REMOVE_DUPLICATE: return executer.removeDuplicate (action.data);
		case REQUEST: return executer.request (action.data);
		case SET_CARD_KNEELING: return executer.setCardKneeling (action.data);
		case SET_CARD_POWER: return executer.setCardPower (action.data);
		case SET_CARD_REVEALED: return executer.setCardRevealed (action.data);
		case SET_FIRST_PLAYER: return executer.setFirstPlayer (action.data);
		case SET_GOLD: return executer.setGold (action.data);
		case SET_PHASE: return executer.setPhase (action.data);
		case "@@redux/INIT":
		case "@@INIT": return state;
    default: console.error (action); return state;
  } // switch
} // rootReducer

// export class Action {
//   static initState (data: InitStateData): IAction<InitStateData> { return { type: INIT_STATE, data: data } }
//   static removeCard (data: RemoveCardData): IAction<RemoveCardData> { return { type: REMOVE_CARD, data: data } }
//   static addCard (data: AddCardData): IAction<AddCardData> { return { type: ADD_CARD, data: data } }
//   static addAttachment (data: AddAttachmentData): IAction<AddAttachmentData> { return { type: ADD_ATTACHMENT, data: data } }
//   static addDuplicate (data: AddDuplicateData): IAction<AddDuplicateData> { return { type: ADD_DUPLICATE, data: data } }
//   static removeAttachment (data: RemoveAttachmentData): IAction<RemoveAttachmentData> { return { type: REMOVE_ATTACHMENT, data: data } }
//   static removeDuplicate (data: RemoveDuplicateData): IAction<RemoveDuplicateData> { return { type: REMOVE_DUPLICATE, data: data } }
//   static kneelCard (data: KneelCardData): IAction<KneelCardData> { return { type: KNEEL_CARD, data: data } }
//   static setPhase (data: SetPhaseData): IAction<SetPhaseData> { return { type: SET_PHASE, data: data } }
//   static emptyDrawDeck (data: EmptyDrawDeckData): IAction<EmptyDrawDeckData> { return { type: EMPTY_DRAW_DECK, data: data } }
//   static request (data: RequestData): IAction<RequestData> { return { type: REQUEST, data: data } }
//   static addLog (data: AddLogData): IAction<AddLogData> { return { type: ADD_LOG, data: data } }
//   static setFirstPlayer (data: SetFirstPlayerData): IAction<SetFirstPlayerData> { return { type: SET_FIRST_PLAYER, data: data } }
// } // Action

class Executer {

  constructor (private state: IState) {}

	static removed<T> (element: T, array: T[]): T[] {
		let index = array.indexOf (element);
		return <T[]> [ ...array.slice (0, index), ...array.slice (index + 1)];
	} // removed

	static pushed<T> (element: T, array: T[]): T[] {
		if (!array) { array = []; }
		return <T[]> [ ...array, element ];
	} // pushed
	
	static unshifted<T> (element: T, array: T[]): T[] {
		if (!array) { array = []; }
		return <T[]> [ element, ...array ];
	} // pushed

	private updateGame (game: IGame): IState {
		let state = this.state;
		return { ...state, game: game }
	} // updateGame

	private updatePlayerMap (playerMap: { [username: string]: IPlayer }): IState {
		let game = this.state.game;
		return this.updateGame ({ ...game, playerMap: playerMap });
	} // updatePlayerMap
	
	private updateCardMap (cardMap: { [id: number]: ICard }): IState {
		let game = this.state.game;
		return this.updateGame ({ ...game, cardMap: cardMap });
	} // updateCardMap
	
	private updatePlayer (player: IPlayer): IState {
		let playerMap = this.state.game.playerMap;
		return this.updatePlayerMap ({ ...playerMap, [player.username]: player });
	} // updatePlayer

	private updateCard (card: ICard): IState {
		let cardMap = this.state.game.cardMap;
		return this.updateCardMap ({ ...cardMap, [card.id]: card });
	} // updatePlayer

	private getCard (cardId: number): ICard { return this.state.game.cardMap[cardId]; }
	private getPlayer (username: string): IPlayer { return this.state.game.playerMap[username]; }

	initState (data: InitStateData): IState {
		return data.state;
	} // initGame

  removeCard (data: RemoveCardData): IState {
		let oldPlayer: IPlayer = this.getPlayer (data.fromPlayer);
		let newPlayer: IPlayer;
		switch (data.fromArea) {
			case Area.HAND: newPlayer = { ...oldPlayer, hand: Executer.removed (data.cardId, oldPlayer.hand) }; break;
			case Area.CHARACTERS: newPlayer = { ...oldPlayer, characters: Executer.removed (data.cardId, oldPlayer.characters) }; break;
			case Area.LOCATIONS: newPlayer = { ...oldPlayer, locations: Executer.removed (data.cardId, oldPlayer.locations) }; break;
			case Area.DISCARD_PILE: newPlayer = { ...oldPlayer, discardPile: Executer.removed (data.cardId, oldPlayer.discardPile) }; break;
			case Area.PLOT_DECK: newPlayer = { ...oldPlayer, plotDeck: Executer.removed (data.cardId, oldPlayer.plotDeck) }; break;
			case Area.USED_PLOT_PILE: newPlayer = { ...oldPlayer, usedPlotPile: Executer.removed (data.cardId, oldPlayer.usedPlotPile) }; break;
			case Area.DEAD_PILE: newPlayer = { ...oldPlayer, deadPile: Executer.removed (data.cardId, oldPlayer.deadPile) }; break;
			case Area.REVEALED_PLOT:
				if (oldPlayer.revealedPlot == data.cardId) {
					newPlayer = { ...oldPlayer, revealedPlot: null }; break;
				} // if
			default: console.error ("data", data); return this.state;
		} // switch - case
		return this.updatePlayer (newPlayer);
  } // removeCard

  addCard (data: AddCardData): IState {
		if (data.index != -1) { console.error ("addCard index non gestito"); return; }
		let oldPlayer: IPlayer = this.getPlayer (data.toPlayer);
		let newPlayer: IPlayer;
		switch (data.toArea) {
			case Area.HAND: newPlayer = { ...oldPlayer, hand: Executer.pushed (data.cardId, oldPlayer.hand) }; break;
			case Area.CHARACTERS: newPlayer = { ...oldPlayer, characters: Executer.pushed (data.cardId, oldPlayer.characters) }; break;
			case Area.LOCATIONS: newPlayer = { ...oldPlayer, locations: Executer.pushed (data.cardId, oldPlayer.locations) }; break;
			case Area.DISCARD_PILE: newPlayer = { ...oldPlayer, discardPile: Executer.pushed (data.cardId, oldPlayer.discardPile) }; break;
			case Area.PLOT_DECK: newPlayer = { ...oldPlayer, plotDeck: Executer.pushed (data.cardId, oldPlayer.plotDeck) }; break;
			case Area.USED_PLOT_PILE: newPlayer = { ...oldPlayer, usedPlotPile: Executer.pushed (data.cardId, oldPlayer.usedPlotPile) }; break;
			case Area.DEAD_PILE: newPlayer = { ...oldPlayer, deadPile: Executer.pushed (data.cardId, oldPlayer.deadPile) }; break;
			case Area.REVEALED_PLOT:
			if (!oldPlayer.revealedPlot) {
				newPlayer = { ...oldPlayer, revealedPlot: data.cardId }; break;
			} // if
			default: console.error ("data", data); return this.state;
		} // switch - case
		return this.updatePlayer (newPlayer);
	} // addCard

	addAttachment (data: AddAttachmentData): IState {
		let oldCard: ICard = this.getCard (data.toCard);
		let newCard = { ...oldCard, attachments: Executer.pushed (data.cardId, oldCard.attachments) };
		return this.updateCard (newCard);
	} // addAttachment
	
	removeAttachment (data: RemoveAttachmentData): IState {
		let oldCard: ICard = this.getCard (data.fromCard);
		let newCard = { ...oldCard, attachments: Executer.removed (data.cardId, oldCard.attachments) };
		return this.updateCard (newCard);
	} // removeAttachment

	addDuplicate (data: AddDuplicateData): IState {
		let oldCard: ICard = this.getCard (data.toCard);
		let newCard = { ...oldCard, duplicates: Executer.pushed (data.cardId, oldCard.duplicates) };
		return this.updateCard (newCard);
	} // addDuplicate
	
	removeDuplicate (data: RemoveDuplicateData): IState {
		let oldCard: ICard = this.getCard (data.fromCard);
		let newCard = { ...oldCard, duplicates: Executer.removed (data.cardId, oldCard.duplicates) };
		return this.updateCard (newCard);
	} // removeDuplicate

  setCardKneeling (data: SetCardKneelingData): IState {
		return this.updateCard ({ ...this.getCard (data.cardId), kneeling: data.kneeling });
	} // setCardKneeling
	
  setCardPower (data: SetCardPowerData): IState {
		return this.updateCard ({ ...this.getCard (data.cardId), power: data.power })
	} // setCardPower

  setCardRevealed (data: SetCardRevealedData): IState {
		return this.updateCard ({ ...this.getCard (data.cardId), revealed: data.revealed })
	} // setCardRevealed
	
	emptyDrawDeck (data: EmptyDrawDeckData): IState {
		return this.updatePlayer ({ ...this.getPlayer (data.player), drawDeck: { ...this.getPlayer (data.player).drawDeck, empty: true } })
	} // emptyDrawDeck

	setPhase (data: SetPhaseData): any {
		return { ...this.state,
			game: { ...this.state.game,
				round: data.round,
				phase: data.phase,
				step: data.step
			} // game
    } // return
	} // setRound
	
	request (data: RequestData): any {
		return { ...this.state,
			request: data.request
    } // return
	} // request

	setFirstPlayer (data: SetFirstPlayerData): any {
		return { ...this.state,
			game: { ...this.state.game,
				firstPlayer: data.player
			} // game
    } // return
	} // setFirstPlayer
	
	setGold (data: SetGoldData): any {
		return this.updatePlayer ({ ...this.getPlayer (data.player), gold: data.gold })
	} // setFirstPlayer

	addLog (data: AddLogData): any {
		return { ...this.state,
			game: { ...this.state.game,
				log: Executer.pushed (data.log, this.state.game.log)
			} // game
    } // return
	} // addLog

} // Executer