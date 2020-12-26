import { userLogin } from './../reducers/auth';
import axios from "axios";

const getConfigAxios = axios.create({
  baseURL: "http://localhost:3000",
  method: "GET",
  withCredentials: true,
})

const authRequests = {
  login: async (usersData: userLogin) => {
    let res = await axios.get(`/pupil/api/auth/login/?email=${usersData.email}&password=${usersData.password}&remember=${usersData.remember}`)
    return res
  },
  checkAuth: async () => {
    try {
      let res = await axios.get("/pupil/api/auth/checkauth")
      
      if (res.status == 200) return true
      else return false
    } catch (error) {
      if (error.message == "Request failed with status code 401") return false
    }
  }
}

export default authRequests;