import React from "react";
import { Button, TextField } from "@mui/material";
import Page from "../Page";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import List from "../../Components/List";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import "./SignUp.scss";
import options from "./options";
import Option from "../../Components/Label/Option";
import Label from "../../Components/Label";

const SignUp: React.FC = () => {

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.number().positive().integer().required(),
    surname: yup.string().required(),
    login: yup.string().min(6).max(12).required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    age: yup.number().max(3).required()
  }).required();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Page>
      <form onSubmit={onSubmit} className="sign-up">

        <List options={options} className="sign-up__body">
          {(option: Option) => {
            return (
              <Label element={option} register={register} errors={errors}/>
            )
          }}
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
