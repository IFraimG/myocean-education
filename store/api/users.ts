import axios from "axios";

export const serverAxiosConfig = axios.create({ baseURL: "http://localhost:5000/api" })

const usersRequests = {
  createUser: async (usersData: any) => {
    let res = await serverAxiosConfig.post("/auth/create", usersData)
    return res
  },
  getAllUsers: async () => {
    let res = await serverAxiosConfig.get("/users/all")
    return res.data
  },
  getCurrentUser: async (userID: string) => {
    let res = await serverAxiosConfig.get(`/users/id?userID=${userID}`)
    console.log(res.data);
    
    return res.data
  },
  getUserName: async (fullName: any) => {
    let res = await serverAxiosConfig.get(`/users/name?firstname=${fullName.firstname}&lastname=${fullName.lastname}`)
    return res.data
  },
  dropUser: async (usersID: Array<string>) => {
    let res = await serverAxiosConfig.delete("/users/delete", {params: {usersID}})
    return res
  }
}

export default usersRequests;