import Students from "../../../server/models/Students"

export default async (req, res) => {
    let users = await Students.findAll()
    console.log(users);
    if (users == null) res.status(404).send("Пользователей не нашлось")
    else res.status(200).send(users)
}