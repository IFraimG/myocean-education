import { courseType } from './../reducers/profile';
import { profileTypes } from "../types"

// middleware
export type getTasksActionType = { type: typeof profileTypes.GET_TASKS}
export const getTasksAction = (): getTasksActionType => ({type: profileTypes.GET_TASKS})

export type getCurrentLessonsType = { type: typeof profileTypes.GET_CURRENT_LESSONS, payload: string}
export const getCurrentLessonsAction = (id: string): getCurrentLessonsType => ({type: profileTypes.GET_CURRENT_LESSONS, payload: id})


// success 
export type getTasksActionSuccessType = { type: typeof profileTypes.GET_TASKS_SUCCESS, payload: Array<courseType>}
export const getTasksActionSuccess = (data: Array<courseType>): getTasksActionSuccessType => ({type: profileTypes.GET_TASKS_SUCCESS, payload: data})

// type getCurrentLessonsActionSuccessType = { type: typeof profileTypes.GET_CURRENT_LESSONS_SUCCESS, payload: Array<courseType>}
// export const getCurrentLessonsActionSuccess = (data: Array<courseType>): getCurrentLessonsActionSuccessType => ({type: profileTypes.GET_CURRENT_LESSONS_SUCCESS, payload: data})
