import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import Student from "../../../server/models/Students";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let user = await Student.findOne({where: {firstName: req.query.firstname, lastName: req.query.lastname}})
  if (user == null) res.status(404).send("Данного пользователя не существует")
  else res.send(user)
}