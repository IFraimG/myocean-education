import { HYDRATE } from 'next-redux-wrapper';
import { coursesTypes } from '../types';

export interface courseStateType {
  coursesList: Array<any>,
  finishedCourses: Array<any>,
  courseData: any | null,
  isPresentCourses: boolean
}
const defaultState: courseStateType = {
  coursesList: [],
  finishedCourses: [],
  courseData: null,
  isPresentCourses: true
}

const CourseReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case HYDRATE: return { ...state, ...action.payload.courses }
    case coursesTypes.SET_PRESENT_COURSES: return { ...state, isPresentCourses: !state.isPresentCourses }
    case coursesTypes.GET_COURSES_SUCCESS: return { ...state, coursesList: action.payload }
    case coursesTypes.GET_FINISHED_COURSES_SUCCESS: return { ...state, finishedCourses: action.payload }
    case coursesTypes.GET_CURRENT_COURSE_SUCCESS: return { ...state, courseData: action.payload }
    default: return { ...state }
  }
}

export default CourseReducer