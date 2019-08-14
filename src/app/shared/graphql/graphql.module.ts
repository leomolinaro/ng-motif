import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';

const HTTP_URL = "http://localhost:8080/motif-web-project/motif/graphql";
const WS_URL = "ws://localhost:8080/motif-web-project/motif/graphql-ws";

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
        const { kind, operation } = getMainDefinition (query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      webSocketLink,
      httpLinkHandler
    );

    apollo.create ({
      link: link,
      cache: new InMemoryCache ()
    });

  }

}
