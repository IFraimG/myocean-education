import { connect } from "react-redux";
import { AppType } from "../../store/redux-store";
import { getCoursesAction, getFinishedCourses, setPresentCoursesAction } from "../../store/actions/courses"
import RootCourses from "../../components/courses/root"

export interface coursesTypes {
  coursesList: Array<any>,
  finishedCourses: Array<any>,
  courseData: any,
  isPresentCourses: boolean,
  getCoursesAction: (userID: string) => void,
  getFinishedCourses: (userID: string) => void,
  setPresentCourses: (isPresentCourse: boolean) => void
}
const CoursesPage: React.FC<coursesTypes> = ({
  coursesList, finishedCourses, courseData, isPresentCourses, 
  getCoursesAction, getFinishedCourses, setPresentCourses
}) => {
  return (
    <RootCourses 
      coursesList={coursesList} 
      finishedCourses={finishedCourses} 
      courseData={courseData} 
      isPresentCourses={isPresentCourses} 
      getCoursesAction={getCoursesAction}
      getFinishedCourses={getFinishedCourses}
      setPresentCourses={setPresentCourses}
    />
  )
}

interface mapStateToPropsType {
  coursesList: Array<any>,
  finishedCourses: Array<any>,
  courseData: any,
  isPresentCourses: boolean
}
const mapStateToProps = (state: AppType): mapStateToPropsType => {
  return {
    coursesList: state.courses.coursesList,
    finishedCourses: state.courses.finishedCourses,
    courseData: state.courses.courseData,
    isPresentCourses: state.courses.isPresentCourses
  }
}

export default connect(mapStateToProps, {
  getCoursesAction, getFinishedCourses, setPresentCourses: setPresentCoursesAction
})(CoursesPage);