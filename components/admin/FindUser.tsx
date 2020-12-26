import { UserOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"
import { useEffect, useState } from "react"

interface PropsTypes {
  sendUserData: (id: string) => void,
  userData: any
}
const FindUser: React.FC<PropsTypes> = ({sendUserData, userData}) => {  
  const [inputValue, setValue] = useState<string>("")
  const [arrValues, setInfo] = useState<Array<any>>([])
  const sendInputData = (event: any) => setValue(event.target.value)

  useEffect(() => {
    if (userData != null) {
      let newArray: Array<any> = []
      for (let key in userData) {
        if (userData.hasOwnProperty(key)) newArray.push({key: key, value: userData[key]})
      }
      setInfo(newArray)
    }
  }, [userData])
  return (
    <div>
      <div style={{display: "flex", alignItems: "center"}}>
        <Input value={inputValue} onChange={sendInputData} size="large" placeholder="Введите id пользователя" prefix={<UserOutlined />} />
        <Button onClick={() => sendUserData(inputValue)} style={{marginLeft: "20px"}} type="primary">Найти</Button>
      </div>
      <div style={{marginTop: "30px", width: "400px"}}>
        { arrValues.length > 0 ?
          arrValues.map((item: any) => {
            if (item.key != "password" && item.key != "updatedAt") {
              return (
                <div style={{display: "flex", borderTop: "1px solid rgba(0,0,0,0.3)", padding: "15px 5px"}}>
                  <p style={{width: "100px"}}>{item.key}:</p>
                  <p style={{marginLeft: "30px"}}>{item.value}</p>
                </div>
              )
            }
          })
        : "" }
      </div>
    </div>
  )
}

export default FindUser