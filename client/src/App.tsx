import { Container } from "@mui/material"
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import AppHeader from "./Components/AppHeader/AppHeader.tsx";

const Home = () => {

  return (
    <h1>Home</h1>
  )
}

const About = () => {

  return (
    <h1>Home</h1>
  )
}

const User = () => {

  return (
    <h1>HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome</h1>
  )
}

const App = () => {
  return (
    <Container disableGutters>
      <BrowserRouter>
        <AppHeader>
          <h1>LOGO</h1>
        </AppHeader>
        <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/elfbars" component={About}/>
              <Route exact path="/sign-in" component={User}/>
            </Switch>
        </React.Fragment>
    </BrowserRouter>
    </Container>
  )
}

export default App
