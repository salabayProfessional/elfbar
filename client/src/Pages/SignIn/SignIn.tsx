import React from "react";
import { Button, TextField } from "@mui/material";
import Page from "../Page";
import "./SignIn.scss";
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

const SignIn: React.FC = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const options: Option[] = [
    {
      name: "login",
      required: true,
      color: "info",
      label: "Login",
      variant: "standard",
    },
    {
      name: "password",
      required: true,
      color: "info",
      label: "Password",
      variant: "standard" 
    }
  ];

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
      <form onSubmit={onSubmit} className="sign-in">

        <List options={options} className="sign-in__body">
          { label }
        </List>

        <div className="sign-in__bottom">
          <Button variant="outlined" type="submit">SIGN IN</Button>
          <NavLink to="/sign-up" className="sign-in_link">SIGN UP</NavLink>
        </div>
      </form>
    </ Page>
  )
};

export default SignIn;
