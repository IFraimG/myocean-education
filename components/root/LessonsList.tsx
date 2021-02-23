import { RightOutlined } from "@ant-design/icons";
import { Card, List, Col, Button } from "antd";
import Link from "next/link";
import styles from "../../styles/pupil/root.module.scss";

const LessonsList = () => {
  let exampleData = [
    {
      fullDate: "23 ноября (ПН)",
      time: "16:00 - 17:30",
      title: "Программирование на C++",
      courseID: "tgrfeds",
      lessonID: "bgfvcxvcxz",
    },
    {
      fullDate: "31 ноября (СР)",
      time: "20:00 - 21:30",
      title: "Wordpress",
      courseID: "tghgfbdsrfeds",
      lessonID: "asdasdsasd",
    },
    {
      fullDate: "10 ноября (СБ)",
      time: "20:00 - 21:30",
      title: "JavaScript",
      courseID: "lliili",
      lessonID: "ilkjmn",
    },
  ];

  return (
    <Card className={styles.root__lessons} title="Ближайшие занятия">
      { exampleData.length > 0 ?
          <List className={styles.root__lessons__list} dataSource={exampleData} renderItem={item => (
            <List.Item>
              <Col span={6}>{item.fullDate}</Col>
              <Col span={6}>{item.time}</Col>
              <Col span={8}>
                <Link href={"/courses/" + item.courseID}>{item.title}</Link>
              </Col>
              <Col span={5}>
                <Button href={"/courses/" + item.courseID + "/" + item.lessonID} type="primary" ghost={true}>
                  Перейти
                  <RightOutlined />
                </Button>
              </Col>
            </List.Item>
          )} />
        : <p>У вас отстутствуют ближайшие занятия</p>
      }
    </Card>
  );
}

export default LessonsList;
