// @ts-ignore
import Root from "../../components/root/root"
import { connect } from "react-redux"
import { courseType, profileType } from "../../store/reducers/profile"
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import { getTasksAction, getCurrentLessonsAction } from "../../store/actions/profile";
import wrapperStore from "../../store/redux-store"

type rootPropsType = {
  coursesList: Array<courseType>,
  profileData: profileType,
  getCurrentLessonsAction: (courseID: string) => void,
  getTasksAction: () => void
} 
const ContainerRoot: React.FC<rootPropsType> = ({coursesList, profileData, getCurrentLessonsAction}) => {
  return (
    <>
      <HeadComponent
        title="MyOcean Education"
        metaData={[
          {metaName: "description", contentData: "Главная страница образовательной платформы MyOcean Education"}
        ]} 
        linkData={[{}]} 
      />
      <Root profileData={profileData} coursesList={coursesList} getCurrentLessonsAction={getCurrentLessonsAction} />
    </>
  );
}

export const getStaticProps = wrapperStore.getStaticProps(async ({store}) => {
  store.dispatch(getTasksAction())
})

type mapStateToPropsType = {
  coursesList: Array<courseType>,
  profileData: profileType
}

const mapStateToProps = (state: AppType): mapStateToPropsType => {
  return {
    coursesList: state.profile.coursesList,
    profileData: state.profile.profileData
  }
}

export default connect(mapStateToProps, {getCurrentLessonsAction, getTasksAction})(ContainerRoot)