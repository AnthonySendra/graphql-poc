let fs = require('fs')
let path = require('path')

module.exports = {
  schema: String(fs.readFileSync(path.join(__dirname, 'schema.graphqls'))),
  resolvers: require('./resolvers')
}