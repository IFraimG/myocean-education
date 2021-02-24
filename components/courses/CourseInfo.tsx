import { Breadcrumb, Card, Tabs } from "antd"
import Link from "next/link"
import { useState } from "react"
import s from "../../styles/courses/CoursesInfo.module.scss"
import CourseItem from "./CourseItem"
import CourseLessons from "./CourseLessons"

interface CourseTypes {
  courseData: any
}
const CourseInfo: React.FC<CourseTypes> = ({ courseData }) => {
  const [part, setPart] = useState<string>("1")

  const editPart = (key: string) => {
    // acitons
    setPart(key)
  }
  return (
    <div className={s.course__wrapper}>
      <Card 
        title={
          <Breadcrumb className={s.course__breadcrumb}>
            <Breadcrumb.Item>
              <Link href="/courses">Курсы</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={"/courses/" + courseData.courseID}>{courseData.title}</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        }
        extra={
          <Tabs type="card" defaultActiveKey="1" onChange={editPart}>
            <Tabs.TabPane tab="1 часть" key="1"></Tabs.TabPane>
            <Tabs.TabPane tab="2 Часть" key="2"></Tabs.TabPane>
          </Tabs>
        }
      >
        <CourseItem courseData={courseData} />
      </Card>
      <h2 className={s.course__date}>Занятия с 01.02.2021 по 31.05.2021</h2>
      <CourseLessons lessons={courseData.lessons} />
    </div>
  )
}

export default CourseInfo