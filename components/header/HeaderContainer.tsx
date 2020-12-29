import { connect } from "react-redux";
import { logout } from "../../store/reducers/auth";
import { editHeader, setModalLgOAction } from "../../store/actions/app"
// @ts-ignore
import Header from "./Header"

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

export default connect(mapStateToProps, { logout, setModal: setModalLgOAction, editHeader })(HeaderContainer);
