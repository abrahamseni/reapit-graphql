import { GraphQLClient } from 'graphql-request'

const graphqlRequestClient = new GraphQLClient(
  'https://graphql.reapit.cloud/graphql'
)

export default graphqlRequestClient
