import { connect } from "react-redux";
import { setModalLogout, thunkEditHeader } from "../../store/reducers/app";
import { logout } from "../../store/reducers/auth";
// @ts-ignore
import Header from "./Header"

export interface HeaderTypes {
  isModalLogout: boolean,
  isHeader: boolean,
  router: any,
  thunkEditHeader: (isHeader: boolean) => void,
  setModalLogout: (isModal: boolean) => void,
  logout: () => void
}
const HeaderContainer: React.FC<HeaderTypes> = ({isHeader, isModalLogout, thunkEditHeader, setModalLogout, router, logout}) => {
  return <Header 
    router={router} thunkEditHeader={thunkEditHeader} setModalLogout={setModalLogout} 
    isHeader={isHeader} isModalLogout={isModalLogout} logout={logout}
  />;
};

const mapStateToProps = (state: any) => {
  return { isHeader: state.app.isEditHeader, isModalLogout: state.app.isModalLogout };
};

export default connect(mapStateToProps, { thunkEditHeader, setModalLogout, logout })(HeaderContainer);
