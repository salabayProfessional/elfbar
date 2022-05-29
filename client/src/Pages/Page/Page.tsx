import { Container } from "@mui/material";
import React from "react";
import "./Page.scss";

interface PageProps {
  children: React.ReactNode,
};

const Page: React.FC<PageProps> = ({
  children,
}) => {
  return (
    <Container id="page" >
      {
        children
      }
    </Container>
  )
};

export default Page;
