import { Button } from "antd";
import { Formik, Form, Field } from "formik";
import { sendData } from "next/dist/next-server/server/api-utils";
import { useState } from "react";

interface formValues {
  title: string;
  description: string;
  admin: string;
  logo: any;
}

interface CoursesProps {
  createCourse: (courseData: any) => void;
}
const CreateCourse: React.FC<CoursesProps> = ({ createCourse }) => {
  const [isValid, setValid] = useState<boolean>(true);
  const [logo, setLogoCourse] = useState<any>("")
  const initFormValues: formValues = {
    title: "",
    description: "",
    admin: "",
    logo: "",
  };
  const sendData = (values: formValues) => createCourse({ ...values, logo })

  return (
    <Formik
      initialValues={initFormValues}
      validate={(values: formValues) => {
        const errors = [];

        if (!values.title) errors.push("email must be required");
        if (!values.admin) errors.push("lastname must be required");

        if (errors.length > 0) setValid(false);
        else setValid(true);
        return errors;
      }}
      onSubmit={(values: formValues, actions) => {
        sendData(values)
        actions.setSubmitting(false);
        actions.resetForm({
          values: { title: "", description: "", admin: "", logo: "" },
        });
      }}
    >
      <Form style={{ display: "flex", justifyContent: "space-around" }}>
        <Field id="title" name="title" placeholder="Название курса" />
        <Field
          id="description"
          name="description"
          placeholder="Описание курса"
        />
        <Field id="admin" name="admin" placeholder="ID владельца" />
        <Field
          type="file"
          id="logo"
          name="logo"
          placeholder="Изображение"
          onChange={(event: any) => setLogoCourse(event.currentTarget.files[0])}
        />
        <Button disabled={!isValid} type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form>
    </Formik>
  );
};

export default CreateCourse;
