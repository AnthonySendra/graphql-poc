'use strict'

let express = require('express')
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')
var fs = require('fs')
var path = require('path')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(String(fs.readFileSync(path.join(__dirname, 'lib', 'graphql', 'schema.graphqls'))))

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();

app.use(cors())
app.use('/graphql', graphqlHTTP(req => {
  return {
    schema: schema,
    rootValue: root,
    graphiql: true
  }
}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')