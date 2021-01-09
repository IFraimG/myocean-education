import axios from "axios";

const getConfigAxios = axios.create({baseURL: "http://localhost:3000/pupil/api", method: "GET"})

const coursesRequests = {
  getCourses: async (userID: string) => {
    let res = await getConfigAxios.get(`/courses/courses?id=${userID}`)
    console.log(res);
    return res.data
  },
  getFinishedCourses: async (userID: string) => {
    let res = await getConfigAxios.get(`/courses/finishedCourses?id=${userID}`)
    console.log(res);
    return res.data
  },
  getCurrentCourse: async (courseID: string) => {
    let res = await getConfigAxios.get(`/courses/course?id=${courseID}`)
    console.log(res);
    return res.data
  },
  createCourse: async (courseData: any) => {
    let formData = new FormData()
    if (courseData.logo != "") formData.set("logo", courseData.logo, courseData.logo.name)
    formData.set("title", courseData.title)
    formData.set("description", courseData.description)
    formData.set("admin", courseData.admin)
    
    let res = await getConfigAxios.post("http://localhost:3000/courses/", formData, { headers: {"Content-Type": "multipart/form-data"}})
    return res.data
  }
};

export default coursesRequests;
