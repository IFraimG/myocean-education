import { AppType } from './../store/redux-store';
import { checkAuth } from './../store/reducers/auth';
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = (state: AppType) => {
  return {
    isAuth: state.auth.isAuth
  }
}

interface TypeProps {
  isAuth: boolean
  checkAuth: () => void
}

// const WithAuth: React.FC<TypeProps> = ({ isAuth, checkAuth }) => {
//   return class AuthComponent extends React.Component {
//     static async getInitialProps(ctx: any) {
//       console.log(ctx);
//       await checkAuth()

//     }

//     render() {
//       return <Component
//     }
//   };
// };

// export default connect(mapStateToProps, { checkAuth })(WithAuth)