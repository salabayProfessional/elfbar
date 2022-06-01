interface Option {
  name: string,
  required: boolean,
  color: "info" | "error" | "primary" | "secondary" | "success" | "warning",
  label: string,
  variant: "standard" | "filled" | "outlined", 
};

export default Option