import { useRouter } from "next/router"
import DefaultLayout from "../components/layout"
import 'antd/dist/antd.css';
import '../styles/globals.css'
import AppNext from "next/app"
import wrapperStore from "../store/redux-store"
import withReduxSaga from 'next-redux-saga'
import { compose } from "redux";

function App(props) {
  const router = useRouter()
  const { Component, pageProps } = props;
    if (router.asPath == "/auth") {
      return <Component pageProps={pageProps} />
    } else {
      return (
        <DefaultLayout>
          <Component pageProps={pageProps} router={router} />
        </DefaultLayout>
      )
    }
  // }
}

class WrapperApp extends AppNext {
  render() {
    const { Component, pageProps, router } = this.props;
    console.log(this.props);
    if (router.asPath == "/auth") {
      return <Component pageProps={pageProps} />
    } else {
      return (
        <DefaultLayout>
          <Component pageProps={pageProps} />
        </DefaultLayout>
      )
    }
  }
}

export default compose(wrapperStore.withRedux, withReduxSaga)(App)