import { LoginMutation, LoginMutationVariables } from './../../graphql-types';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class MotifApiService {

  constructor (private apollo: Apollo) { }

  login (username: string): Observable<{ data?: LoginMutation }> {
    return this.apollo.mutate<LoginMutation, LoginMutationVariables> ({
      mutation: gql`
        mutation Login ($username: String!) {
          login (
            username: $username
          ) {
            token
          }
        }
      `,
      variables: {
        username: username
      }
    });
  } // login

} // MotifApiService
