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
  console.log(props);
  
  const router = useRouter()
  const { Component, pageProps }: AppProps = props
  if (router.asPath == "/auth") {
    return <Component {...pageProps} />
  } else {
    return (
      <DefaultLayout>
        <Component {...pageProps} router={router} />
      </DefaultLayout>
    )
  }
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

