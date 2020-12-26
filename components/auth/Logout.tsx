import { Button, Modal } from "antd";
import { useRouter } from "next/router"

const titleStyle = {
  textAlign: "center",
  fontSize: "26px"
}
const ButtonList = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "40px"
}

interface LogoutTypes {
  isModal: boolean,
  setModalLogout: (isModal: boolean) => void,
  logout: () => void
}
const Logout: React.FC<LogoutTypes> = ({ isModal, setModalLogout, logout }) => {
  const router = useRouter()
  const logoutUser = () => {
    logout()
    setModalLogout(false)
    router.push("/auth")
  }
  return (
    <Modal
      title="Выход из аккаунта"
      visible={isModal}
      onCancel={() => setModalLogout(false)}
      footer={null}
    >
      <h2 style={titleStyle}>Вы уверены, что хотите выйти???</h2>
      <div style={ButtonList}>
        <Button onClick={logoutUser} type="ghost">Выйти</Button>
        <Button onClick={() => setModalLogout(false)} type="primary">Отмена</Button>
      </div>
    </Modal>
  );
};

export default Logout;
