import jsonwebtoken from "jsonwebtoken"

export async function jwtVerify(req, res) {
  try {
    const token = jsonwebtoken.verify(req.cookies["jwt"], process.env.SECRET_KEY)
    if (token.email) return token.email
  } catch (error) {
    console.log(error);
    return error.message
  }
}
