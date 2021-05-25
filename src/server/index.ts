import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'

export const db = new PrismaClient()

export function md5(text: string, slice = 6) {
  return createHash('md5').update(text).digest('hex').slice(0, slice)
}
