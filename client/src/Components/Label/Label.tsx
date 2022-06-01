import { TextField } from "@mui/material";
import React from "react";
import "./Label.scss";
import Option from "./Option";


interface LabelProps {
  element: Option,
  register: any,
  errors: any
}

const Label: React.FC<LabelProps> = ({
  element,
  register,
  errors,
}) => {
  return (
    <li>
       <TextField className="primary-text-field" 
        {...register(element.name)} 
        required={element.required}  
        fullWidth={false} 
        color={element.color}
        label={element.label} 
        variant={element.variant}
        key={element.name}
      />
      <p>{ errors[element.name]?.message }</p>
    </li>
  )
};

export default Label;
