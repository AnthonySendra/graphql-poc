let makeExecutableSchema = require('graphql-tools').makeExecutableSchema
let User = require('./User')

module.exports = makeExecutableSchema({
  typeDefs: [
    User.schema
  ],
  resolvers: Object.assign({},
    User.resolvers
  )
})