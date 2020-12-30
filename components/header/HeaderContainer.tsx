import { connect } from "react-redux";
import { editHeader, setModalLgOAction } from "../../store/actions/app"
// @ts-ignore
import Header from "./Header"
import { logoutAction } from "../../store/actions/auth";

export interface HeaderTypes {
  isModalLogout: boolean,
  isHeader: boolean,
  router: any,
  logout: () => void,
  setModal: (isModal: boolean) => void,
  editHeader: (isTrue: boolean) => void
}
const HeaderContainer: React.FC<HeaderTypes> = ({isHeader, isModalLogout, router, logout, editHeader, setModal}) => {
  return <Header 
    router={router} editHeader={editHeader} setModal={setModal}
    isHeader={isHeader} isModalLogout={isModalLogout} logout={logout}
  />;
};

const mapStateToProps = (state: any) => {
  return { isHeader: state.app.isEditHeader, isModalLogout: state.app.isModalLogout };
};

export default connect(mapStateToProps, { logout: logoutAction, setModal: setModalLgOAction, editHeader })(HeaderContainer);
