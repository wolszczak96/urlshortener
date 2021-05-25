import { render, fireEvent } from '../testUtils'
import Index from '@/pages'
import { waitFor } from '@testing-library/dom'
import '@testing-library/jest-dom'
import { LONG_URL, SHORT_URL, INVALID_URL } from '../constants'

import './__mocks__/server'

describe('Index page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button generates short url', async () => {
    const { getByPlaceholderText, getByText, getByDisplayValue } = render(
      <Index />,
    )

    // fill the input
    fireEvent.change(getByPlaceholderText('https://example.com'), {
      target: { value: LONG_URL },
    })
    await waitFor(() => {
      expect(getByDisplayValue(LONG_URL)).toBeInTheDocument()
    })

    // submit the form
    fireEvent.click(getByText('Shorten'))

    // dialog appears
    await waitFor(() => {
      expect(getByText('Here’s your shortened url:')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(getByDisplayValue(SHORT_URL)).toBeInTheDocument()
    })
  })

  it('validates input on submit', async () => {
    const { getByPlaceholderText, getByText, getByDisplayValue } = render(
      <Index />,
    )

    // fill the input
    fireEvent.change(getByPlaceholderText('https://example.com'), {
      target: { value: INVALID_URL },
    })
    await waitFor(() => {
      expect(getByDisplayValue(INVALID_URL)).toBeInTheDocument()
    })

    // submit the form
    fireEvent.click(getByText('Shorten'))

    // error appears
    await waitFor(() => {
      expect(getByText('Please enter a valid URL')).toBeInTheDocument()
    })
  })
})
