'use strict'

let express = require('express')
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')

// Construct a schema, using GraphQL schema language
var schema = require('./lib/graphql/schema')

var app = express();

app.use(cors())
app.use('/graphql', graphqlHTTP(req => {
  return {
    schema: schema,
    graphiql: true
  }
}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')