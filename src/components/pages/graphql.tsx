import { useReapitConnect } from '@reapit/connect-session'
import { Card, FlexContainer, Loader, Title } from '@reapit/elements'
import * as React from 'react'
import { BASE_HEADERS } from '../../constants/api'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import {
  GetAllPropertiesQuery,
  useGetAllPropertiesQuery,
} from '../../generated/graphql'
import graphqlRequestClient from '../../platform-api/request'
import { flexGap } from './__styles__/styles'

const Graphql = () => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  React.useEffect(() => {
    if (!connectSession) return
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

  return (
    <div>
      <Title>hello from grphql</Title>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <p>{error?.message}</p>
      ) : (
        <FlexContainer isFlexWrap className={flexGap}>
          {data?.GetProperties?._embedded?.map((d) => {
            return (
              <Card
                key={d.id}
                hasMainCard
                hasListCard
                mainContextMenuItems={[
                  {
                    icon: 'trashSystem',
                    onClick: () => console.log('Clicking'),
                    intent: 'danger',
                  },
                  {
                    icon: 'shareSystem',
                    onClick: () => console.log('Clicking'),
                  },
                ]}
                mainCardHeading={`Beautiful Home at ${d.address?.line1}`}
                mainCardSubHeading={`${d.currency} ${d.selling?.price}`}
                mainCardSubHeadingAdditional="Main Subheading Additional"
                mainCardBody={d.description ?? ''}
                mainCardImgUrl="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                listCardHeading="List Card Heading"
                listCardSubHeading="List Card Sub Heading"
                listCardItems={[
                  {
                    listCardItemHeading: 'Applicant',
                    listCardItemSubHeading: 'Bob Smith',
                    listCardItemIcon: 'applicantInfographic',
                    onClick: () => console.log('Clicking'),
                  },
                  {
                    listCardItemHeading: 'Property',
                    listCardItemSubHeading: 'Some Address',
                    listCardItemIcon: 'houseInfographic',
                    onClick: () => console.log('Clicking'),
                  },
                ]}
                listContextMenuItems={[
                  {
                    icon: 'trashSystem',
                    onClick: () => console.log('Clicking'),
                    intent: 'danger',
                  },
                  {
                    icon: 'shareSystem',
                    onClick: () => console.log('Clicking'),
                  },
                ]}
              />
            )
          })}
        </FlexContainer>
      )}
    </div>
  )
}

export default Graphql
