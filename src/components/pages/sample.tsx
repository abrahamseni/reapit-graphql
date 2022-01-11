import {
  MultiSelectInput,
  PersistantNotification,
  ProgressBarContainer,
  ProgressBarInner,
  ProgressBarItem,
  ProgressBarLabel,
  ProgressBarPercentage,
  Steps,
  Tabs,
} from '@reapit/elements'
import * as React from 'react'
import { redText } from './__styles__/styles'

export default function sample() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [progress, setProgress] = React.useState<string>('0')
  const [selectedStep, setSelectedStep] = React.useState('1')
  const [tab, setTab] = React.useState([true, false, false])

  React.useEffect(() => {
    window.setInterval(() => {
      const random = Math.ceil(Math.random() * 100)
      setProgress(`${random}%`)
    }, 1000)
  }, [])

  const renderTabChildren = () => {
    if (tab[0]) {
      return <h2>Tab 1</h2>
    }
    if (tab[1]) {
      return <h2>Tab 2</h2>
    }
    if (tab[2]) {
      return <h2>Tab 3</h2>
    }
  }

  return (
    <div>
      <h1 className={redText}>Sample</h1>
      <MultiSelectInput
        id="my-multi-select-input"
        options={[
          {
            name: 'item1',
            value: 'item-one',
          },
          {
            name: 'item2',
            value: 'item-two',
          },
          {
            name: 'item3',
            value: 'item-three',
          },
        ]}
      />
      <PersistantNotification
        isExpanded={isExpanded}
        onExpansionToggle={setIsExpanded}
        isFixed
        icon="warningSolidSystem"
        intent="danger"
      >
        Hola casita!
      </PersistantNotification>
      <ProgressBarContainer>
        <ProgressBarInner
          style={{
            width: progress,
            transitionDuration: '1s',
          }}
        >
          <ProgressBarItem style={{ backgroundColor: 'pink' }} />
          <ProgressBarItem style={{ backgroundColor: 'red' }} />
          <ProgressBarItem style={{ backgroundColor: 'red' }} />
          <ProgressBarItem style={{ backgroundColor: 'red' }} />
          <ProgressBarItem style={{ backgroundColor: 'pink' }} />
        </ProgressBarInner>
        <ProgressBarLabel>{progress}</ProgressBarLabel>
      </ProgressBarContainer>
      <ProgressBarPercentage duration={20} />
      <Steps
        steps={['1', '2', '3']}
        selectedStep={selectedStep}
        onStepClick={setSelectedStep}
      />
      <Tabs
        name="my-tabs"
        options={[
          {
            id: 'tab-1',
            value: '0',
            text: 'Tab 1',
            isChecked: tab[0],
          },
          {
            id: 'tab-2',
            value: '1',
            text: 'Tab 2',
            isChecked: tab[1],
          },
          {
            id: 'tab-3',
            value: '2',
            text: 'Tab 3',
            isChecked: tab[2],
          },
        ]}
        onChange={(event: any) =>
          setTab((prevTab) => {
            const changeTab = prevTab.map(() => false)
            const trueIndex = Number(event.target.value)
            changeTab[trueIndex] = !changeTab[trueIndex]
            return changeTab
          })
        }
      />
      {renderTabChildren()}
    </div>
  )
}
