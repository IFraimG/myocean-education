import Link from "next/link"
import { Card } from "antd";
import styles from "../../styles/pupil/root.module.scss";
import { awardType } from "../../store/reducers/profile";

type defaultProps = {
  awards: Array<awardType> | null
}
const AwardsList: React.FC<defaultProps> = ({awards}) => {
  return (
    <>
      <Card title="Награды" extra={
        <Link href="/root/news">Посмотреть все</Link>
      }>
        { awards != null ?
          <div className={styles.root__awards}>
            {
              awards.map((item: awardType, index: number) => {
                return (
                  <div key={index} className={styles.root__awards__item}>
                    <img className={styles.root__awards__logo} src={"/pupil" + item.src} alt="Фото достижения" />
                  </div>
                )
              }) 
            }
          </div>
          : ""
        }
      </Card>
    </>
  )
};

export default AwardsList;
