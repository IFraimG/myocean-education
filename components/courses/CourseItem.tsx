import { Button, Card, Divider, List, Tag } from "antd";
import Link from "next/link";
import styles from "../../styles/courses/Courses.module.scss";

export interface CourseProps {
  courseData: any;
}
const CourseItem: React.FC<CourseProps> = ({ courseData }) => {
  const testData = [
    {title: "оценок", data: "14"},
    {title: "средний балл", data: "4.43"},
    {title: "средний балл", data: "4.43"}
  ]

  return (
    <Card
      title="Программирование C++"
      extra={
        <Tag className={styles.courses__tag} color="green">
          Основной курс
        </Tag>
      }
      className={styles.courses__card}
    >
      <div className={styles.courses__inner}>
        <div className={styles.courses__top}>
          <div className={styles.courses__left}>
            <img
              className={styles.courses__logo}
              src="/pupil/cpp.png"
              alt="logo"
            />
          </div>
          <div className={styles.courses__middle}>
            <p>c 05.09.2020 по 31.01.2021</p>
            <List
              className={styles.courses__table}
              size="small"
              bordered
              dataSource={testData}
              renderItem={(item) => (
                <List.Item>
                  {item.title}: {item.data}
                </List.Item>
              )}
            />
            <Link href="/courses/cppdie">
              <Button type="primary">Перейти в курс</Button>
            </Link>
          </div>
          <Link href="/root">
            <div className={styles.courses__right}>
              <div>
                <p>Преподаватель :</p>
                <div className={styles.courses__teacher__info}>
                  <img
                    className={styles.courses__teacher__logo}
                    src="/pupil/prepod.png"
                    alt="logo"
                  />
                  <p>Цепелев Юрий Алексеевич</p>
                </div>
              </div>
              <Divider
                className={styles.courses__teacher__border}
                orientation="center"
              />
              <div className={styles.courses__lessons}>
                <div className={styles.courses__lessons__last}>
                  <p className={styles.courses__lessons__time}>Последнее занятие:</p>
                  <div className={styles.courses__lessons__date}>
                    <p>21 декабря понедельник</p>
                    <p>16:00 - 17:30</p>
                  </div>
                </div>
                <Divider orientation="center" />
                <div className={styles.courses__lessons__first}>
                  <p className={styles.courses__lessons__time}>Ближайшее занятие:</p>
                  <div className={styles.courses__lessons__date}>
                    <p>11 января понедельник</p>
                    <p>16:00 - 17:30</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.courses__bottom}></div>
      </div>
    </Card>
  );
};

export default CourseItem;
