import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import WithHead from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import RootCourses from "../../components/courses/root"
import { coursesTypes } from "../../store/types";
import { getCoursesType, getFinishedCoursesType, setPresentCoursesType } from "../../store/actions/courses";

const CoursesPage = () => {
  const { coursesList, finishedCourses, courseData, isPresentCourses } = useSelector((state: AppType) => state.courses)
  const dispatch = useDispatch()

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

export async function getServerSideProps(ctx: any) {
  let res = await fetch("http://localhost:5000/api/auth/check", {method: "GET", headers: {"Authorization": "Bearer " + ctx.req.cookies.jwt}})
  let data = await res.json()
  if (data?.id == null) return {redirect: { destination: "/pupil/auth", permament: false }}
  return {props: { foo: data }}
}

export default CoursesPage
