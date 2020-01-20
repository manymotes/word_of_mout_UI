import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import ApolloBoostClient, { gql } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'


export const appClient = new ApolloBoostClient({
    uri: 'identity.dev:8080/graphql'
});

ReactDOM.render(
    <ApolloProvider client={appClient} >
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)
