import dynamic from "next/dynamic"
import { Card, Calendar } from "antd"
import styles from "../../styles/pupil/root.module.scss";
import TasksRoot from "./TasksRoot";
import LessonsList from "./LessonsList";
import NewsList from "./NewsList";

import AwardsList from "./AwardsList"

function Root(props) {
  return (
    <div>
      <div>
      <TasksRoot {...props} />
      </div>
      <div className={styles.root__middle}>
        <div className={styles.root__left}>
          <LessonsList />
          <NewsList news={props.profile.news} />
        </div>
        <div className={styles.root__right}>
          <Calendar fullscreen={false} locale={{lang: {locale: "ru_RU"}}} className={styles.root__calendar} mode="month" />
          <AwardsList awards={props.profile.awards} />
        </div>
      </div>
    </div>
  )
}

export default Root;
