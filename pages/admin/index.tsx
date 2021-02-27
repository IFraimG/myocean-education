import { useDispatch, useSelector } from "react-redux"
import AdminRoot from "../../components/admin/root";
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { 
  addUserCourse, addUserCourseType, deleteCoursesAction, deleteCoursesType, deleteUserAction, deleteUserType, getAllCoursesAction, getAllCoursesType, getAllUsersAction, getCurrentUserAction, 
  getCurrentUserType, 
  getUserDataName, getUserNameType, setCreateUserAction, setCreateUserActionType, setSpliceLoadingAction, setSpliceLoadingAT 
} from "../../store/actions/admin";
import { createCourse, createCourseType } from "../../store/actions/courses";
import { userFirstDataValues } from "../../store/interfaces/admin"

const AdminContainer = () => {
  const dispatch = useDispatch()
  const { spliceUsers, userFullData, fullUsers, allCourses, errors, isLoading } = useSelector((state: any) => state.admin)
  
  const setCreateUser = (usersData: userFirstDataValues): setCreateUserActionType => dispatch(setCreateUserAction(usersData))
  const getAllUsers = () => dispatch(getAllUsersAction())
  const deleteUser = (usersID: Array<string>): deleteUserType => dispatch(deleteUserAction(usersID))
  const setLoader = (): setSpliceLoadingAT => dispatch(setSpliceLoadingAction())
  const addUserCourseAction = (userID: string, courseID: string): addUserCourseType => dispatch(addUserCourse(userID, courseID))
  const sendUserData = (id: string): getCurrentUserType => dispatch(getCurrentUserAction(id))
  const sendUserDataName = (firstname: string, lastname: string): getUserNameType => dispatch(getUserDataName(firstname, lastname))
  const createCourseAction = (courseData: any): createCourseType => dispatch(createCourse(courseData))
  const getAllCourses = (): getAllCoursesType => dispatch(getAllCoursesAction())
  const deleteCourses = (coursesData: any): deleteCoursesType => dispatch(deleteCoursesAction(coursesData))

  return (
    <>
      <HeadComponent title="Админ панель" />
      <AdminRoot 
        usersList={spliceUsers} 
        isLoading={isLoading}
        errors={errors}
        userData={userFullData}
        allCourses={allCourses}
        userCreate={setCreateUser} 
        getAllUsers={getAllUsers} 
        deleteUser={deleteUser}
        setLoader={setLoader} 
        sendUserData={sendUserData}
        sendUserDataName={sendUserDataName}
        createCourse={createCourseAction}
        addUser={addUserCourseAction}
        getAllCourses={getAllCourses}
        deleteCourses={deleteCourses}
      />
    </>
  )
};

export default AdminContainer