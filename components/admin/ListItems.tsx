import { Button, Table, Skeleton } from "antd";
//@ts-ignore
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { sliceUser } from "../../store/interfaces/admin";

export type rowTypes = {
  title: string,
  dataIndex: string,
  key: number | string,
  render?: (el: string) => void
}

interface PropsTypes {
  listItems: Array<sliceUser>;
  isLoading: boolean;
  dropItems: (usersID: Array<string>) => void;
  importantData: Array<rowTypes>
}
const ListItems: React.FC<PropsTypes> = ({importantData, listItems, dropItems, isLoading}) => {
  const [rowSelection, setSelection] = useState<Array<number>>([]);
  
  const onSelectChange = (keys: Array<number>) => setSelection(keys);
  const rowSelectionEdit = { rowSelection, onChange: onSelectChange };
  const deleteElements = () => {
    let newArray: Array<any> = [];
    rowSelection.map((key: number) => newArray.push(listItems[key].id));
    
    dropItems(newArray);
    setSelection([]);
  };

  return (
    <>
      {!isLoading ? (
        <>
          <Table
            rowSelection={rowSelectionEdit}
            dataSource={listItems}
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

export default ListItems;
