
export type coursesFullType = {
  title: string,
  courseID: string,
  author: string
}
export type courseType = {
  title: string,
  courseID: string,
  author: string,
  id: number | string,
  type: string,
  date: any,
  timeEnd: any
}
export type NewsData = {
  date: string,
  title: string | null,
  description: string,
  id: string,
  links: any
}
export type awardType = {
  title: string,
  date: string,
  src: string
}
export type profileType = {
  courses: Array<coursesFullType>,
  news: Array<NewsData> | null,
  awards: Array<awardType> | null,

}

export interface stateProfileType {
  coursesList: Array<courseType>,
  profileData: profileType
};