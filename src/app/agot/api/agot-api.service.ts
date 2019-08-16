import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputPlayerInput, MotifTokenInput, GetGameQuery, GetRequestsQuery, SubscribeToRequestsSubscription, SubscribeToChangesSubscriptionVariables, SubscribeToChangesSubscription, MutateGameMutation, MutateGameMutationVariables, StartGameMutation, StartGameMutationVariables, ChooseActionMutation, ChooseActionMutationVariables, AgotChoiceInput, CheatDrawDeckMutation, CheatDrawDeckMutationVariables } from './../../graphql-types';
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

  getGame () {
    return this.apollo.query<GetGameQuery>({
      query: gql`
        query GetGame {
          game {
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
      `
    });
  }

  getRequest () {
    return this.apollo.query<GetRequestsQuery, { token: MotifTokenInput }> ({
      query: gql`
        query GetRequests ($token: MotifTokenInput!) {
          requests (token: $token) {
            ...RequestFragment
          }
        }
        ${requestFragment}
      `,
      variables: {
        token: { token: "leo.molinaro" }
      }
    });
  }

  subscribeToRequests (): Observable<{ data: SubscribeToRequestsSubscription }> {
    return this.apollo.subscribe<SubscribeToRequestsSubscription, SubscribeToChangesSubscriptionVariables> ({
      query: gql`
        subscription SubscribeToRequests ($token: MotifTokenInput!) {
          requests (token: $token) {
            ...RequestFragment
          }
        }
        ${requestFragment}
      `,
      variables: {
        token: { token: "leo.molinaro" }
      }
    });
  } // subscribeToRequests

  subscribeToChanges (): Observable<{ data: SubscribeToChangesSubscription }> {
    return this.apollo.subscribe<SubscribeToChangesSubscription, SubscribeToChangesSubscriptionVariables> ({
      query: gql`
        subscription SubscribeToChanges ($token: MotifTokenInput!) {
          changes (token: $token) {
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
        token: { token: "leo.molinaro" }
      }
    });
  } // subscribeToChanges

  createGame (inputPlayers: InputPlayerInput[]): Observable<{ data: MutateGameMutation }> {
    return this.apollo.mutate<MutateGameMutation, MutateGameMutationVariables> ({
      mutation: gql`
        mutation MutateGame ($inputPlayers: [InputPlayerInput]!, $token: MotifTokenInput!) {
          createGame (
            inputPlayers: $inputPlayers,
            token: $token
          ) {
            phase
            round
            step
          }
        }
      `,
      variables: {
        token: { token: "leo.molinaro" },
        inputPlayers: inputPlayers
      }
    });
  }

  startGame (): Observable<{ data: StartGameMutation }> {
    return this.apollo.mutate<StartGameMutation, StartGameMutationVariables> ({
      mutation: gql`
        mutation StartGame ($token: MotifTokenInput!) {
          startGame (
            token: $token
          )
        }
      `,
      variables: {
        token: { token: "leo.molinaro" },
      }
    });
  } // startGame

  chooseAction (choice: AgotChoiceInput, playerId: string): Observable<{ data: ChooseActionMutation }> {
    return this.apollo.mutate<ChooseActionMutation, ChooseActionMutationVariables> ({
      mutation: gql`
        mutation ChooseAction ($choice: AgotChoiceInput, $playerId: String, $token: MotifTokenInput!) {
          chooseAction (
            choice: $choice
            playerId: $playerId
            token: $token
          )
        }
      `,
      variables: {
        choice: choice,
        playerId: playerId,
        token: { token: "leo.molinaro" },
      }
    });
  } // chooseAction 

  cheatDrawDeck (cardIds: number[], playerId: string) {
    return this.apollo.mutate<CheatDrawDeckMutation, CheatDrawDeckMutationVariables> ({
      mutation: gql`
        mutation CheatDrawDeck ($cardIds: [Long], $playerId: String, $token: MotifTokenInput!) {
          cheatDrawDeck (
            cardIds: $cardIds
            playerId: $playerId
            token: $token
          )
        }
      `,
      variables: {
        cardIds: cardIds,
        playerId: playerId,
        token: { token: "leo.molinaro" },
      }
    });
  } // cheatDrawDeck

} // AgotApiService
