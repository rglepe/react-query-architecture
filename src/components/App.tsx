import { AppBar, Toolbar, Box } from "@mui/material";
import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useGetProfile } from "../api/auth";
import { pageRoutes } from "../constant.routes";
import Appointment from "../pages/Appointment";
import Appointments from "../pages/Appointments";
import Auth from "../pages/Auth";
import "./App.css";

import UserProfile from "./UserProfile/UserProfile";

function App() {
  const history = useHistory();
  const { error } = useGetProfile();

  useEffect(() => {
    if (error) {
      history.replace(pageRoutes.auth);
    }
  }, [error]);

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box display="flex" justifyContent="flex-end" width="100%">
            <UserProfile />
          </Box>
        </Toolbar>
      </AppBar>

      <Box width={500} m="auto" mt={2}>
        <Switch>
          <Route path={pageRoutes.main} exact>
            <Appointments />
          </Route>
          <Route path={pageRoutes.auth} exact>
            <Auth />
          </Route>
          <Route path={pageRoutes.appointment} exact>
            <Appointment />
          </Route>
        </Switch>
      </Box>
    </>
  );
}

export default App;
