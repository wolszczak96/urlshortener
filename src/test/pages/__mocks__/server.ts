import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
  rest.post('/api', (_req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.status(200),
      ctx.text('http://localhost:8080/f3a708'),
    )
  }),
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())
