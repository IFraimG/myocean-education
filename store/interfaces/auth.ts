export type userLogin = {
  email: string
  password: string
  remember: boolean
}
export interface userRegistation {
  firstname: string
  lastname: string
  email: string
  password: string
}


export interface stateAuthType {
  isAuth: boolean
  error: string | null
};