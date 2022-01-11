import { useReapitConnect } from '@reapit/connect-session'
import {
  BodyText,
  Button,
  ButtonGroup,
  ColResponsive,
  ElToggleItem,
  FormLayout,
  GridResponsive,
  Icon,
  Input,
  InputAddOn,
  InputGroup,
  InputWrap,
  InputWrapFull,
  Label,
  Subtitle,
  Title,
  Toggle,
} from '@reapit/elements'
import { ListItemModel } from '@reapit/foundations-ts-definitions'
import React, { FC, useEffect, useState } from 'react'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { configurationAppointmentsApiService } from '../../platform-api/configuration-api'

export type AuthenticatedProps = {}

export const Authenticated: FC<AuthenticatedProps> = () => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  const [appointmentConfigTypes, setAppointmentConfigTypes] = useState<
    ListItemModel[]
  >([])

  useEffect(() => {
    const fetchAppoinmentConfigs = async () => {
      if (!connectSession) return
      const serviceResponse = await configurationAppointmentsApiService(
        connectSession
      )
      if (serviceResponse) {
        setAppointmentConfigTypes(serviceResponse)
      }
    }
    if (connectSession) {
      fetchAppoinmentConfigs()
    }
  }, [connectSession])

  console.log('Appointment Config Types are: ', appointmentConfigTypes)
  return (
    <>
      <Title>Hello World</Title>
      <Subtitle>Where are you now</Subtitle>
      <BodyText>this is a body text</BodyText>
      <form>
        <FormLayout>
          <InputWrap>
            <InputGroup icon="homeSystem" label="Address" type="text" />
          </InputWrap>
          <InputWrapFull>
            <InputGroup icon="homeSystem" label="Address" type="text" />
          </InputWrapFull>
          <InputWrap>
            {/** wrap the label and input */}
            <InputGroup>
              {/** toggle need an id */}
              <Toggle id="on-off-toggle">
                <ElToggleItem>On</ElToggleItem>
                <ElToggleItem>Off</ElToggleItem>
              </Toggle>
              <Label>Active</Label>
            </InputGroup>
          </InputWrap>
          <InputWrap>
            <InputGroup>
              <Input id="myText" type="text" />
              <Icon icon="usernameSystem" />
              <Label htmlFor="myText">Enter your username</Label>
              <InputAddOn intent="danger">Required</InputAddOn>
            </InputGroup>
          </InputWrap>
          <InputWrapFull>
            <ButtonGroup alignment="left">
              <Button size={2} intent="primary">
                Cancel
              </Button>
              <Button size={2} chevronRight intent="critical">
                Submit
              </Button>
            </ButtonGroup>
          </InputWrapFull>
        </FormLayout>
      </form>
      <GridResponsive
        colGapMobile={1}
        colGapTablet={2}
        colGapDesktop={3}
        colGapWideScreen={4}
        rowGapMobile={1}
        rowGapTablet={2}
        rowGapDesktop={3}
        rowGapWideScreen={4}
        rowGapSuperWideScreen={6}
      >
        <ColResponsive
          spanMobile={2}
          spanTablet={2}
          spanDesktop={2}
          spanWideScreen={2}
          spanSuperWideScreen={2}
        >
          <div style={{ height: '20px', backgroundColor: 'lightblue' }} />
        </ColResponsive>
        <ColResponsive
          spanMobile={2}
          spanTablet={2}
          spanDesktop={2}
          spanWideScreen={2}
          spanSuperWideScreen={2}
        >
          <div style={{ height: '20px', backgroundColor: 'lightblue' }} />
        </ColResponsive>
      </GridResponsive>
    </>
  )
}

export default Authenticated
