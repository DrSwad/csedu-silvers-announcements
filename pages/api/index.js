// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import announceInClassroom from "../../helpers/classroom"

export default async function handler(req, res) {
  console.log(req)
  // await announceInClassroom('New classroom announcement')
  res.status(200).send(req.query['hub.challenge'])
}
