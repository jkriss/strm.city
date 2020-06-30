import { NowRequest, NowResponse } from '@vercel/node'

function firstOrVal(input: string | string[]) {
  return Array.isArray(input) ? input[0] : input
}

export default (req:NowRequest, res:NowResponse) => {

  res.setHeader('Access-Control-Allow-Origin', '*')

  const name = firstOrVal(req.query.stream)
  const postID = firstOrVal(req.query.id)
  const user = firstOrVal(req.query.user)
  const stream = name ? { name, postID, user } : undefined

  res.json({
    stream,
    method: req.method,
    body: req.body,
    query: req.query
  })
}
