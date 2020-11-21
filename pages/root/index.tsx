// @ts-ignore
import Root from "../../components/root/root"
import { connect } from "react-redux"
import { courseType, getTasksThunk, getCurrentLessons, profileType } from "../../store/reducers/profile"
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import { useEffect } from "react";

type rootPropsType = {
  coursesList: Array<courseType>,
  profile: profileType,
  getTasksThunk: () => void,
  getCurrentLessons: (id: string) => void
}
const ContainerRoot: React.FC<rootPropsType> = ({coursesList, profile, getTasksThunk, getCurrentLessons}) => {
  useEffect(() => {
    getTasksThunk()
  }, [])
  return (
    <>
      <HeadComponent
        title="MyOcean Education"
        metaData={[
          {metaName: "description", contentData: "Главная страница образовательной платформы MyOcean Education"}
        ]} 
        linkData={[{}]} 
      />
      <Root profile={profile} coursesList={coursesList} getCurrentLessons={getCurrentLessons} />
    </>
  );
}

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

export default connect(mapStateToProps, { getTasksThunk, getCurrentLessons })(ContainerRoot)