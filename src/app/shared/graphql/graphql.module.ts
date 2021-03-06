import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import introspectionQueryResultData from './fragment-types.json';

const HTTP_URL = "http://localhost:8080/motif-web-project/motif/graphql";
const WS_URL = "ws://localhost:8080/motif-web-project/motif/graphql-ws";

const fragmentMatcher = new IntrospectionFragmentMatcher ({
  introspectionQueryResultData
});

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  // providers: [
  //   {
  //     provide: APOLLO_OPTIONS,
  //     useFactory: createApollo,
  //     deps: [HttpLink],
  //   },
  // ],
})
export class GraphQLModule {

  constructor (apollo: Apollo, httpLink: HttpLink) {

    // Create the http link.
    const httpLinkHandler = httpLink.create ({
      uri: HTTP_URL
    });

    // Create the ws link.
    const webSocketLink = new WebSocketLink ({
      uri: WS_URL,
      options: {
        reconnect: true,
        // connectionParams: {
        //   authToken: localStorage.getItem('token') || null
        // }
      }
    });

    // Using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent.
    const link = split (
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      webSocketLink,
      httpLinkHandler
    );

    apollo.create ({
      link: link,
      cache: new InMemoryCache ({ fragmentMatcher }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        }
      }
    });

  }

}
