// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import announceInClassroom from "../../helpers/classroom"

export default async function handler(req, res) {
  await announceInClassroom('New classroom announcement')
  res.status(200).send('Announcements sent successfully')
}
