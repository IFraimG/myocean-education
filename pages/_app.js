import { Provider } from "react-redux"
import store from "../store/redux-store"
import DefaultLayout from "../components/layout"
import 'antd/dist/antd.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <DefaultLayout>
          <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  </>
}

export default MyApp
