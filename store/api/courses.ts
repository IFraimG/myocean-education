import { serverAxiosConfig } from './users';

const coursesRequests = {
  getCourses: async (userID: string) => {
    let res = await serverAxiosConfig.get(`/courses/courses?id=${userID}`)
    console.log(res);
    return res.data
  },
  getFinishedCourses: async (userID: string) => {
    let res = await serverAxiosConfig.get(`/courses/finish?id=${userID}`)
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
  }
};

export default coursesRequests;
