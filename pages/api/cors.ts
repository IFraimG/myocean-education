import { NextApiResponse, NextApiRequest } from 'next';
import Cors from "cors";

const initMiddleware = (middleware: any) => {
  return (req: NextApiRequest, res: NextApiResponse) => new Promise((resolve, reject) => {
    middleware(req, res, (result: any) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cors = initMiddleware(Cors({ methods: ["GET", "POST", "PUT", "DELETE", "HEAD"] }))
  await cors(req, res)
}
