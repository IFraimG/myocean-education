export enum appTypes {
  EDIT_HEADER_SUCCESS = "myocean/app/EDIT_HEADER_SUCCESS",
  EDIT_HEADER = "myocean/app/EDIT_HEADER",
  SET_MODALGO = "myocean/app/SET_MODALGO",
  SET_MODALGO_SUCCESS = "myocean/app/SET_MODALGO_SUCCESS"
}

export enum adminTypes {
  GET_ALL_USERS = "myocean/admin/GET_ALL_USERS",
  GET_CURRENT_USER = "myocean/admin/GET_CURRENT_USER",
  GET_CURRENT_USER_NAME = "myocean/admin/GET_CURRENT_USER_NAME",
  SET_CREATE_USER = "myocean/admin/SET_CREATE_USER",
  SET_SPLICE_LOADING = "myocean/admin/SET_SPLICE_LOADING",
  DELETE_USER = "myocean/admin/DELETE_USER",
  SET_CREATE_USER_SUCCESS = "myocean/admin/SET_CREATE_USER_SUCCESS",
  GET_ALL_USERS_SUCCESS = "myocean/admin/GET_ALL_USERS_SUCCESS",
  GET_CURRENT_USER_SUCCESS = "myocean/admin/GET_CURRENT_USER_SUCCESS",
  SET_ERROR = "myocean/admin/SET_ERROR",
  CLEAR_ERROR = "myocean/admin/CLEAR_ERROR",
  ADD_USER_COURSE = "myocean/admin/ADD_USER_COURSE",
  GET_ALL_COURSES = "myocean/admin/GET_ALL_COURSES",
  GET_ALL_COURSES_SUCCESS = "myocean/admin/GET_ALL_COURSES_SUCCESS",
  DELETE_COURSES = "myocean/admin/DELETE_COURSES"
}

export enum authTypes {
  SET_AUTH = "myocean/auth/SET_AUTH",
  USER_LOGOUT = "myocean/auth/USER_LOGOUT",
  CHECK_AUTH = "myocean/auth/CHECK_AUTH",
  SET_AUTH_SUCCESS = "myocean/auth/SET_AUTH_SUCCESS",
  SET_ERROR = "myocean/auth/SET_ERROR",
  REGISTATION_USER = "myocean/auth/REGISTATION_USER",
  REGISTATION_USER_SUCCESS = "myocean/auth/REGISTATION_USER_SUCCESS"
}

export enum profileTypes {
  GET_TASKS = "myocean/profile/GET_TASKS",
  GET_TASKS_SUCCESS = "myocean/profile/GET_TASKS_SUCCESS",
  GET_CURRENT_LESSONS = "myocean/profile/GET_CURRENT_LESSONS",
  GET_CURRENT_LESSONS_SUCCESS = "myocean/profile/GET_CURRENT_LESSONS_SUCCESS"
}

export enum coursesTypes {
  GET_COURSES = "myocean/courses/GET_COURSES",
  GET_COURSES_SUCCESS = "myocean/courses/GET_COURSES_SUCCESS",
  GET_FINISHED_COURSES = "myocean/courses/GET_FINISHED_COURSE",
  GET_FINISHED_COURSES_SUCCESS = "myocean/courses/GET_FINISHED_COURSES_SUCCESS",
  SET_PRESENT_COURSES = "myocean/courses/SET_PRESENT_COURSES",
  GET_CURRENT_COURSE = "myocean/courses/GET_CURRENT_COURSE",
  GET_CURRENT_COURSE_SUCCESS = "myocean/courses/GET_CURRENT_COURSE_SUCCESS",
  CREATE_COURSE = "myocean/courses/GET_CREATE_COURSE",
  CREATE_COURSE_SUCCESS = "myocean/courses/GET_CREATE_COURSE_SUCCESS"
}