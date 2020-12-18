import { useRouter } from "next/router"

function App(props) {
  const router = useRouter();
  const Component = props.Component;
  if (router.asPath != "/auth" && props.isAuth) {
    return (
      <>
        <DefaultLayout>
          <Component {...props.pageProps} />
        </DefaultLayout>
        : <Component {...props.pageProps} />
      </>
    );
  } else {
    return <AuthPage {...props} />;
  }
}

App.getInitialProps = async (ctx) => {
  console.log(ctx);
  await props.checkAuth();
  return { isAuth: true };
};

export default App;