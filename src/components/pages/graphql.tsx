import * as React from 'react'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import graphqlRequestClient from '../../platform-api/request'
import {
  GetAllPropertiesQuery,
  useGetAllPropertiesQuery,
} from '../../generated/graphql'
import { BASE_HEADERS } from '../../constants/api'
import { Loader } from '@reapit/elements'

const Graphql = () => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  React.useEffect(() => {
    if (!connectSession) return
    // getProperties(connectSession)
    graphqlRequestClient.setHeaders({
      ...BASE_HEADERS,
      authorization: connectSession.idToken,
      'reapit-connect-token': connectSession.accessToken,
    })
  }, [connectSession])

  const { data, error, status } = useGetAllPropertiesQuery<
    GetAllPropertiesQuery,
    Error
  >(graphqlRequestClient)

  console.log(data, status, error)

  return (
    <div>
      <h1>hello from grphql</h1>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <p>{error.message}</p>
      ) : (
        <ul>
          {data?.GetProperties?._embedded?.map((d) => {
            return <li key={d.id}>{d.id}</li>
          })}
        </ul>
      )}
    </div>
  )
}

export default Graphql
