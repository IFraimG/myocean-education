export interface sliceUser {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  key: number;
}
export interface userFirstDataValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface stateAdminType {
  fullUsers: Array<any> | null;
  spliceUsers: Array<any>;
  isCreateUser: boolean;
  isSpliceUsersLoading: boolean;
  userFullData: any;
  errors: Array<string>;
  allCourses: Array<any>;
}

export interface courseType {
  title: string
  description: string | Blob
  logo: any | null
  admin: string
  isFinished: any | boolean
}

export interface formCourseValues {
  title: string;
  description: string;
  admin: string;
  logo: any;
}
