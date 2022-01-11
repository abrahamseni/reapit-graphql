import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import Graphql from '../graphql'
import { QueryClientProvider, QueryClient } from 'react-query'
import '@testing-library/jest-dom'

afterEach(cleanup)

it('renders graphql page', async () => {
  const { getByText } = render(
    <QueryClientProvider client={new QueryClient()}>
      <Graphql />
    </QueryClientProvider>
  )
  expect(getByText('hello from grphql')).toBeInTheDocument()
})
