import { connect } from "react-redux"
import AdminRoot from "../../components/admin/root";
// @ts-ignore
import HeadComponent from "../../components/withHead"
import { AppType } from "../../store/redux-store";
import { userCreateThunk, userFirstDataValues, getAllUsersThunk, dropUsersThunk, setSpliceLoadingAction } from "../../store/reducers/admin"

interface AdminPropsType {
  usersList: Array<any>,
  isLoading: boolean,
  userCreateThunk: (usersData: userFirstDataValues) => void,
  getAllUsersThunk: () => void,
  setLoader: () => void,
  dropUsersThunk: (usersID: Array<string>) => void
}

const AdminContainer: React.FC<AdminPropsType> = ({usersList, userCreateThunk, getAllUsersThunk, dropUsersThunk, setLoader, isLoading}) => {
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
      />
    </>
  )
};


type mapStateToPropsType = {
  usersList: Array<any>,
  isLoading: boolean
}
const mapStateToProps: any = (state: AppType): mapStateToPropsType => {
  return {
    usersList: state.admin.spliceUsers,
    isLoading: state.admin.isSpliceUsersLoading
  }
}

export default connect(mapStateToProps, { userCreateThunk, getAllUsersThunk, dropUsersThunk, setLoader: setSpliceLoadingAction })(AdminContainer);