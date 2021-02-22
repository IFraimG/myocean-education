import { useDispatch, useSelector } from "react-redux"
import AdminRoot from "../../components/admin/root";
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { userFirstDataValues } from "../../store/reducers/admin"
import { adminTypes, coursesTypes } from "../../store/types";

const AdminContainer = () => {
  const dispatch = useDispatch()
  const { spliceUsers, userFullData, fullUsers, errors, isLoading } = useSelector((state: any) => state.admin)
  
  const setCreateUserAction = (usersData: userFirstDataValues) => dispatch({type: adminTypes.SET_CREATE_USER, payload: usersData})
  const getAllUsersAction = () => dispatch({type: adminTypes.GET_ALL_USERS})
  const deleteUserAction = (usersID: Array<string>) => dispatch({type: adminTypes.DELETE_USER, payload: usersID})
  const setLoader = () => dispatch({type: adminTypes.SET_SPLICE_LOADING})
  const addUserCourse = (userID: string, courseID: string) => dispatch({type: adminTypes.ADD_USER_COURSE, payload: {userID, courseID}})
  const sendUserData = (id: string) => dispatch({type: adminTypes.GET_CURRENT_USER, payload: id})
  const sendUserDataName = (firstname: string, lastname: string) => dispatch({type: adminTypes.GET_CURRENT_USER_NAME, payload: {firstname, lastname}})
  const createCourse = (courseData: any) => dispatch({type: coursesTypes.CREATE_COURSE, payload: courseData})
  return (
    <>
      <HeadComponent title="Админ панель" />
      <AdminRoot 
        usersList={spliceUsers} 
        isLoading={isLoading}
        errors={errors}
        userData={userFullData}
        userCreate={setCreateUserAction} 
        getAllUsers={getAllUsersAction} 
        deleteUser={deleteUserAction}
        setLoader={setLoader} 
        sendUserData={sendUserData}
        sendUserDataName={sendUserDataName}
        createCourse={createCourse}
        addUser={addUserCourse}
      />
    </>
  )
};

export default AdminContainer