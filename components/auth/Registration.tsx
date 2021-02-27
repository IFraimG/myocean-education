import {
  InboxOutlined,
  LockOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import { useState } from "react";
import { userRegistation } from "../../store/interfaces/auth";
import styles from "../../styles/auth/auth.module.scss";

interface RegistationProps {
  registrationUser: (usersData: userRegistation) => void;
  setLogin: (isLogin: boolean) => void;
  error: string | null;
}
const Registation: React.FC<RegistationProps> = ({registrationUser, setLogin, error }) => {
  const [isPassword, setVisiblePassword] = useState(false);
  const onFinish = (values: userRegistation) => registrationUser(values);
  
  return (
    <Card
      className={styles.form__right}
      title={
        <div className={styles.form__title}>
          <p className={styles.form__title__auth}>Авторизация</p>
          <p onClick={() => setLogin(true)} className={styles.form__title__reg}>
            Уже есть аккаунт?
          </p>
        </div>
      }
    >
      <Form name="registration" onFinish={onFinish}>
        <div className={styles.form__name}>
          <Form.Item
            name="firstname"
            className={styles.form__name_input}
            rules={[{ required: true, message: "Вы не ввели ваше имя" }]}
          >
            <Input
              className={styles.form__name_input_el}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Ваше имя..."
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            className={styles.form__name_input}
            rules={[{ required: true, message: "Вы не ввели вашу фамилию" }]}
          >
            <Input
              className={styles.form__name_input_el}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Ваша фамилия..."
            />
          </Form.Item>
        </div>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Вы не ввели ваш email" }]}
        >
          <Input
            prefix={<InboxOutlined className="site-form-item-icon" />}
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
        <div className={styles.form__footer}>
          <Form.Item>
            <Button
              className={styles.form__footer__button}
              type="primary"
              htmlType="submit"
              icon={<SendOutlined />}
            >
              Войти
            </Button>
          </Form.Item>
        </div>
        {error != null ? <p className={styles.form__error}>{error}</p> : ""}
      </Form>
    </Card>
  );
};

export default Registation;
