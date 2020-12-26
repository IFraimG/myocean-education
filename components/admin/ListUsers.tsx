import { Button, Table, Skeleton } from "antd";
//@ts-ignore
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { sliceUser } from "../../store/reducers/admin";

interface PropsTypes {
  usersList: Array<sliceUser>;
  isLoading: boolean;
  dropUsersThunk: (usersID: Array<string>) => void;
}
const ListUsers: React.FC<PropsTypes> = ({usersList, dropUsersThunk, isLoading}) => {
  const [rowSelection, setSelection] = useState<Array<number>>([]);

  const importantData: Array<any> = [
    { title: "Имя", dataIndex: "firstName", key: "firstName" },
    { title: "Фамилия", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "ID", dataIndex: "id", key: "id" },
  ];

  const onSelectChange = (keys: Array<number>) => setSelection(keys);

  const rowSelectionEdit = { rowSelection, onChange: onSelectChange };
  const deleteElements = () => {
    let newArray: Array<any> = [];
    rowSelection.map((key: number) => newArray.push(usersList[key].id));
    dropUsersThunk(newArray);
    setSelection([]);
  };

  return (
    <>
      {!isLoading ? (
        <>
          <Table
            rowSelection={rowSelectionEdit}
            dataSource={usersList}
            columns={importantData}
          />
          {rowSelection.length > 0 ? (
            <Button onClick={deleteElements} type="primary">
              Удалить {rowSelection.length} элементов <DeleteOutlined />
            </Button>
          ) : (
            ""
          )}
        </>
      ) : <Skeleton />}
    </>
  );
};

export default ListUsers;
