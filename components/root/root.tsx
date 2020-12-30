import { Calendar } from "antd"
import styles from "../../styles/pupil/root.module.scss";
// @ts-ignore
import TasksRoot from "./TasksRoot";
// @ts-ignore
import LessonsList from "./LessonsList";
import NewsList from "./NewsList";
import AwardsList from "./AwardsList"
import { courseType, profileType } from "../../store/reducers/profile";

interface RootTypes {
  coursesList: Array<courseType>,
  profileData: profileType,
  getCurrentLessonsAction: (courseID: string) => void
}
const Root: React.FC<RootTypes> = ({profileData, coursesList, getCurrentLessonsAction}) => {
  return (
    <div>
      <div>
      <TasksRoot profile={profileData} coursesList={coursesList} getCurrentLessonsAction={getCurrentLessonsAction} />
      </div>
      <div className={styles.root__middle}>
        <div className={styles.root__left}>
          <LessonsList />
          <NewsList news={profileData.news} />
        </div>
        <div className={styles.root__right}>
          {/* @ts-ignore */}
          <Calendar fullscreen={false} locale={{lang: {locale: "ru_RU"}}} className={styles.root__calendar} mode="month" />
          <AwardsList awards={profileData.awards} />
        </div>
      </div>
    </div>
  )
}

export default Root;
