import { Collapse } from "antd";
import { sliceUser } from "../../store/reducers/admin";
import AddUserCourse from "./AddUserCourse";
import CreateCourse from "./CreateCourse";
import CreateUser from "./CreateUser";
import FindUser from "./FindUser";
import ListItems, { rowTypes } from "./ListItems";
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
  userData: any,
  allCourses: Array<any>,
  getAllCourses: () => void,
  deleteCourses: (coursesData: any) => void
};
const AdminRoot: React.FC<PropsTypes> = ({
  usersList, userData, isLoading, errors, allCourses, 
  createCourse, getAllCourses, setLoader, sendUserData, 
  sendUserDataName, addUser, deleteCourses, userCreate, 
  getAllUsers, deleteUser
}) => {
  const editOpen = (key: any) => {
    if (key == "2") {
      setLoader()
      getAllUsers()
    }
    if (key == "6") {
      setLoader()
      getAllCourses()
    }
  }

  const columnsUsers: Array<rowTypes> = [
    { title: "Имя", dataIndex: "firstName", key: "firstName" },
    { title: "Фамилия", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "ID", dataIndex: "id", key: "id" },
  ];

  const columnsCourses: Array<rowTypes> = [
    { title: "Логотип", dataIndex: "logo", key: "logo" },
    { title: "Название", dataIndex: "title", key: "title" },
    { title: "Создатель", dataIndex: "admin", key: "admin" },
    { title: "ID", dataIndex: "id", key: "id" },
  ];

  return (
    <>
      <Collapse accordion defaultActiveKey={["1"]} onChange={editOpen}>
        <Panel key="1" header="Добавить пользователя">
            <CreateUser userCreate={userCreate} />
        </Panel>
        <Panel key="2" header="Просмотр всех пользователей" >
          <ListItems importantData={columnsUsers} listItems={usersList} isLoading={isLoading} dropItems={deleteUser} />
        </Panel>
        <Panel key="3" header="Найти пользователя">
          <FindUser errors={errors} sendUserData={sendUserData} sendUserDataName={sendUserDataName} userData={userData} />
        </Panel>
        <Panel key="4" header="Создать курс">
          <CreateCourse createCourse={createCourse} />
        </Panel>
        <Panel key="5" header="Присоединить пользователя к курсу">
          <AddUserCourse addUser={addUser} errors={errors} />
        </Panel>
        <Panel key="6" header="Просмотр всех курсов">
          <ListItems importantData={columnsCourses} listItems={allCourses} isLoading={isLoading} dropItems={deleteCourses} />
        </Panel>
      </Collapse>
    </>
  )
};

export default AdminRoot;