import * as React from "react";
import { Container } from "@mui/material";
import AppHeader from "../AppHeader/index";
import "./App.scss";

const App: React.FC = () => {

  return (
    <Container>
      <AppHeader>
        <h1>Elfbar</h1>
      </AppHeader>
    </Container>
  )
};

export default App;
