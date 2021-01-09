import { useRouter } from "next/router"
import { DashboardOutlined, FlagOutlined } from "@ant-design/icons"
import { Tabs, Empty, PageHeader } from "antd"
import { useEffect } from "react"
import { coursesTypes } from "../../pages/courses"
import styles from "../../styles/courses/Courses.module.scss"
import CourseItem from "./CourseItem"

const CoursesList: React.FC<coursesTypes> = ({
  coursesList, finishedCourses, courseData, isPresentCourses, 
  getCoursesAction, getFinishedCourses, setPresentCourses
}) => {
  const router = useRouter()
  useEffect(() => {
    if (isPresentCourses) getCoursesAction()
    else getFinishedCourses()
  }, [isPresentCourses])
  return (
    <div className={styles.courses__wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push("/root")}
        title="Мои курсы"
        ghost={false}
      />
      <Tabs className={styles.courses__tabs} defaultActiveKey="1" onChange={setPresentCourses}>
        <Tabs.TabPane tab={
          <span>
            <DashboardOutlined className={styles.courses__tabs__logo} />
            <span className={styles.courses__tabs__title}>Начатые курсы</span>
          </span>
        }
          key="1">
        { coursesList.length > 0 ?
          <div className={styles.courses__list}>
            <CourseItem courseData={courseData} />
          </div>
        : <Empty className={styles.courses__null} description="В данный момент вы не проходите никаких курсов" /> }
        </Tabs.TabPane>
        <Tabs.TabPane tab={
          <span>
            <FlagOutlined className={styles.courses__tabs__logo} />
            <span className={styles.courses__tabs__title}>Законченные курсы</span>
          </span>
        } key="2">
          { coursesList.length > 0 ?
            <div className={styles.courses__list}>
              <CourseItem courseData={courseData} />
            </div>
          : <Empty className={styles.courses__null} description="Вы еще не прошли никакие курсы" /> }
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}
  
export default CoursesList