import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let result = await fetch("http://localhost:5000/api/auth/check", {method: "GET", headers: {"Authorization": "Bearer " + req.cookies["jwt"]}})
    let isAuth = await result.json()
    if (isAuth.statusCode == 401) res.json({isAuth: false})
    else res.json({...isAuth.data, isAuth: true})
  } catch (error) {
    res.json(error)
  }
}
  