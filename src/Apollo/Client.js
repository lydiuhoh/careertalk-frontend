import ApolloClient from 'apollo-boost';

import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://careertalk-graphql.herokuapp.com/graphql'
      : 'http://localhost:4000/graphql',
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
