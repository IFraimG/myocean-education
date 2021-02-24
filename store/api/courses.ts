import { serverAxiosConfig } from './users';

const coursesRequests = {
  getCourses: async (userID: string) => {
    let res = await serverAxiosConfig.get(`/courses/user/${userID}`)
    return res.data
  },
  getAllCourses: async () => {
    let res = await serverAxiosConfig.get("/courses/all")
    return res.data
  },
  getFinishedCourses: async (userID: string) => {
    let res = await serverAxiosConfig.get(`/courses/user/finish/${userID}`)
    console.log(res);
    return res.data
  },
  getCurrentCourse: async (courseID: string) => {
    let res = await serverAxiosConfig.get(`/courses/current?id=${courseID}`)
    console.log(res);
    return res.data
  },
  createCourse: async (courseData: any) => {
    let formData = new FormData()
    if (courseData.logo != "") formData.set("logo", courseData.logo, courseData.logo.name)
    formData.set("title", courseData.title)
    formData.set("description", courseData.description)
    formData.set("admin", courseData.admin)
    
    let res = await serverAxiosConfig.post("/courses/create", formData, { headers: {"Content-Type": "multipart/form-data"}})
    return res.data
  },
  deleteCourses: async (coursesData: any) => {
    let res = await serverAxiosConfig.delete("/courses/delete", {data: {coursesData}})
    return res
  },
  addUserToCourse: async ({userID, courseID}: any) =>{
    try {
      let res = await serverAxiosConfig.put("/courses/addTo", {data: {userID, courseID}})
      return res
    } catch (error) {
      return error.message
    }
  }
};

export default coursesRequests;
