import Vue from 'vue'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'
require('es6-promise').polyfill()
require('isomorphic-fetch')

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
    transportBatching: true,
  }),
})

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient,
})