import React, { useState } from "react";
import { Spinner, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "../hooks/useForm";

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useForm({
    username: "",
    password: "",
  });

  const SubmitHandler = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post("/api/login", formValues)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.data.error);
      });
  };

  return (
    <Form onSubmit={SubmitHandler}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input onChange={setFormValues} id="username" name="username" />
      </FormGroup>
      <FormGroup>
        <Label for="password">password</Label>
        <Input onChange={setFormValues} id="password" name="password" />
      </FormGroup>
      <Button>{isLoading ? <Spinner /> : "Log in"}</Button>
    </Form>
  );
};

export default LoginForm;
