import { db, md5 } from '@/server'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const {
    body: { url },
  } = req
  const hash = md5(url)

  await db.url.upsert({
    where: { hash },
    create: { hash, url },
    update: { url },
  })

  res.status(200).send(`http://localhost:8080/${hash}`)
}
