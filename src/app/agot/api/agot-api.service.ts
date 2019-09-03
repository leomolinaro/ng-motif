import { GraphQLApiService, CheckQuery, CheckMutation } from './../../shared/graphql/graphql.util';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mutation, InputPlayerInput, GetGameQuery, GetRequestsQuery, SubscribeToRequestsSubscription, SubscribeToChangesSubscriptionVariables, SubscribeToChangesSubscription, MutateGameMutation, MutateGameMutationVariables, StartGameMutation, StartGameMutationVariables, ChooseActionMutation, ChooseActionMutationVariables, AgotChoiceInput, CheatDrawDeckMutation, CheatDrawDeckMutationVariables, GetRequestsQueryVariables, GetGameQueryVariables, Query, QueryAgotGameArgs, QueryAgotGamesArgs, MutationAgotNewGameArgs } from './../../graphql-types';
import gql from 'graphql-tag';
import { params, types, fragment } from 'typed-graphqlify'
import { StrictlyIncludes, DeepRequired } from 'src/app/shared/types/types';
import { map, tap } from 'rxjs/operators';

const requestFragment =  gql`
  fragment RequestFragment on AAgotRequest {
    instruction
    type
    player { id }
    choices {
      requestType
      choiceType
      cardId
      icon
      cardAction
      player
      yesNoAnswer
      actionLabel
    }
  }
`;

const homeGameFragment = fragment ("homeGameFragment", "AgotGame", {
  id: types.number,
  name: types.string,
  allPlayers: [{
    id: types.string,
    name: types.string,
    faction: {
      imageSource: types.string
    },
    user: {
      username: types.string,
    }
  }]
});


@Injectable({
  providedIn: 'root'
})
export class AgotApiService extends GraphQLApiService {

  constructor (apollo: Apollo) { super (apollo); }

  getGames () {
    const q = params ({ $token: 'MotifTokenInput!' },
      {
        agotGames: params ({ token: '$token' },
          [{ ...homeGameFragment }]
        )
      }
    );
    const typeCheck: CheckQuery<typeof q> = true;
    return this.query (q, { token: { token: "leo.molinaro" } }).pipe (map (data => data.agotGames));
  } // getGames

  newGame (gameName: string, inputPlayers: InputPlayerInput[]) {
    const m = params ({ $gameName: 'String!', $inputPlayers: '[InputPlayerInput]!', $token: 'MotifTokenInput!' },
      {
        agotNewGame: params ({ gameName: '$gameName', inputPlayers: '$inputPlayers', token: '$token' },
          { ...homeGameFragment }
        )
      }
    );
    const typeCheck: CheckMutation<typeof m> = true;
    return this.mutate (m, {
      gameName: gameName,
      token: { token: "leo.molinaro" },
      inputPlayers: inputPlayers
    }).pipe (
      map (data => data.agotNewGame)
    );
  } // newGame

  getGame (gameId: number) {
    return this.queryFromGql<GetGameQuery, GetGameQueryVariables>(
      gql`
        query GetGame ($gameId: Long!, $token: MotifTokenInput!) {
          agotGame (gameId: $gameId, token: $token) {
            id
            allCards {
              id
              imageSource
              power
              kneeling
              revealed
              attachmentIds
              duplicateIds
            }
            allPlayers {
              id
              name
              gold
              agenda { id }
              faction { id }
              hand { id }
              characters { id }
              locations { id }
              discardPile { id }
              plotDeck { id }
              usedPlotPile { id }
              deadPile { id }
              revealedPlot { id }
              drawDeckEmpty
            }
            round
            phase
            step
            log {
              message
              type
            }
            started
            firstPlayer { id }
          }
        }
      `,
      { gameId: gameId, token: { token: "leo.molinaro" } }
    ).pipe (map (data => data.agotGame));
  } // getGame

  getRequests (gameId: number) {
    return this.queryFromGql<GetRequestsQuery, GetRequestsQueryVariables> (
      gql`
        query GetRequests ($gameId: Long!, $token: MotifTokenInput!) {
          agotRequests (gameId: $gameId, token: $token) {
            ...RequestFragment
          }
        }
        ${requestFragment}
      `,
      { gameId: gameId, token: { token: "leo.molinaro" } }
    ).pipe (map (data => data.agotRequests));
  } // getRequests

  subscribeToRequests (gameId: number) {
    return this.subscribeFromGql<SubscribeToRequestsSubscription, SubscribeToChangesSubscriptionVariables> (
      gql`
        subscription SubscribeToRequests ($gameId: Long!, $token: MotifTokenInput!) {
          agotRequests (gameId: $gameId, token: $token) {
            ...RequestFragment
          }
        }
        ${requestFragment}
      `,
      {
        gameId: gameId,
        token: { token: "leo.molinaro" }
      }
    ).pipe (map (data => data.agotRequests));
  } // subscribeToRequests

  subscribeToChanges (gameId: number) {
    return this.subscribeFromGql<SubscribeToChangesSubscription, SubscribeToChangesSubscriptionVariables> (
      gql`
        subscription SubscribeToChanges ($gameId: Long!, $token: MotifTokenInput!) {
          agotChanges (gameId: $gameId, token: $token) {
            actions {
              type
              payload {
                ... on AddCardData { cardId index toPlayer toArea }
                ... on AddLogData { log { message type} }
                ... on EmptyDrawDeckData { player }
                ... on RemoveCardData { cardId fromPlayer fromArea }
                ... on SetFirstPlayerData { player }
                ... on SetGoldData { gold player }
                ... on SetPhaseData { phase round step }
                ... on SetCardKneelingData { kneeling cardId }
                ... on SetCardPowerData { power cardId }
                ... on SetCardRevealedData { revealed cardId }
                ... on AddAttachmentData { cardId toCard }
                ... on RemoveAttachmentData { cardId fromCard }
                ... on RemoveDuplicateData { cardId fromCard }
                ... on AddDuplicateData { cardId toCard }
                ... on SetGameStartedData { started }
              }
            }
          }
        }
      `,
      {
        gameId: gameId,
        token: { token: "leo.molinaro" }
      }
    ).pipe (map (data => data.agotChanges));
  } // subscribeToChanges

  startGame (gameId: number) {
    return this.mutateFromGql<StartGameMutation, StartGameMutationVariables> (
      gql`
        mutation StartGame ($gameId: Long!, $token: MotifTokenInput!) {
          agotStartGame (gameId: $gameId, token: $token)
        }
      `,
      {
        gameId: gameId,
        token: { token: "leo.molinaro" },
      }
    );
  } // startGame

  chooseAction (choice: AgotChoiceInput, playerId: string, gameId: number) {
    return this.mutateFromGql<ChooseActionMutation, ChooseActionMutationVariables> (
      gql`
        mutation ChooseAction ($choice: AgotChoiceInput, $playerId: String, $gameId: Long!, $token: MotifTokenInput!) {
          agotChooseAction (
            choice: $choice
            playerId: $playerId
            gameId: $gameId
            token: $token
          )
        }
      `,
      {
        choice: choice,
        playerId: playerId,
        gameId: gameId,
        token: { token: "leo.molinaro" },
      }
    );
  } // chooseAction 

  cheatDrawDeck (cardIds: number[], playerId: string, gameId: number) {
    return this.mutateFromGql<CheatDrawDeckMutation, CheatDrawDeckMutationVariables> (
      gql`
        mutation CheatDrawDeck ($cardIds: [Long], $playerId: String, $gameId: Long!, $token: MotifTokenInput!) {
          agotCheatDrawDeck (
            cardIds: $cardIds
            playerId: $playerId
            gameId: $gameId
            token: $token
          )
        }
      `,
      {
        cardIds: cardIds,
        playerId: playerId,
        gameId: gameId,
        token: { token: "leo.molinaro" },
      }
    );
  } // cheatDrawDeck

} // AgotApiService
