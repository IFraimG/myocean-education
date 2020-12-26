import jsonwebtoken from "jsonwebtoken"

export default async function handler(req, res) {
  try {
    const token = jsonwebtoken.verify(req.cookies["jwt"], process.env.SECRET_KEY)
    if (token.email) res.status(200).end(JSON.stringify(token))
    else res.status(401).end("Not auth")
  } catch (error) {
    console.log(error);
    res.status(401).end("Not auth")
  }
}
