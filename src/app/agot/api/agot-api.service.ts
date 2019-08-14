import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputPlayerInput, MotifTokenInput, QueryGameQuery, QueryRequestQuery, SubscribeToRequestsSubscription, SubscribeToChangesSubscriptionVariables, SubscribeToChangesSubscription, MutateGameMutation, MutateGameMutationVariables, StartGameMutation, StartGameMutationVariables, ChooseActionMutation, ChooseActionMutationVariables, AgotResponseInput } from './../../graphql-types';
import gql from 'graphql-tag';

const requestFragment =  gql`
  fragment RequestFragment on AAgotRequest {
    repeated
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
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class AgotApiService {

  constructor (private apollo: Apollo) { }

  getGame () {
    return this.apollo.query<QueryGameQuery>({
      query: gql`
        query QueryGame {
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
    return this.apollo.query<QueryRequestQuery, { token: MotifTokenInput }> ({
      query: gql`
        query QueryRequest ($token: MotifTokenInput!) {
          request (token: $token) {
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
          request (token: $token) {
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

  chooseAction (response: AgotResponseInput): Observable<{ data: ChooseActionMutation }> {
    return this.apollo.mutate<ChooseActionMutation, ChooseActionMutationVariables> ({
      mutation: gql`
        mutation ChooseAction ($response: AgotResponseInput, $token: MotifTokenInput!) {
          chooseAction (
            response: $response
            token: $token
          )
        }
      `,
      variables: {
        response: response,
        token: { token: "leo.molinaro" },
      }
    });
  } // chooseAction 

} // AgotApiService
