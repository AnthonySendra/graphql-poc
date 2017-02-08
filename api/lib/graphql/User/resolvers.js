class User {
  constructor (id, {username, description}) {
    this.id = id
    this.username = username
    this.description = description
  }
}

let inMemoryUser = [
  new User('1', {username: 'toto', description: 'toto description'}),
  new User('2', {username: 'tutu', description: 'tutu description'}),
  new User('3', {username: 'tata', description: 'tata description'})
]

module.exports = {
  Query: {
    user (_, {id}) {
      return inMemoryUser.find(user => user.id === id)
    }
  },
  Mutation: {
    setUsername (_, {id, username}) {
      let user = inMemoryUser.find(user => user.id === id)
      user.username = username

      return user
    }
  }
}