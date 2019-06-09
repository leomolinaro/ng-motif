export interface Player {
	id: string,
	name: string,
	gold: number,
	factionId: number,
	agendaId?: number,
	handIds: number[],
	charactersIds: number[],
	locationsIds: number[],
	discardPileIds: number[],
	drawDeckEmpty: boolean,
	plotDeckIds: number[],
	usedPlotPileIds: number[],
	revealedPlotId?: number,
	deadPileIds: number[]
} // Player