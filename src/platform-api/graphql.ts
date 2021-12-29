import axios from 'axios'
import { BASE_HEADERS } from '../constants/api'
import { ReapitConnectSession } from '@reapit/connect-session'

export function getProperties(session: ReapitConnectSession) {
  const headers = {
    ...BASE_HEADERS,
    authorization: session.idToken,
    'reapit-connect-token': session.accessToken,
  }
  axios({
    url: 'https://graphql.reapit.cloud/graphql',
    method: 'post',
    headers,
    data: {
      query: `
        query properties {
          GetProperties{
            _embedded{
              id
            }
          }
        }
      `,
    },
  }).then((result) => {
    console.log(result.data)
  })
}
