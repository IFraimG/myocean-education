import { connect } from "react-redux";
// @ts-ignore
import WithHead from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import { getCoursesAction, getFinishedCourses, setPresentCoursesAction } from "../../store/actions/courses"
import RootCourses from "../../components/courses/root"
import { useEffect } from "react";

export interface coursesTypes {
  coursesList: Array<any>,
  finishedCourses: Array<any>,
  courseData: any,
  isPresentCourses: boolean,
  getCoursesAction: () => void,
  getFinishedCourses: () => void,
  setPresentCourses: (isPresentCourse: boolean | string) => void
}
const CoursesPage: React.FC<coursesTypes> = ({
  coursesList, finishedCourses, courseData, isPresentCourses, 
  getCoursesAction, getFinishedCourses, setPresentCourses
}) => {
  useEffect(() => {
    getCoursesAction()
  }, [])
  return (
    <>
    <WithHead title="MyOceanEducation - курсы" />
    <RootCourses 
      coursesList={coursesList} 
      finishedCourses={finishedCourses} 
      courseData={courseData} 
      isPresentCourses={isPresentCourses} 
      getCoursesAction={getCoursesAction}
      getFinishedCourses={getFinishedCourses}
      setPresentCourses={setPresentCourses}
    />
    </>
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