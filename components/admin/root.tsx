import { Collapse } from "antd";
import { sliceUser } from "../../store/reducers/admin";
import AddUserCourse from "./AddUserCourse";
import CreateCourse from "./CreateCourse";
import CreateUser from "./CreateUser";
import FindUser from "./FindUser";
import ListUsers from "./ListUsers";
const { Panel } = Collapse;

interface formValues {
  firstname: string,
  lastname: string, 
  email: string,
  password: string
}

interface PropsTypes {
  usersList: Array<sliceUser>,
  userCreate: (a: formValues) => void,
  isLoading: boolean,
  errors: Array<string>,
  getAllUsers: () => void,
  setLoader: () => void,
  deleteUser: (usersID: Array<string>) => void,
  sendUserDataName: (firstname: string, lastname: string) => void,
  sendUserData: (id: string) => void,
  createCourse: (courseData: any) => void,
  addUser: (userID: string, courseID: string) => void,
  userData: any
};
const AdminRoot: React.FC<PropsTypes> = ({
  usersList, userCreate, getAllUsers, deleteUser, errors, createCourse,
  setLoader, isLoading, sendUserData, userData, sendUserDataName, addUser
}) => {
  const editOpen = (key: any) => {
    if (key.includes("2")) {
      setLoader()
      getAllUsers()
    }
  }

  return (
    <>
      <Collapse defaultActiveKey={["1"]} onChange={editOpen}>
        <Panel key="1" header="Добавить пользователя">
            <CreateUser userCreate={userCreate} />
        </Panel>
        <Panel key="2" header="Просмотр всех пользователей" >
          <ListUsers usersList={usersList} isLoading={isLoading} dropUsersThunk={deleteUser} />
        </Panel>
        <Panel key="3" header="Найти пользователя">
          <FindUser errors={errors} sendUserData={sendUserData} sendUserDataName={sendUserDataName} userData={userData} />
        </Panel>
        <Panel key="4" header="Создать курс">
          <CreateCourse createCourse={createCourse} />
        </Panel>
        <Panel key="5" header="Добавить пользователя в курс">
          <AddUserCourse addUser={addUser} errors={errors} />
        </Panel>
      </Collapse>
    </>
  )
};

export default AdminRoot;