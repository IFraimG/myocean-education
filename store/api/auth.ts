import { userLogin } from './../reducers/auth';
import axios from "axios";

const getConfigAxios = axios.create({
  baseURL: "http://localhost:3000",
  method: "GET",
  withCredentials: true,
})

const authRequests = {
  login: async (usersData: userLogin) => {
    let res = await axios.post("http://localhost:3000/auth/login", usersData)
    return res
  },
  checkAuth: async () => {
    try {
      let res = await axios.get("/check-auth")
      if (res.status == 200) return true
    } catch (error) {
      if (error.message == "Request failed with status code 401") return false
    }
  }
}

export default authRequests;