import { useRouter } from "next/router"
import { DashboardOutlined, FlagOutlined } from "@ant-design/icons"
import { Tabs, Empty, PageHeader, Card, Tag } from "antd"
import { useEffect } from "react"
import styles from "../../styles/courses/Courses.module.scss"
import CourseItem from "./CourseItem"
import Link from "next/link"

const CoursesList: React.FC<any> = ({
  coursesList, finishedCourses, courseData, isPresentCourses, 
  getCoursesAction, getFinishedCourses, setPresentCourses, userID
}) => {
  const router = useRouter()
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
            { 
              coursesList.map((item: any, index: number) => {
                return (
                  <Card
                    title={<Link href={"/courses/" + item.courseID}>{item.title}</Link>}
                    extra={
                      <Tag className={styles.courses__tag} color="green">
                        Основной курс
                      </Tag>
                    }
                    className={styles.courses__card}
                    >
                    <CourseItem key={index} courseData={item} />
                  </Card>
                )
              }) 
            }
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