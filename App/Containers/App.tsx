import '../Config';
import DebugConfig from '../Config/DebugConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';
import createStore from '../Redux';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';

const store = createStore();

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  defaults: {
    testing: {
      __typename: 'testing',
      name: '',
      age: 0
    }
  }
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    new HttpLink({ uri: 'http://localhost:8080/graphql' })
  ])
});

// make client to rewrite the defaults every time the store resets
client.onResetStore(stateLink.writeDefaults);

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </ApolloProvider>
    )
  }
}

declare global {
  interface Console {
      tron: any
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
