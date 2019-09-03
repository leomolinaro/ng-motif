import { query, mutation, rawString } from 'typed-graphqlify';
import { DeepRequired, StrictlyIncludes } from './../types/types';
import { Apollo } from 'apollo-angular';
import { Observable, throwError, of } from 'rxjs';
import { Query, Mutation } from 'src/app/graphql-types';
import gql from 'graphql-tag';
import { catchError, switchMap, tap } from 'rxjs/operators';

export type CheckQuery<Q> = StrictlyIncludes<Q, DeepRequired<Query>, true>;
export type CheckMutation<M> = StrictlyIncludes<M, DeepRequired<Mutation>, true>;

export function deepRawString<T> (value: T): T {
  // console.log (value, typeof value, Array.isArray (value));
  if (typeof value === "string") {
    return rawString (value as any as string) as any as T;
  } else if (typeof value === "object") {
    if (Array.isArray (value)) {
      const a = [];
      for (const e of value) { a.push (this.deepRawString (e)); }
      return a as any as T;
    } else {
      const o: any = {};
      for (const k in value) { o[k] = this.deepRawString (value[k]); }
      return o;
    } // if - else
  } else {
    return value;
  } // if - else
} // deepRawString

export class GraphQLApiService {

  constructor (private apollo: Apollo) { }

  query<Q, V> (q: Q, variables?: V) {
    const queryString = query (q);
    return this.queryFromGql<Q, V> (gql (queryString), variables);
  } // query

  mutate<M, V> (m: M, variables?: V) {
    const mutationString = mutation (m);
    return this.mutateFromGql<M, V> (gql (mutationString), variables);
  } // mutate

  queryFromGql<Q, V> (gql: any, variables?: V) {
    return this.apollo.query <Q, V> ({
      query: gql,
      variables: variables,
    }).pipe (
      switchMap (res => this.handleGraphqlResult<Q> (res))
    );
  } // queryFromGql

  mutateFromGql<M, V> (gql: any, variables?: V) {
    return this.apollo.mutate<M, V> ({
      mutation: gql,
      variables: variables
    }).pipe (
      switchMap (res => this.handleGraphqlResult<M> (res))
    );
  } // mutateFromGql

  subscribeFromGql<S, V> (gql: any, variables?: V) {
    return this.apollo.subscribe<S, V> ({
      query: gql,
      variables: variables
    }).pipe (
      // tap (x => console.log ("x", x)),
      switchMap (res => this.handleGraphqlResult<S> (res))
    );
  } // subscribeFromGql

  private handleGraphqlResult<D> (res: { data?: D, errors?: any }) {
    if (res.errors) {
      console.error (res.errors);
      return throwError (res.errors);
    } else {
      return of (res.data);
    } // if - else
  } // handleGraphqlResult

} // GraphQLApiService