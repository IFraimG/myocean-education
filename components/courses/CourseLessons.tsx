import { Progress, Table, Tag, Tooltip } from "antd"
import { useRouter } from "next/router"
import s from "../../styles/courses/CoursesInfo.module.scss"

interface LessonsType {
  lessons: Array<any> | null
}
const CourseLessons: React.FC<LessonsType> = ({ lessons }) => {
  const router = useRouter()
  const tableHandler = (record: any, rowIndex: number) => {
    return {onClick: () => router.push(`/courses/lessons/${record.lessonID}`)}
  }

  const columnsData = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: "date"
    },
    {
      title: 'Темы',
      dataIndex: 'title',
      key: "title"
    },
    {
      title: 'Оценки',
      dataIndex: 'marks',
      key: "marks",
      render: (marks: Array<any>) => {
        return marks.map((item: any, index: number) => {
          return (
            <Tooltip key={item.type} placement="top" title={item.type + " за " + item.date}>
              <Tag color="orange">{item.mark}</Tag>
            </Tooltip>
          )
        })
      }
    },
    {
      title: "Задания",
      dataIndex: "tasks",
      key: "tasks",
      render: (tasks: Array<any>) => {
        return tasks.map(item => {
          return (
            <div key={item.type} className={s.course__tasks}>
              <Tooltip placement="leftTop" title={"Набрано " + item.progress + " из " + item.max}>
                <Progress width={24} showInfo={false} type="dashboard" percent={Math.floor(item.progress / item.max * 100)} />
              </Tooltip>
              <p>{ item.type }</p>
            </div>
          )
        })
      }
    },
    {
      title: 'Завершится',
      dataIndex: 'finished',
      key: "finished"
    }
  ]

  const data = [
    { 
      date: "01 февраля понедельник", 
      title: "Функции", 
      marks: [
        {type: "классная работа", date: "01.02.2021", mark: "5+"}, 
        {type: "домашняя работа", date: "02.05.2021", mark: "4"}
      ],
      tasks: [
        { type: "домашняя работа", progress: 0, max: 300 },
        { type: "классная работа", progress: 500, max: 700 },
        { type: "контрольная работа", progress: 600, max: 1000 }
      ],
      finished: "В следущий понедельник",
      lessonID: "ujythregfwd",
      courseID: "nbtgnhbgvfcxb"
    }
  ]
  return (
    <Table onRow={tableHandler} columns={columnsData} dataSource={data} pagination={false} />
  )
}

export default CourseLessons