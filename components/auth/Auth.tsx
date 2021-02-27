//@ts-ignore
import styles from "../../styles/auth/auth.module.scss"
import { useEffect, useState } from "react";
import { userLogin } from "../../store/interfaces/auth";
import Registation from "./Registration";
import Login from "./Login";
import { useRouter } from "next/router";

interface PropsType {
  loginUser: (usersData: userLogin) => void,
  registrationUser: (usersData: any) => void,
  isAuth: boolean,
  error: string | null
}
const Auth: React.FC<PropsType> = ({loginUser, isAuth, registrationUser, error}) => {
  const [isLogin, setLogin] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (isAuth) router.push("/root") 
  }, [isAuth])

  return (
    <div className={styles.form__wrapper}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <h1>MyOcean Education - качественные курсы !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, molestiae iusto itaque asperiores 
            mollitia eveniet ullam voluptatibus. Molestiae hic ut assumenda minus. Nihil praesentium eos excepturi 
            et vitae natus asperiores accusamus ullam, error dolorum enim aspernatur voluptas facilis tenetur fuga dolor 
            iure nulla. Nesciunt similique sit nostrum aut, tempora soluta. Aliquid tempore fuga cupiditate 
            fugit ad deleniti dolore incidunt ullam?
          </p>
        </div>
        { isLogin ? 
          <Login setLogin={setLogin} error={error} loginUser={loginUser} /> 
          : <Registation setLogin={setLogin} registrationUser={registrationUser} error={error} /> 
        }
      </div>
    </div>
  );
};

export default Auth;