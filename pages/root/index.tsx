// @ts-ignore
import Root from "../../components/root/root"
import { connect } from "react-redux"
import { courseType, profileType } from "../../store/reducers/profile"
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import { getTasksAction } from "../../store/actions/profile";
import wrapperStore from "../../store/redux-store"

type rootPropsType = {
  coursesList: Array<courseType>,
  profile: profileType
} 
const ContainerRoot: React.FC<rootPropsType> = ({coursesList, profile}) => {
  return (
    <>
      <HeadComponent
        title="MyOcean Education"
        metaData={[
          {metaName: "description", contentData: "Главная страница образовательной платформы MyOcean Education"}
        ]} 
        linkData={[{}]} 
      />
      <Root profile={profile} coursesList={coursesList} />
    </>
  );
}

export const getStaticProps = wrapperStore.getStaticProps(async ({store}) => {
  store.dispatch(getTasksAction())
})

type mapStateToPropsType = {
  coursesList: Array<courseType>,
  profile: profileType
}

const mapStateToProps = (state: AppType): mapStateToPropsType => {
  return {
    coursesList: state.profile.coursesList,
    profile: state.profile.profile
  }
}

export default connect(mapStateToProps)(ContainerRoot)