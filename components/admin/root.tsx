import { Card, Button, Switch, Collapse, Table, Skeleton } from "antd";
//@ts-ignore
import { DeleteOutlined } from "@ant-design/icons"
import { Formik, Form, Field } from "formik"
import { useState } from "react";
import { sliceUser } from "../../store/reducers/admin";
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
  getAllUsersThunk: () => void,
  setLoader: () => void,
  dropUsersThunk: (usersID: Array<string>) => void
};
const AdminRoot: React.FC<PropsTypes> = ({usersList, userCreate, getAllUsersThunk, dropUsersThunk, setLoader, isLoading}) => {
  const [isValid, setValid] = useState(true)
  const [rowSelection, setSelection] = useState<Array<number>>([])
  const initFormValues: formValues = { firstname: "", lastname: "", email: "", password: "" }
  
  const importantData: Array<any> = [
    { title: "Имя", dataIndex: "firstName", key: "firstName" },
    { title: "Фамилия", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "ID", dataIndex: "id", key: "id" }
  ]

  const editOpen = (key: any) => {
    let isUsersKey = key.includes("2")
    if (isUsersKey) {
      setLoader()
      getAllUsersThunk()
    }
  }

  const onSelectChange = (keys: Array<number>) => setSelection(keys)

  const rowSelectionEdit = { rowSelection, onChange: onSelectChange }
  const deleteElements = () => {
    let newArray: Array<any> = []
    rowSelection.map((key: number) => newArray.push(usersList[key].id))
    dropUsersThunk(newArray)
    setSelection([])
  }

  return (
    <>
      <Collapse defaultActiveKey={["1"]} onChange={editOpen}>
        <Panel key="1" header="Добавить пользователя">
            <Formik 
              initialValues={initFormValues} 
              validate={(values: formValues) => {
                const errors = []

                if (!values.email) errors.push("email must be required");
                if (!values.firstname) errors.push("firstname must be required");
                if (!values.lastname) errors.push("lastname must be required");
                if (!values.password) errors.push("password must be required");

                if (errors.length > 0) setValid(false)
                else setValid(true)

                return errors
              }} 
              onSubmit={async (values: formValues, actions) => {
                await userCreate(values)
                actions.setSubmitting(false)
                actions.resetForm({values: {firstname: "", lastname: "", email: "", password: ""}})
              }}>
              <Form style={{ display: "flex", justifyContent: "space-around" }}>
                <Field id="firstname" name="firstname" placeholder="Имя пользователя" />
                <Field id="lastname" name="lastname" placeholder="Фамилия пользователя" />
                <Field id="email" name="email" placeholder="Email пользователя" />
                <Field type="password" id="password" name="password" placeholder=" Пароль пользователя" />
                <Button disabled={!isValid} type="primary" htmlType="submit">Отправить</Button>
              </Form>
            </Formik>
        </Panel>
        <Panel key="2" header="Просмотр всех пользователей" >
          { !isLoading ?
            <>
              <Table rowSelection={rowSelectionEdit} dataSource={usersList} columns={importantData} />
              { rowSelection.length > 0 ? ( 
                  <Button onClick={deleteElements} type="primary">
                    Удалить {rowSelection.length} элементов <DeleteOutlined />
                  </Button> 
                ): "" 
              }
            </>
            : <Skeleton />
          }
        </Panel>
      </Collapse>
    </>
  )
};

export default AdminRoot;