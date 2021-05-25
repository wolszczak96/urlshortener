/* eslint-disable import/export */

import { render } from '@testing-library/react'
import { CssBaseline } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import { NextApiHandler } from 'next'
import { apiResolver } from 'next/dist/next-server/server/api-utils'
import http, { IncomingMessage, ServerResponse } from 'http'
import listen from 'test-listen'
import fetch, { RequestInit } from 'node-fetch'

export async function queryApiHandler(
  handler: NextApiHandler,
  init?: RequestInit,
  query: Record<string, string> = {},
) {
  const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
    return apiResolver(req, res, query, handler, {} as any, false)
  }

  const server = http.createServer(requestHandler as any)
  const url = await listen(server)

  const response = await fetch(url, init)

  server.close()
  // await new Promise((resolve, reject) =>
  //   server.close((error) => (error ? reject(error) : resolve())),
  // )

  return response
}

const Providers: React.FC = ({ children }) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    {children}
  </StylesProvider>
)

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
// override render method
export { customRender as render }
