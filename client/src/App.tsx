import { Container } from "@mui/material"
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import AppHeader from "./Components/AppHeader";
import AboutUs from "./Pages/AboutUs";
import Elfbars from "./Pages/Elfbars";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <Container disableGutters={true}>
      <BrowserRouter>
        <AppHeader />
        <React.Fragment>
            <Switch>
              <Route exact path="/about-us" component={AboutUs}/>
              <Route exact path="/elfbars" component={Elfbars}/>
              <Route exact path="/sign-in" component={SignIn}/>
              <Route exact path="/sign-up" component={SignUp}/>
              <Route exact path="/profile" component={Profile}/>
            </Switch>
        </React.Fragment>
    </BrowserRouter>
    </Container>
  )
}

export default App
