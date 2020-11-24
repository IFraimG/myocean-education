import axios from "axios";

const getConfigAxios = axios.create({
  baseURL: "http://localhost:3000/pupil/api",
  withCredentials: true
})

const usersRequests = {
  createUser: async (usersData: any) => {
    let res = await axios.post("http://localhost:3000/users/", usersData)
    return res
  },
  getAllUsers: async () => {
    let res = await getConfigAxios.get("/users/all")
    return res.data
  },
  getCurrentUser: async (userID: string) => {
    let res = await axios.get("http://localhost:3000/users/" + userID)
    return res.data
  },
  dropUser: async (usersID: Array<string>) => {
    let res = await axios.delete("http://localhost:3000/users/", {data: {usersID: usersID}})
    return res
  }
}

export default usersRequests;