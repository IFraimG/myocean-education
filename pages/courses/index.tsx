import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import WithHead from "../../components/withHead"
import wrapperStore, { AppType } from "../../store/redux-store";
import RootCourses from "../../components/courses/root"
import { GetServerSideProps } from "next";
import { coursesTypes } from "../../store/types";
import { getCoursesType, getFinishedCoursesType, setPresentCoursesType } from "../../store/actions/courses";
import { checkAuthAction } from "../../store/actions/auth";

const CoursesPage = (props) => {
  const { coursesList, finishedCourses, courseData, isPresentCourses } = useSelector((state: AppType) => state.courses)
  const dispatch = useDispatch()
  console.log(props);
  
  const getCoursesAction = (userID: string): getCoursesType => dispatch({ type: coursesTypes.GET_COURSES, payload: userID })
  const getFinishedCourses = (userID: string): getFinishedCoursesType => dispatch({ type: coursesTypes.GET_FINISHED_COURSES, payload: userID })
  const setPresentCourses = (): setPresentCoursesType => dispatch({ type: coursesTypes.SET_PRESENT_COURSES })
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

export async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/pupil/api/checkauth", {method: "GET"})
  let data = await res.json()
  if (!data.isAuth) return {redirect: { destination: "/pupil/auth", permament: false }}
  return {props: { foo: data }}
}

export default CoursesPage
