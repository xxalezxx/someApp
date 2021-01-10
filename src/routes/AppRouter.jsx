import React, { useContext } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"

import { PublicRoute } from "../routes/PublicRoute"
import { AuthContext } from "../auth/AuthContext"
import { LoginScreen } from "../components/Login/LoginScreen"
import { PrivateRoute } from "./PrivateRoute"
import { DashboardRouters } from "../components/DashboardRouters/DashboardRouters"

export const AppRouter = () => {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={user.logged}
            exact
            path="/login"
            redirect="/"
            component={LoginScreen}
          />
          <PrivateRoute
            isAuthenticated={user.logged}
            path="/"
            redirect="/login"
            component={DashboardRouters}
          />
        </Switch>
      </div>
    </Router>
  )
}
