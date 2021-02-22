import { Button } from "antd";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

interface formValues {
  userID: string
  courseID: string
}
interface PropsTypes {
  addUser: (userID: string, courseID: string) => void,
  errors: Array<string>,
}
const AddUserCourse: React.FC<PropsTypes> = ({addUser, errors}) => {
  const [isValid, setValid] = useState<boolean>(true);
  const initFormValues: formValues = { userID: "", courseID: "" };

  return (
    <Formik
      initialValues={initFormValues}
      validate={(values: formValues) => {
        const errors = [];

        if (!values.userID) errors.push("userID must be required");
        if (!values.courseID) errors.push("courseID must be required");

        if (errors.length > 0) setValid(false);
        else setValid(true);
        return errors;
      }}
      onSubmit={(values: formValues, actions) => {
        addUser(values.userID, values.courseID);
        actions.setSubmitting(false);
        actions.resetForm({values: { userID: "", courseID: "" }});
      }}
    >
      <Form style={{ display: "flex", justifyContent: "space-around" }}>
        <Field id="courseID" name="courseID" placeholder="ID курса" />
        <Field id="userID" name="userID" placeholder="ID пользователя" />
        <Button disabled={!isValid} type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form>
    </Formik>
  )
}

export default AddUserCourse