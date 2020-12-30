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
  }
};

export default coursesRequests;
