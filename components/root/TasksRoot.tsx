import Link from "next/link"
import { CaretDownOutlined, FlagOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Card, Dropdown, Menu, Button, Pagination } from "antd";
import { useState } from "react";
import styles from "../../styles/pupil/root.module.scss";

const SingleWork = ({workData}) => {
  let typeWork: any = null
  let typeWorkText: any = null
  switch(workData.type) {
    case "homework": {
      typeWork = <div className="work-logo homework-logo"></div>;
      typeWorkText = <p>Домашняя работа</p>
      break;
    }
    case "classwork": { 
      typeWork = <div className="work-logo classwork-logo"></div>;
      typeWorkText = <p>Классная работа</p>
      break;
    }
    case "hardwork": { 
      typeWork = <div className="work-logo hardwork-logo"></div>;
      typeWorkText = <p>Контрольная работа</p>
      break;
    }
    case "alertwork": { 
      typeWork = <div className="work-logo alert-logo"></div>;
      typeWorkText = <p>Важное сообщение</p>
      break;
    }
    case "vebinar": { 
      typeWork = <div className="work-logo vebinar-logo"></div>;
      typeWorkText = <p>Прямая трансляция</p>
      break;
    }
    default: break;
  }
  return <>
    <div className={styles.root__date}>
      {typeWork}
      {workData.date}
    </div>
    <div>
      <Link href={"/courses" + workData.courseID}>{workData.title}</Link>
    </div>
    <div className={styles.root__text}>{typeWorkText}</div>
    <div className={styles.root__time}>
      <ClockCircleOutlined className={styles.root__time__logo} />
      <span>Сдача {workData.timeEnd}</span>
    </div>
    <Button className={styles.root__button} ghost type="primary">Завершить <FlagOutlined /></Button>
    <Button className={styles.root__smbutton} ghost type="primary"><FlagOutlined /></Button>
  </>
}

function TasksRoot(props: any) {
  const [numPage, setNum] = useState<number>(1)
  const [courseCurrent, setCourse] = useState<string | null>(null)

  const getCurrentCourse = (courseID: string, title: string) => {
    setNum(1)
    props.getCurrentLessonsAction(courseID)
    setCourse(title)
  }
  const setPageCourse = (current: number, pageSize: number) => setNum(current)

  return (
    <div>
      <Card className={styles.root} title="Задания" extra={
        props.profile.courses?.length > 0 ? 
          <Dropdown overlay={
            <Menu>
              {props.profile.courses.map((item: any, index: number) => {
                return <Menu.Item onClick={() => getCurrentCourse(item.courseID, item.title)} key={index}>{ item.title }</Menu.Item>
              })}
            </Menu>
          } placement="bottomCenter">
            <Button>
              <CaretDownOutlined />
              { courseCurrent == null ? <> Выбрать курс</> : courseCurrent }
            </Button>
        </Dropdown>
        : ""
      }>
          { props.coursesList.length > 0 ? (
            <div className={styles.root__inner}>
              <div className={styles.root__tasklist}>
                <SingleWork workData={props.coursesList[numPage - 1]} />
              </div>
              { props.coursesList.length > 1 ? (
                <Pagination className={styles.root__paginator} onChange={setPageCourse} defaultPageSize={1} total={props.coursesList.length}  />
              ): "" }
            </div>
            )
          : <p>У вас нет невыполненных задач, отдыхайте !</p>
          }
      </Card>
    </div>
  );
}

export default TasksRoot;
