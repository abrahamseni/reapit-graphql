import { GraphQLClient } from 'graphql-request'
// import { BASE_HEADERS } from '../constants/api'
// import { reapitConnectBrowserSession } from '../core/connect-session'

// function graphqlRequestClient() {
//   let headers = {}
//   reapitConnectBrowserSession.connectSession().then((session) => {
//     if (!session) return
//     headers = {
//       ...BASE_HEADERS,
//       authorization: session.idToken,
//       'reapit-connect-token': session.accessToken,
//     }
//   })
//   return new GraphQLClient('https://graphql.reapit.cloud/graphql', {
//     headers,
//   })
// }

const graphqlRequestClient = new GraphQLClient(
  'https://graphql.reapit.cloud/graphql'
)

export default graphqlRequestClient
