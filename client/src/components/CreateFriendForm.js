import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "../hooks/useForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FormContainer from "./StyledForm";

const CreateFriendForm = ({ updateFriends }) => {
  const initialFormValues = {
    name: "",
    age: "",
    email: "",
  };

  const [formValues, setFormValues] = useForm(initialFormValues);

  const createFriend = (evt) => {
    evt.preventDefault();

    axiosWithAuth()
      .post("/api/friends", formValues)
      .then((res) => updateFriends(res.data));
  };

  return (
    <FormContainer>
      <Form onSubmit={createFriend}>
        <h2>Create'a'Friend</h2>
        <FormGroup>
          <Label htmlFor="name">Name ya friend</Label>
          <Input onChange={setFormValues} id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">How old is ya friend?</Label>
          <Input onChange={setFormValues} id="age" name="age" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">What's ya friend's email?</Label>
          <Input onChange={setFormValues} id="email" name="email" />
        </FormGroup>
        <Button>Create'a'Friend</Button>
      </Form>
    </FormContainer>
  );
};

export default CreateFriendForm;
