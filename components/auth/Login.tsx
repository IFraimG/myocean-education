import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
//@ts-ignore
import styles from "../../styles/auth/auth.module.scss";
import { useState } from "react";
import { userLogin } from "../../store/reducers/auth";

interface PropsType {
  loginUser: (usersData: userLogin) => void;
  setLogin: (isLogin: boolean) => void
  error: string | null;
}
const Login: React.FC<PropsType> = ({ loginUser, error, setLogin }) => {
  const [isPassword, setVisiblePassword] = useState(false);
  const onFinish = (values: userLogin) => loginUser(values);

  return (
    <>
      <Card
        className={styles.form__right}
        title={
          <div className={styles.form__title}>
            <p className={styles.form__title__auth}>Авторизация</p>
            <p
              onClick={() => setLogin(false)}
              className={styles.form__title__reg}
            >
              Зарегистрироваться
            </p>
          </div>
        }
      >
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
              {isPassword ? (
                <Input
                  className={styles.form__password}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="text"
                  placeholder="Password..."
                />
              ) : (
                <Input
                  className={styles.form__password}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password..."
                  autoComplete="on"
                />
              )}
            </Form.Item>
            <a onClick={() => setVisiblePassword(!isPassword)}>
              Показать пароль...
            </a>
          </div>
          <div className={styles.form__down}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                className={styles.form__down__button}
                type="primary"
                htmlType="submit"
              >
                Войти
              </Button>
            </Form.Item>
          </div>
          {error != null ? <p className={styles.form__error}>{error}</p> : ""}
        </Form>
      </Card>
    </>
  );
};

export default Login;
