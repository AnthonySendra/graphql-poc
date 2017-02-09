<template>
  <section class="container">
    <select v-model="userId">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <h1>User {{userId}}:</h1>
    <p>Username: {{user.username}}</p>
    <p>Description: {{user.description}}</p>

    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>

<script>
  import gql from 'graphql-tag'
  import Vue from 'vue'

  export default {
    data () {
      return {
        user: {},
        userId: 1
      }
    },
    apollo: {
      user: {
        query: gql`query User($id: ID!) {
          user(id: $id) {
            id
            username
            description
          }
        }`,
        variables () {
          return {
            id: this.userId
          }
        }
      }
    }
  }
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
