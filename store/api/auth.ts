import { serverAxiosConfig } from './users';
import { userLogin, userRegistation } from './../reducers/auth';
import axios from "axios";
import Cookies from "js-cookie"

const authRequests = {
  login: async (user: userLogin) => {
    let res = await serverAxiosConfig.post("/auth/login", {username: user.email, password: user.password})
    return res
  },
  checkAuth: async () => {
    try {
      let token = Cookies.get("jwt")
      let res = await serverAxiosConfig.get("/auth/check", {headers: {"Authorization": token}})
      console.log(res);
      
      if (res.status == 200) return true
      else return false
    } catch (error) {
      if (error.message == "Request failed with status code 401") return false
    }
  },
  getUserId: async () => {
    try {
      let res = await axios.get("/pupil/api/auth/checkauth")
      return res.data
    } catch (error) {
      console.log(error);
    }
  },
  registration: async (userData: userRegistation) => {
    try {
      let res = await serverAxiosConfig.post("/auth/create", userData)
      return res
    } catch (error) {
      console.log(error);
    }
  }
}

export default authRequests;