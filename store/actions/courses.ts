import { coursesTypes } from "../types";

// middlware
export type getCoursesType = {type: typeof coursesTypes.GET_COURSES, payload: string}
export const getCoursesAction = (userID: string): getCoursesType => ({type: coursesTypes.GET_COURSES, payload: userID})

export type getFinishedCoursesType = {type: typeof coursesTypes.GET_FINISHED_COURSES, payload: string}
export const getFinishedCourses = (userID: string): getFinishedCoursesType => ({type: coursesTypes.GET_FINISHED_COURSES, payload: userID})

export type getCurrentCourseType = {type: typeof coursesTypes.GET_CURRENT_COURSE, payload: string}
export const getCurrentCourse = (courseID: string): getCurrentCourseType => ({type: coursesTypes.GET_CURRENT_COURSE, payload: courseID})

export type createCourseType = {type: coursesTypes.CREATE_COURSE, payload: any}
export const createCourse = (courseData: any): createCourseType => ({type: coursesTypes.CREATE_COURSE, payload: courseData})

export type setPresentCoursesType = {type: typeof coursesTypes.SET_PRESENT_COURSES}
export const setPresentCoursesAction = (): setPresentCoursesType => ({type: coursesTypes.SET_PRESENT_COURSES})

// success
export type getCoursesSuccessType = {type: typeof coursesTypes.GET_COURSES_SUCCESS, payload: Array<any>}
export const getCoursesSuccess = (coursesList: Array<any>): getCoursesSuccessType => ({type: coursesTypes.GET_COURSES_SUCCESS, payload: coursesList})

export type getFinishedCoursesSuccessType = {type: typeof coursesTypes.GET_FINISHED_COURSES_SUCCESS, payload: Array<any>}
export const getFinishedCoursesSuccess = (finishedCourses: Array<any>): getFinishedCoursesSuccessType => ({type: coursesTypes.GET_FINISHED_COURSES_SUCCESS, payload: finishedCourses})

export type getCourseSuccessType = {type: typeof coursesTypes.GET_CURRENT_COURSE_SUCCESS, payload: any}
export const getCourseSuccess = (courseData: any): getCourseSuccessType => ({type: coursesTypes.GET_CURRENT_COURSE_SUCCESS, payload: courseData})

export type createCourseSuccessType = {type: coursesTypes.CREATE_COURSE_SUCCESS, payload: any}
export const createCourseSuccess = (courseData: any): createCourseSuccessType => ({type: coursesTypes.CREATE_COURSE_SUCCESS, payload: courseData})