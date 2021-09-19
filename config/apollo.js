import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:49694/'
});


export default client;