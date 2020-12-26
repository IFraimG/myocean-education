import { connect } from "react-redux"
import AdminRoot from "../../components/admin/root";
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import { userCreateThunk, userFirstDataValues, getAllUsersThunk, dropUsersThunk, getCurrentUserThunk } from "../../store/reducers/admin"
import { setSpliceLoadingAction } from "../../store/actions/admin";

interface AdminPropsType {
  usersList: Array<any>,
  isLoading: boolean,
  userData: any,
  userCreateThunk: (usersData: userFirstDataValues) => void,
  getAllUsersThunk: () => void,
  setLoader: () => void,
  dropUsersThunk: (usersID: Array<string>) => void,
  sendUserData: (id: string) => void
}

const AdminContainer: React.FC<AdminPropsType> = ({
  usersList, userCreateThunk, getAllUsersThunk, dropUsersThunk, 
  setLoader, isLoading, sendUserData, userData
}) => {
  return (
    <>
      <HeadComponent title="Админ панель" />
      <AdminRoot 
        usersList={usersList} 
        isLoading={isLoading}
        userCreate={userCreateThunk} 
        getAllUsersThunk={getAllUsersThunk} 
        dropUsersThunk={dropUsersThunk}
        setLoader={setLoader} 
        sendUserData={sendUserData}
        userData={userData}
      />
    </>
  )
};


type mapStateToPropsType = {
  usersList: Array<any>,
  isLoading: boolean,
  userData: any
}
const mapStateToProps: any = (state: AppType): mapStateToPropsType => {
  return {
    usersList: state.admin.spliceUsers,
    isLoading: state.admin.isSpliceUsersLoading,
    userData: state.admin.userFullData
  }
}

export default connect(mapStateToProps, { userCreateThunk, getAllUsersThunk, dropUsersThunk, setLoader: setSpliceLoadingAction, sendUserData: getCurrentUserThunk })(AdminContainer);