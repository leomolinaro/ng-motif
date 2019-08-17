import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputPlayerInput, MotifTokenInput, GetGameQuery, GetRequestsQuery, SubscribeToRequestsSubscription, SubscribeToChangesSubscriptionVariables, SubscribeToChangesSubscription, MutateGameMutation, MutateGameMutationVariables, StartGameMutation, StartGameMutationVariables, ChooseActionMutation, ChooseActionMutationVariables, AgotChoiceInput, CheatDrawDeckMutation, CheatDrawDeckMutationVariables, GetRequestsQueryVariables, GetGameQueryVariables } from './../../graphql-types';
import gql from 'graphql-tag';

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

@Injectable({
  providedIn: 'root'
})
export class AgotApiService {

  constructor (private apollo: Apollo) { }

  getGame (gameId: number) {
    return this.apollo.query<GetGameQuery, GetGameQueryVariables>({
      query: gql`
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
      variables: {
        gameId: gameId,
        token: { token: "leo.molinaro" }
      }
    });
  }

  getRequest (gameId: number) {
    return this.apollo.query<GetRequestsQuery, GetRequestsQueryVariables> ({
      query: gql`
        query GetRequests ($gameId: Long!, $token: MotifTokenInput!) {
          agotRequests (gameId: $gameId, token: $token) {
            ...RequestFragment
          }
        }
        ${requestFragment}
      `,
      variables: {
        gameId: gameId,
        token: { token: "leo.molinaro" }
      }
    });
  }

  subscribeToRequests (gameId: number): Observable<{ data: SubscribeToRequestsSubscription }> {
    return this.apollo.subscribe<SubscribeToRequestsSubscription, SubscribeToChangesSubscriptionVariables> ({
      query: gql`
        subscription SubscribeToRequests ($gameId: Long!, $token: MotifTokenInput!) {
          agotRequests (gameId: $gameId, token: $token) {
            ...RequestFragment
          }
        }
        ${requestFragment}
      `,
      variables: {
        gameId: gameId,
        token: { token: "leo.molinaro" }
      }
    });
  } // subscribeToRequests

  subscribeToChanges (gameId: number): Observable<{ data: SubscribeToChangesSubscription }> {
    return this.apollo.subscribe<SubscribeToChangesSubscription, SubscribeToChangesSubscriptionVariables> ({
      query: gql`
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
      variables: {
        gameId: gameId,
        token: { token: "leo.molinaro" }
      }
    });
  } // subscribeToChanges

  createGame (gameName: string, inputPlayers: InputPlayerInput[]): Observable<{ data: MutateGameMutation }> {
    return this.apollo.mutate<MutateGameMutation, MutateGameMutationVariables> ({
      mutation: gql`
        mutation MutateGame ($gameName: String!, $inputPlayers: [InputPlayerInput]!, $token: MotifTokenInput!) {
          agotNewGame (
            gameName: $gameName
            inputPlayers: $inputPlayers
            token: $token
          ) {
            phase
            round
            step
          }
        }
      `,
      variables: {
        gameName: gameName,
        token: { token: "leo.molinaro" },
        inputPlayers: inputPlayers
      }
    });
  }

  startGame (gameId: number): Observable<{ data: StartGameMutation }> {
    return this.apollo.mutate<StartGameMutation, StartGameMutationVariables> ({
      mutation: gql`
        mutation StartGame ($gameId: Long!, $token: MotifTokenInput!) {
          agotStartGame (gameId: $gameId, token: $token)
        }
      `,
      variables: {
        gameId: gameId,
        token: { token: "leo.molinaro" },
      }
    });
  } // startGame

  chooseAction (choice: AgotChoiceInput, playerId: string, gameId: number): Observable<{ data: ChooseActionMutation }> {
    return this.apollo.mutate<ChooseActionMutation, ChooseActionMutationVariables> ({
      mutation: gql`
        mutation ChooseAction ($choice: AgotChoiceInput, $playerId: String, $gameId: Long!, $token: MotifTokenInput!) {
          agotChooseAction (
            choice: $choice
            playerId: $playerId
            gameId: $gameId
            token: $token
          )
        }
      `,
      variables: {
        choice: choice,
        playerId: playerId,
        gameId: gameId,
        token: { token: "leo.molinaro" },
      }
    });
  } // chooseAction 

  cheatDrawDeck (cardIds: number[], playerId: string, gameId: number) {
    return this.apollo.mutate<CheatDrawDeckMutation, CheatDrawDeckMutationVariables> ({
      mutation: gql`
        mutation CheatDrawDeck ($cardIds: [Long], $playerId: String, $gameId: Long!, $token: MotifTokenInput!) {
          agotCheatDrawDeck (
            cardIds: $cardIds
            playerId: $playerId
            gameId: $gameId
            token: $token
          )
        }
      `,
      variables: {
        cardIds: cardIds,
        playerId: playerId,
        gameId: gameId,
        token: { token: "leo.molinaro" },
      }
    });
  } // cheatDrawDeck

} // AgotApiService
