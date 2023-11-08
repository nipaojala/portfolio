import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma'
import { fullData } from '@/fixtures'

// POST /api/post

export async function getTextInfo(res: NextApiResponse) {
  const result = await prisma.user.findUnique({
    where: { email: 'nipa.ojala@gmail.com' },
  })
  res.json(result)
}

export async function updateTextInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.user.update({
    where: { email: 'nipa.ojala@gmail.com' },
    data: req.body,
  })
  console.log(result)
  res.json(result)
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method)
  if (req.method === 'GET') {
    // return await getTextInfo(res)
    return fullData
  } else if (req.method === 'POST') {
    return await updateTextInfo(req, res)
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
