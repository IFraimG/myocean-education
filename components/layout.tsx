import { useEffect, useState, memo } from "react";
import dynamic from "next/dynamic"
const MyHeader = dynamic(() => import('./header/HeaderContainer'), { ssr: false });

import { useRouter } from "next/router"
import { Layout, Menu } from "antd";
const { Sider, Content } = Layout;

import { 
  DoubleLeftOutlined, DoubleRightOutlined, HomeOutlined, 
  QuestionOutlined, CalendarOutlined, AppstoreAddOutlined, 
  PlusCircleOutlined, CloseSquareOutlined, VideoCameraOutlined,
  StarOutlined
} from "@ant-design/icons"

import 'antd/dist/antd.css';
import styles from "../styles/layout.module.scss";
import { useDispatch } from "react-redux";
import { getCurrentUserAction } from "../store/actions/admin"

function DefaultLayout({ children, userID }) {
  const [collapsed, setCollapse] = useState<any>(false)
  const [isMedia, setMedia] = useState<boolean>(true)
  const router = useRouter()
  const dispatch = useDispatch()

  const editCollapse = (collapsed: any) => {
    if (isMedia) setCollapse(collapsed)
  }

  useEffect(() => {
    dispatch(getCurrentUserAction(userID))
  }, [])

  useEffect(() => {
    if (typeof document != null && typeof document != undefined && typeof window != null && typeof window != undefined) {
      window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth < 701) {
          setCollapse(true)
          setMedia(false)
        } else {
          setCollapse(false)
          setMedia(true)
        }
      })
      if (document.documentElement.clientWidth < 701) {
        setCollapse(true)
        setMedia(false)
      } else {
        setCollapse(false)
        setMedia(true)
      }
    }
  }, [typeof document, typeof window])
  const pageRedirect = (path: string) => router.push(path)

  return (
    <div>
      <Layout className={styles.layout__wrapper}>
        <MyHeader router={router} />
        <Layout className={styles.layout__middle}>
          <Sider
            collapsed={collapsed} 
            onCollapse={(collapsed) => setCollapse(collapsed)} 
            className={styles.layout__sidebar}
          >
            <Menu theme="dark" mode="vertical">
              <div key="1" className={styles.sidebar__button}>
                { !collapsed ? <DoubleLeftOutlined 
                    className={styles.sidebar__close} 
                    onClick={(collapsed) => editCollapse(collapsed)} 
                  /> 
                  : <DoubleRightOutlined 
                    className={styles.sidebar__open} 
                    onClick={(collapsed) => editCollapse(!collapsed)} 
                  /> 
                }
              </div>
              <Menu.Item key="2" onClick={() => pageRedirect("/root")}>
                <HomeOutlined />
                <span>Главная</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={() => pageRedirect("/dialogs")}>
                <QuestionOutlined />
                <span>Диалоги</span>
              </Menu.Item>
              <Menu.Item key="4" onClick={() => pageRedirect("/courses")}>
                <AppstoreAddOutlined />
                <span>Мои курсы</span>
              </Menu.Item>
              <Menu.Item key="5">
                <VideoCameraOutlined />
                <span>Открытые вебинары</span>
              </Menu.Item>
              <Menu.Item key="6">
                <StarOutlined />
                <span>Успеваемость</span>
              </Menu.Item>
              <Menu.Item key="7">
                  <CalendarOutlined />
                  <span>Расписание занятий</span>
                </Menu.Item>
                <Menu.Item key="8">
                  <PlusCircleOutlined />
                  <span>Записаться на курсы</span>
                </Menu.Item>
                <Menu.Item key="9">
                  <CloseSquareOutlined />
                  <span>Записаться в группу</span>
                </Menu.Item>
                <Menu.Item key="10" onClick={() => pageRedirect("/admin")}>
                  <CloseSquareOutlined />
                  <span>Админ панель</span>
                </Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles.layout__content}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default DefaultLayout