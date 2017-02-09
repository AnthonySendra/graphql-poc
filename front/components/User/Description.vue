<template>
  <p>{{user.username}} : {{user.description}}</p>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'Description',
    props: ['id'],
    data () {
      return {
        user: {}
      }
    },
    apollo: {
      user: {
        query: gql`query User($id: ID!) {
          user(id: $id) {
            username
            description
          }
        }`,
        variables () {
          return {
            id: this.id
          }
        }
      }
    }
  }
</script>