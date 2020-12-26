import { Button } from "antd";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

interface formValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface PropsTypes {
  userCreate: (a: formValues) => void;
}
const CreateUser: React.FC<PropsTypes> = ({ userCreate }) => {
  const [isValid, setValid] = useState<boolean>(true);
  const initFormValues: formValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initFormValues}
      validate={(values: formValues) => {
        const errors = [];

        if (!values.email) errors.push("email must be required");
        if (!values.firstname) errors.push("firstname must be required");
        if (!values.lastname) errors.push("lastname must be required");
        if (!values.password) errors.push("password must be required");

        if (errors.length > 0) setValid(false);
        else setValid(true);
        return errors;
      }}
      onSubmit={(values: formValues, actions) => {
        userCreate(values);
        actions.setSubmitting(false);
        actions.resetForm({
          values: { firstname: "", lastname: "", email: "", password: "" },
        });
      }}
    >
      <Form style={{ display: "flex", justifyContent: "space-around" }}>
        <Field id="firstname" name="firstname" placeholder="Имя пользователя" />
        <Field
          id="lastname"
          name="lastname"
          placeholder="Фамилия пользователя"
        />
        <Field id="email" name="email" placeholder="Email пользователя" />
        <Field
          type="password"
          id="password"
          name="password"
          placeholder=" Пароль пользователя"
        />
        <Button disabled={!isValid} type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form>
    </Formik>
  );
};

export default CreateUser;