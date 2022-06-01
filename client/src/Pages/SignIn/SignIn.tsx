import React from "react";
import { Button, TextField } from "@mui/material";
import Page from "../Page";
import "./SignIn.scss";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import List from "../../Components/List";
import options from "./options";
import Option from "../../Components/Label/Option";
import Label from "../../Components/Label";

const SignIn: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Page>
      <form onSubmit={onSubmit} className="sign-in">

        <List options={options} className="sign-in__body">
          {(option: Option) => {
            return (
              <Label element={option} register={register} errors={errors}/>
            )
          }}
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
