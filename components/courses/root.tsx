import { Card, Tag } from "antd"
import { coursesTypes } from "../../pages/courses"
import styles from "../../styles/courses/Courses.module.scss"

const CoursesList: React.FC<coursesTypes> = ({
  // coursesList, finishedCourses, courseData, isPresentCourses, 
  // getCoursesAction, getFinishedCourses, setPresentCourses
}) => {
  return (
    <div className={styles.courses__wrapper}>
      <div className={styles.courses__title}></div>
      <div className={styles.courses__tabs}></div>
      <div className={styles.courses__list}>
        <Card title="Программирование C++" extra={
          <Tag color="green">Основной курс</Tag>
        } className={styles.courses__card}>
          <div className={styles.courses__inner}>
            <div className={styles.courses__top}>
              <div className={styles.courses__left}>
                <img className={styles.courses__logo} src="/pupil/cpp.png" alt="logo" />
              </div>
              <div className={styles.courses__middle}>

              </div>
              <div className={styles.courses__right}>

              </div>
            </div>
            <div className={styles.courses__bottom}>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
  
export default CoursesList