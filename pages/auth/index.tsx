import { useEffect } from "react";
import { connect } from "react-redux"
import Auth from "../../components/auth/Auth";
//@ts-ignore
import HeadComponent from "../../components/withHead"
import { loginUserThunk, userLogin } from "../../store/reducers/auth";
import { AppType } from "../../store/redux-store";

type PropTypes = {
  loginUserThunk: (usersData: userLogin) => void,
  isAuth: boolean
}
const AuthContainer: React.FC<PropTypes> = ({ loginUserThunk, isAuth }) => {
  return (
    <>
      <HeadComponent title="Добро пожаловать в MyOcean Education !" />
      <Auth loginUserThunk={loginUserThunk} isAuth={isAuth} />
    </>
  )
};


const mapStateToProps: any = (state: AppType) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {loginUserThunk})(AuthContainer);