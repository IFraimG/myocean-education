import 'antd/dist/antd.css';
import '../styles/globals.css'
import "../styles/variables.scss"

import withReduxSaga from 'next-redux-saga'
import { useRouter } from "next/router"
import { compose } from "redux";
// @ts-ignore
import DefaultLayout from "../components/layout"
import wrapperStore from "../store/redux-store"
import type { AppProps } from 'next/app';

const App = (props: any) => {
  const router = useRouter()
  const { Component, pageProps }: AppProps = props

  if (router.asPath == "/auth") {
    return <Component {...pageProps} />
  } else {
    return (
      <DefaultLayout userID={pageProps?.foo.id}>
        <Component {...pageProps} router={router} />
      </DefaultLayout>
    )
  }
}

export async function getServerSideProps(ctx) {
  let res = await fetch("http://localhost:5000/api/auth/check", {method: "GET", headers: {"Authorization": "Bearer " + ctx.req.cookies.jwt}})
  let data = await res.json()
  if (data?.id == null) return {redirect: { destination: "/pupil/root", permament: false }}
  return {props: { foo: data }}
}

// class WrapperApp extends AppNext {
//   render() {
//     const { Component, pageProps, router } = this.props;
//     if (router.asPath == "/auth") {
//       return <Component pageProps={pageProps} />
//     } else {
//       return (
//         <DefaultLayout>
//           <Component pageProps={pageProps} />
//         </DefaultLayout>
//       )
//     }
//   }
// }

export default compose(wrapperStore.withRedux, withReduxSaga)(App)

