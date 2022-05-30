import React from "react";
import { Button, TextField } from "@mui/material";
import Page from "../Page";
import "./SignUp.scss";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import List from "../../Components/List";

interface Option {
  name: string,
  required: boolean,
  color: "info" | "error" | "primary" | "secondary" | "success" | "warning",
  label: string,
  variant: "standard" | "filled" | "outlined", 
};

const options: Option[] = [
  {
    name: "firstName",
    required: true,
    color: "info",
    label: "Login",
    variant: "standard" 
  },
  {
    name: "lastName",
    required: true,
    color: "info",
    label: "Password",
    variant: "standard" 
  },
  {
    name: "surname",
    required: true,
    color: "info",
    label: "Login",
    variant: "standard" 
  },
  {
    name: "login",
    required: true,
    color: "info",
    label: "Password",
    variant: "standard" 
  },
  {
    name: "email",
    required: true,
    color: "info",
    label: "Login",
    variant: "standard" 
  },
  {
    name: "password",
    required: true,
    color: "info",
    label: "Password",
    variant: "standard" 
  },
  {
    name: "age",
    required: true,
    color: "info",
    label: "Password",
    variant: "standard" 
  },
];

const SignUp: React.FC = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  const label = (element: Option) => {
    return (
    <TextField className="primary-text-field" 
      {...register(element.name)} 
      required={element.required}  
      fullWidth={false} 
      color={element.color}
      label={element.label} 
      variant={element.variant}   
      key={element.name}
    />
    )
  }

  return (
    <Page>
      <form onSubmit={onSubmit} className="sign-up">

        <List options={options} className="sign-up__body">
          { label }
        </List>

        <div className="sign-up__bottom">
          <Button variant="outlined" type="submit">SIGN UP</Button>
          <NavLink to="/sign-in" className="sign-up_link">SIGN IN</NavLink>
        </div>
      </form>
    </ Page>
  )
};

export default SignUp;
