import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { GetGame, CreateSampleGame } from './graphql-types';

const getGame = gql`
  query GetGame {
    game {
      round
    }
  }
`

const createSampleGame = gql`
  mutation CreateSampleGame {
    createGame(inputPlayers: [
      {
        id: "leo",
        faction: STARK,
        name: "Leo",
        deck:[
          {
            card: CERSEI_LANNISTER_Core,
            quantity: 3
          }
        ]
      }
    ], token: { token: "sdasdasd" }) {
      phase
      round
      step
    }
  }
`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.query<GetGame.Query>({
      query: getGame
    })
    .subscribe(x => console.log("Apollo query", x.data));

    this.apollo.mutate<CreateSampleGame.Mutation>({
      mutation: createSampleGame
    })
    .subscribe(x => console.log("Apollo mutation ", x.data));
  }

}
