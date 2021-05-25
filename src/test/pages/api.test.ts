import { queryApiHandler } from '../testUtils'
import generateUrl from '@/pages/api'
import resolveShortUrl from '@/pages/api/[hash]'
import { LONG_URL, SHORT_URL } from '../constants'

describe('/api', () => {
  test('generates short url', async () => {
    const response = await queryApiHandler(generateUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: LONG_URL }),
    })

    expect(response.status).toBe(200)

    const shortUrl = await response.text()
    expect(shortUrl).toBe(SHORT_URL)
  })
})

describe('/api/[hash]', () => {
  test('redirects to long url', async () => {
    const response = await queryApiHandler(resolveShortUrl, undefined, {
      hash: SHORT_URL.replace(/.+\//, ''),
    })

    expect(response.redirected).toBe(true)
    expect(response.url).toBe(LONG_URL)
  })
})
