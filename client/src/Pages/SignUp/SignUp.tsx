import React from "react";
import { Button, TextField } from "@mui/material";
import Page from "../Page";
import "./SignUp.scss";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>

        <h1 className="background-inscription">SIGN UP</h1>
        
        <div className="sign-up__content">
          
          <TextField className="primary-text-field" 
            {...register("firstName")} 
            required  
            fullWidth={false} 
            id="standard-basic-1" 
            color="info" 
            label="First Name" 
            variant="standard" 
          />
          
          <TextField className="primary-text-field" 
            {...register("lastName")} 
            required  
            fullWidth={false} 
            id="standard-basic-2" 
            color="info" 
            label="Last Name" variant="standard" 
          />
            
          <TextField className="primary-text-field" 
            {...register("surname")} 
            required  
            fullWidth={false} 
            id="standard-basic-3" 
            color="info" 
            label="Surname" variant="standard" 
          />
          
          <TextField className="primary-text-field" 
            {...register("login")} 
            required  
            fullWidth={false} 
            id="standard-basic-4" 
            color="info" 
            label="Login" variant="standard"   
          />
          
          <TextField className="primary-text-field" 
            {...register("email")} 
            required  
            fullWidth={false} 
            id="standard-basic-4" 
            color="info" 
            label="Email" variant="standard" 
          />
            
          <TextField className="primary-text-field" 
            {...register("password")} 
            required  
            fullWidth={false} 
            id="standard-basic-4" 
            color="info" 
            label="Password" variant="standard" 
          />
          
          <TextField className="primary-text-field" 
            {...register('age', { pattern: /\d+/ })} 
            required  
            fullWidth={false} 
            id="standard-basic-5" 
            color="info" 
            label="Age" variant="standard" 
          />

        </div>
        <div className="sign-up__bottom">
          <Button variant="outlined" type="submit">SIGN UP</Button>
          <NavLink to="/sign-in" className="switcher-to-sign-in">Sign In</NavLink>
        </div>
      </form>
    </ Page>
  )
};

export default SignUp;
