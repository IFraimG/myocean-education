import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Upload } from "antd";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { formCourseValues } from "../../store/interfaces/admin";

interface CoursesProps {
  createCourse: (courseData: any) => void;
}
const CreateCourse: React.FC<CoursesProps> = ({ createCourse }) => {
  const [isValid, setValid] = useState<boolean>(true);
  const [isFinished, setFinished] = useState<boolean>(false)
  const [logo, setLogoCourse] = useState<any>(null)
  const initFormValues: formCourseValues = {
    title: "",
    description: "",
    admin: "",
    logo: "",
  };

  const inputStyle = {
    maxHeight: "30px",
  }
  const sendData = (values: formCourseValues) => createCourse({ ...values, logo, isFinished })
  
  return (
    <Formik
      initialValues={initFormValues}
      validate={(values: formCourseValues) => {
        const errors = [];

        if (!values.title) errors.push("email must be required");
        if (!values.admin) errors.push("lastname must be required");      

        if (errors.length > 0) setValid(false);
        else setValid(true);
        return errors;
      }}
      onSubmit={(values: formCourseValues, actions) => {
        console.log(isFinished);
        
        sendData(values)
        actions.setSubmitting(false);
        actions.resetForm({
          values: { title: "", description: "", admin: "", logo: "" },
        });
        setLogoCourse(null)
        setFinished(false)
      }}
    >
      <Form style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
        <Field id="title" name="title" placeholder="Название курса" style={inputStyle} />
        <Field
          id="description"
          name="description"
          placeholder="Описание курса"
          style={inputStyle}
        />
        <Field id="admin" name="admin" placeholder="ID владельца" style={inputStyle} />
         <Upload multiple onChange={(info: any) => setLogoCourse(info.file)}>
          <Button icon={<UploadOutlined />}>Загрузить логотип</Button>
        </Upload>
        <Checkbox onChange={(event: any) => setFinished(event.target.checked)}>Законченный курс</Checkbox>
        <Button disabled={!isValid} type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form>
    </Formik>
  );
};

export default CreateCourse;
