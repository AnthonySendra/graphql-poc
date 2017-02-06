class User {
  constructor (id, {username, description}) {
    this.id = id
    this.username = username
    this.description = description
  }
}

module.exports = {
  getUser ({id}) {
    return new User(id, {username: 'toto', description: 'toto description'})
  }
}