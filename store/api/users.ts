import axios from "axios";

const getConfigAxios = axios.create({
  baseURL: "http://localhost:3000/pupil/api",
  withCredentials: true,
})

const usersRequests = {
  createUser: async (usersData: any) => {
    let res = await axios.post("http://localhost:3000/users", usersData)
    return res
  },
  getAllUsers: async () => {
    let res = await getConfigAxios.get("/users/all")
    return res.data
  },
  getCurrentUser: async (userID: string) => {
    let res = await getConfigAxios.get(`/users/getUserID?id=${userID}`)
    return res.data
  },
  getUserName: async (fullName: any) => {
    let res = await getConfigAxios.get(`/users/getUserName?firstname=${fullName.firstname}&lastname=${fullName.lastname}`)
    return res.data
  },
  dropUser: async (usersID: Array<string>) => {
    let res = await axios.delete("http://localhost:3000/users/", {data: {usersID: usersID}})
    return res
  }
}

export default usersRequests;