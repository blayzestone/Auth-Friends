import React from "react";
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
} from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = (props) => {
  const SubmitHandler = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/login", {
        username: "Lambda School",
        password: "i<3Lambd4",
      })
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      });
  };

  return (
    <Form onSubmit={SubmitHandler}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input id="username" name="username" />
      </FormGroup>
      <FormGroup>
        <Label for="password">password</Label>
        <Input id="password" name="password" />
      </FormGroup>
      <Button>Log in</Button>
    </Form>
  );
};

export default LoginForm;
