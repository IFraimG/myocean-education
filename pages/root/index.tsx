// @ts-ignore
import Root from "../../components/root/root"
import { useDispatch, useSelector } from "react-redux"
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import { getCurrentLessonsAction, getTasksAction } from "../../store/actions/profile";
import wrapperStore from "../../store/redux-store"

const ContainerRoot = () => {
  const dispatch = useDispatch()
  const { coursesList, profileData } = useSelector((state: AppType) => state.profile)

  const getCurrentLessons = (id: string) => dispatch(getCurrentLessonsAction(id))
  return (
    <>
      <HeadComponent
        title="MyOcean Education"
        metaData={[
          {metaName: "description", contentData: "Главная страница образовательной платформы MyOcean Education"}
        ]} 
        linkData={[{}]} 
      />
      <Root profileData={profileData} coursesList={coursesList} getCurrentLessonsAction={getCurrentLessons} />
    </>
  );
}

export const getServerSideProps = wrapperStore.getServerSideProps(async (ctx: any) => {
  let res = await fetch("http://localhost:5000/api/auth/check", {method: "GET", headers: {"Authorization": "Bearer " + ctx.req.cookies.jwt}})
  let data = await res.json()
  if (data?.id == null) return {redirect: { destination: "/pupil/auth", permament: false }}

  ctx.store.dispatch(getTasksAction())
  return {props: { foo: data }}
})

export default ContainerRoot