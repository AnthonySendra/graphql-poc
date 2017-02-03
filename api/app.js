'use strict'

let express = require('express')
let OpticsAgent = require('optics-agent');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')

OpticsAgent.configureAgent({ apiKey: 'service:AnthonySendra-test:XPM_lU-3de-FIIuyHWhHug' })

// Construct a schema, using GraphQL schema language
var schema = buildSchema(require('./schemas/hello.graphqls'));

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();

app.use(cors())
OpticsAgent.instrumentSchema(schema);
app.use('/graphql', OpticsAgent.middleware());
app.use('/graphql', graphqlHTTP(req => {
  return {
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: {opticsContext: OpticsAgent.context(req)}
  }
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');