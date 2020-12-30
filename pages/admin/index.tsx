import { connect } from "react-redux"
import AdminRoot from "../../components/admin/root";
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import { userFirstDataValues } from "../../store/reducers/admin"
import { 
  getAllUsersAction, setSpliceLoadingAction, setCreateUserAction, deleteUserAction, getCurrentUserAction, getUserDataName 
} from "../../store/actions/admin";

interface AdminPropsType {
  usersList: Array<any>,
  isLoading: boolean,
  userData: any,
  errors: Array<string>,
  setCreateUserAction: (usersData: userFirstDataValues) => void,
  getAllUsersAction: () => void,
  setLoader: () => void,
  deleteUserAction: (usersID: Array<string>) => void,
  sendUserData: (id: string) => void,
  sendUserDataName: (firstname: string, lastname: string) => void
}

const AdminContainer: React.FC<AdminPropsType> = ({
  usersList, setCreateUserAction, getAllUsersAction, deleteUserAction, 
  setLoader, isLoading, sendUserData, userData, sendUserDataName, errors
}) => {
  return (
    <>
      <HeadComponent title="Админ панель" />
      <AdminRoot 
        usersList={usersList} 
        isLoading={isLoading}
        userCreate={setCreateUserAction} 
        getAllUsers={getAllUsersAction} 
        deleteUser={deleteUserAction}
        setLoader={setLoader} 
        sendUserData={sendUserData}
        sendUserDataName={sendUserDataName}
        userData={userData}
        errors={errors}
      />
    </>
  )
};

type mapStateToPropsType = {
  usersList: Array<any>,
  isLoading: boolean,
  userData: any,
  errors: Array<string>
}
const mapStateToProps: any = (state: AppType): mapStateToPropsType => {
  return {
    usersList: state.admin.spliceUsers,
    isLoading: state.admin.isSpliceUsersLoading,
    userData: state.admin.userFullData,
    errors: state.admin.errors
  }
}

export default connect(mapStateToProps, { 
  setCreateUserAction, getAllUsersAction, 
  deleteUserAction, setLoader: setSpliceLoadingAction, 
  sendUserData: getCurrentUserAction, sendUserDataName: getUserDataName
})(AdminContainer);