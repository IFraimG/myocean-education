import { Provider } from "react-redux"
import { useRouter } from "next/router"
import store from "../store/redux-store"
import DefaultLayout from "../components/layout"
import 'antd/dist/antd.css';
import '../styles/globals.css'
import { connect } from "react-redux";
import { checkAuth } from "../store/reducers/auth";
import { useEffect } from "react";
import App from "../components/app"

// function App(props) {
//   const router = useRouter()
//   console.log(router);
//   const Component = props.Component
//   props.checkAuth()
//   // if (!props.isAuth && router.asPath != "auth") router.push("/auth", undefined, {shallow: true})
//   if (router.asPath != "/auth" && props.isAuth) {
//     return (
//       <>
//         <DefaultLayout>
//           <Component {...props.pageProps}  />
//         </DefaultLayout>
//         : <Component {...props.pageProps}  />
//       </>
//     )
//   } else {
    
//     return <AuthPage {...props} />
//   }
// }

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const AppConnect = connect(mapStateToProps, {checkAuth})(App)

function AppImportant({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <AppConnect Component={Component} pageProps={pageProps} />
    </Provider>
  </>
}

export default AppImportant;
