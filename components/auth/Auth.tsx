import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
//@ts-ignore
import styles from "../../styles/auth/auth.module.scss"
import { useEffect, useState } from "react";
import { userLogin } from "../../store/reducers/auth";
import { useRouter } from "next/router"

interface PropsType {
  loginUserThunk: (usersData: userLogin) => void
  isAuth: boolean
}
const Auth: React.FC<PropsType> = ({loginUserThunk, isAuth}) => {
  const [isPassword, setVisiblePassword] = useState(false)
  const router = useRouter()

  const onFinish = (values: userLogin) => {
    loginUserThunk(values)
    if (isAuth) router.push("/root")
  }

  useEffect(() => {
    if (isAuth) router.push("/root")
  }, [])
  return (
    <div className={styles.form__wrapper}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <h1>MyOcean Education - качественные курсы !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, molestiae iusto itaque asperiores 
            mollitia eveniet ullam voluptatibus. Molestiae hic ut assumenda minus. Nihil praesentium eos excepturi 
            et vitae natus asperiores accusamus ullam, error dolorum enim aspernatur voluptas facilis tenetur fuga dolor 
            iure nulla. Nesciunt similique sit nostrum aut, tempora soluta. Aliquid tempore fuga cupiditate 
            fugit ad deleniti dolore incidunt ullam?
          </p>
        </div>
        <Card className={styles.form__right} title="Авторизация">
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Вы не ввели ваш email" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email..."
              />
            </Form.Item>
            <div className={styles.form__middle}>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Вы не ввели пароль!" }]}
              >
                {
                  isPassword ? <Input 
                  className={styles.form__password}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="text"
                  placeholder="Password..."
                  />
                  : <Input 
                  className={styles.form__password}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password..."
                  autoComplete="on"
                  />
                }
              </Form.Item>
              <a onClick={() => setVisiblePassword(!isPassword)}>Показать пароль...</a>
            </div>
            <div className={styles.form__down}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запомнить меня</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button className={styles.form__down__button} type="primary" htmlType="submit">Войти</Button>
              </Form.Item>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Auth;