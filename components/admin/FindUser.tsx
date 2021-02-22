import { UserOutlined } from "@ant-design/icons"
import { Button, Input, Divider, Alert } from "antd"
import { useEffect, useState } from "react"

interface PropsTypes {
  sendUserData: (id: string) => void,
  sendUserDataName: (firstname: string, lastname: string) => void
  userData: any,
  errors: Array<string>
}
const FindUser: React.FC<PropsTypes> = ({sendUserData, sendUserDataName, userData, errors}) => {  
  const [inputValue, setValue] = useState<string>("")
  const [fullName, setName] = useState<any>({firstname: "", lastname: ""})
  const [arrValues, setInfo] = useState<Array<any>>([])

  const sendInputData = (event: any) => setValue(event.target.value)
  const sendInputName = (event: any) => setName({firstname: event.target.value, lastname: fullName.lastname})
  const sendInputLastName = (event: any) => setName({firstname: fullName.firstname, lastname: event.target.value})
  
  useEffect(() => {
    
    if (userData != null) {
      setName({})
      setValue("")
      let newArray: Array<any> = []
      for (let key in userData) {
        if (userData.hasOwnProperty(key)) newArray.push({key: key, value: userData[key]})
      }
      setInfo(newArray)
    }
  }, [userData])
  return (
    <div>
      <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
        <Input value={inputValue} onChange={sendInputData} size="large" placeholder="Введите id пользователя" prefix={<UserOutlined />} />
        <Button onClick={() => sendUserData(inputValue)} style={{marginLeft: "20px"}} type="primary">Найти</Button>
      </div>
      <Divider plain>или</Divider>
      <div style={{display: "flex", alignItems: "center", marginTop: "20px" }}>
        <Input style={{marginRight: "20px"}} value={fullName.firstname} onChange={sendInputName} size="large" placeholder="Введите имя пользователя" prefix={<UserOutlined />} />
        <Input value={fullName.lastname} onChange={sendInputLastName} size="large" placeholder="Введите фамилию пользователя" prefix={<UserOutlined />} />
        <Button onClick={() => sendUserDataName(fullName.firstname, fullName.lastname)} style={{marginLeft: "20px"}} type="primary">Найти</Button>
      </div>
      <div style={{marginTop: "30px", width: "400px"}}>
        { arrValues.length > 0 ?
          arrValues.map((item: any, index: number) => {
            if (item.key != "password" && item.key != "updatedAt") {
              return (
                <div key={index} style={{display: "flex", borderTop: "1px solid rgba(0,0,0,0.3)", padding: "15px 5px"}}>
                  <p style={{width: "100px"}}>{item.key}:</p>
                  <p style={{marginLeft: "30px"}}>{item.value}</p>
                </div>
              )
            }
          })
        : "" }
        { errors.length > 0 ?
          errors.map((err: string, index: number) => {
            return <Alert key={index} message={err} type="error" />
          })
        : ""}
      </div>
    </div>
  )
}

export default FindUser