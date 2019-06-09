import { MotifComponent } from '../../../shared/components/motif.component';
import { AgotState } from '../../store/agot.reducer';
import { Action } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InitState } from '../../store/agot.actions';

@Component({
  selector: 'agot-actions',
  templateUrl: './agot-actions.component.html',
  styleUrls: ['./agot-actions.component.css']
})
export class AgotActionsComponent extends MotifComponent implements OnInit {

  @Output () dispatch = new EventEmitter<Action>();

  ngOnInit () {
  } // ngOnInit

	initGame () { this.dispatch.emit (new InitState ({ state: GAME_EXAMPLE })); }

} // AgotActionsComponent

function getRandomImageSource () {
	return "http://lcg-cdn.fantasyflightgames.com/got2nd/GT01_"
	 + getRandomInt (29, 197) + ".jpg";
} // getRandomImageSource

function getRandomPlotImageSource () {
	return "http://lcg-cdn.fantasyflightgames.com/got2nd/GT01_"
	 + getRandomInt (1, 28) + ".jpg";
} // getRandomImageSource

function getRandomInt (from: number, to: number): number {
	return (Math.floor (Math.random () * (to - from + 1)) + from);
} // getRandomInt

const GAME_EXAMPLE: AgotState = {
	game: {
    started: true,
		cardMap: {
			1: { id: 1, imageSource: "https://thronesdb.com/bundles/app/images/factions/baratheon.png" },
			2: { id: 2, imageSource: getRandomImageSource () },
			3: { id: 3, imageSource: getRandomImageSource () },
			4: { id: 4, imageSource: getRandomImageSource (), duplicateIds: [6, 11] },
			5: { id: 5, imageSource: getRandomImageSource () },
			6: { id: 6, imageSource: getRandomImageSource () },
			7: { id: 7, imageSource: getRandomImageSource () },
			8: { id: 8, imageSource: getRandomImageSource () },
			9: { id: 9, imageSource: getRandomImageSource () },
			10: { id: 10, imageSource: "https://thronesdb.com/bundles/app/images/factions/stark.png" },
			11: { id: 11, imageSource: getRandomImageSource () },
			12: { id: 12, kneeling: true, imageSource: getRandomImageSource () },
			13: { id: 13, imageSource: getRandomImageSource () },
			14: { id: 14, imageSource: getRandomImageSource () },
			15: { id: 15, imageSource: getRandomImageSource (), duplicateIds: [16], attachmentIds: [3, 4, 5] },
			16: { id: 16, imageSource: getRandomImageSource () },
			17: { id: 17, imageSource: getRandomImageSource (), duplicateIds: [9] },
			101: { id: 101, imageSource: getRandomPlotImageSource () },
			102: { id: 102, imageSource: getRandomPlotImageSource () },
			103: { id: 103, imageSource: getRandomPlotImageSource () },
			104: { id: 104, imageSource: getRandomPlotImageSource () }
    }, // cardMap
    playerIds: ["leo", "fede"],
		playerMap: {
			"leo": {
				username: "leo",
				name: "Leo",
				gold: 3,
				factionId: 1,
				agendaId: 2,
				handIds: [3, 4, 5],
				charactersIds: [6, 7, 8, 9],
				locationsIds: [],
				discardPileIds: [6],
				drawDeckEmpty: true,
				plotDeckIds: [101],
				usedPlotPileIds: [],
				revealedPlotId: 102,
				deadPileIds: []
			},
			"fede": {
				username: "fede",
				name: "Fede",
				gold: 5,
				factionId: 10,
				agendaId: 11,
				handIds: [12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
				charactersIds: [16, 17],
				locationsIds: [15, 17],
				discardPileIds: [14, 7],
				drawDeckEmpty: false,
				plotDeckIds: [101],
				usedPlotPileIds: [],
				revealedPlotId: 103,
				deadPileIds: []
			}
		}, // playerMap
		round: "Round 2",
		phase: "Challenges phase",
		step: "Apply claim result",
		log: [],
		firstPlayer: "leo"
  }, // game
  userPlayerIds: ["leo", "fede"]
} // GAME_EXAMPLE
