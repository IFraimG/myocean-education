import CourseInfo from "../../components/courses/CourseInfo"

const CoursePage = ({ courseData }: any) => {

  return <CourseInfo courseData={courseData} />
}

export async function getServerSideProps(ctx) {
  let res = await fetch("http://localhost:5000/api/auth/check", {method: "GET", headers: {"Authorization": "Bearer " + ctx.req.cookies.jwt}})
  let data = await res.json()
  if (data?.id == null) return {redirect: { destination: "/pupil/root", permament: false }}

  let courseData = await fetch(`http://localhost:5000/api/courses/full/${ctx.params.id}/${data.id}`, { method: "GET" })
  let courseDataJSON = await courseData.json()
  return {props: { foo: data, courseData: courseDataJSON }}
}


export default CoursePage;