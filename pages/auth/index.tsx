import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Auth from "../../components/auth/Auth";
//@ts-ignore
import HeadComponent from "../../components/withHead"
import { registationUserType, setAuthActionType } from "../../store/actions/auth";
import { userLogin, userRegistation } from "../../store/reducers/auth";
import { AppType } from "../../store/redux-store";
import { authTypes } from "../../store/types";
import axios from "axios";
import { useRouter } from "next/router";


const AuthContainer = (props) => {
  useEffect(() => {
    console.log(props);
    
    // Axios.get("/pupil/api/checkauth").then(res => {
    //   if (res.data.isAuth) router.push("/root")
    // })
    
  }, [])
  const dispatch = useDispatch()
  const { isAuth, error } = useSelector((state: AppType) => state.auth)
  
  const loginUser = (usersData: userLogin): setAuthActionType => dispatch({type: authTypes.SET_AUTH, payload: usersData})
  const registationUser = (userData: userRegistation): registationUserType => dispatch({ type: authTypes.REGISTATION_USER, payload: userData })

  return (
    <>
      <HeadComponent title="Добро пожаловать в MyOcean Education !" />
      <Auth 
        loginUser={loginUser} registrationUser={registationUser}
        isAuth={isAuth} error={error}
        />
    </>
  )
};

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/pupil/api/checkauth", {method: "GET"})
  let data = await res.json()
  if (data.isAuth) return {redirect: { destination: "/pupil/root", permament: false }}
  return {props: { foo: data }}
}

export default AuthContainer;