import Link from "next/link"
import { Card, Empty } from "antd";
import styles from "../../styles/pupil/root.module.scss";
import Interweave from "interweave"
import { NewsData } from "../../store/reducers/profile";

type defaultProps = {
  news: Array<NewsData> | null
}

const NewsList: React.FC<defaultProps> = ({news}) => {
  return (
    <>
      <Card className={styles.root__news} title="Последние новости" extra={
        <Link href="/root/news">Посмотреть весь список</Link>
      }>
        <div className={styles.root__news__list}>
          { news != null ? 
              news.map((item, index) => {
                return (
                  <div key={index} className={styles.root__news__item}>
                    <h2>{item.title}</h2>
                    <Interweave content={item.description} />
                    <p>Опубликовано: <span>{item.date}</span></p>
                  </div>
                )
              })
            : <Empty description="У вас нет новостей" />
          }
        </div>
      </Card>
    </>
  )
};

export default NewsList;
