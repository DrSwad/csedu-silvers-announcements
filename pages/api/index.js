// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import announceInDiscord from "../../helpers/discord"

export default function handler(req, res) {
  announceInDiscord('New discord announcement')
  res.status(200).send('Request received')
}
