import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import WithHead from "../../components/withHead"
import wrapperStore, { AppType } from "../../store/redux-store";
import RootCourses from "../../components/courses/root"
import { coursesTypes } from "../../store/types";
import { getCoursesAction, getCoursesType, getFinishedCoursesType, setPresentCoursesType } from "../../store/actions/courses";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

const CoursesPage = ({foo}: any | undefined) => {
  const { coursesList, finishedCourses, courseData, isPresentCourses } = useSelector((state: AppType) => state.courses)
  const dispatch = useDispatch()
  const getCourses = (userID: string): getCoursesType => dispatch(getCoursesAction(userID))
  const getFinishedCourses = (userID: string): getFinishedCoursesType => dispatch({ type: coursesTypes.GET_FINISHED_COURSES, payload: userID })
  const setPresentCourses = (): setPresentCoursesType => dispatch({ type: coursesTypes.SET_PRESENT_COURSES })

  useEffect(() => {
    if (foo != undefined) getCourses(foo.id)
  }, [])

  useEffect(() => {
    if (isPresentCourses) getCoursesAction(foo.id)
    else getFinishedCourses(foo.id)
  }, [isPresentCourses])
  
  return (
    <>
    <WithHead title="MyOceanEducation - курсы" />
    <RootCourses 
      coursesList={coursesList} 
      finishedCourses={finishedCourses} 
      userID={foo.id}
      courseData={courseData} 
      isPresentCourses={isPresentCourses} 
      getCoursesAction={getCourses}
      getFinishedCourses={getFinishedCourses}
      setPresentCourses={setPresentCourses}
    />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapperStore.getServerSideProps(async (ctx: any) => {
  let res = await fetch("http://localhost:5000/api/auth/check", {method: "GET", headers: {"Authorization": "Bearer " + ctx.req.cookies.jwt}})
  let data = await res.json()
  if (data?.id == null) return {redirect: { destination: "/pupil/auth", permament: false }}
  return {props: { foo: data }}
})

export default CoursesPage
