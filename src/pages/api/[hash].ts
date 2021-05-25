import { db } from '@/server'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const hash = req.query.hash as string

  const urlObject = await db.url.findUnique({
    where: { hash },
  })

  if (urlObject) {
    res.redirect(urlObject.url)
  } else {
    res.status(404).end()
  }
}
