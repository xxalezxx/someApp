import React, { useContext } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"

import { PublicRoute } from "../routes/PublicRoute"
import { AuthContext } from "../auth/AuthContext"
import { LoginScreen } from "../components/Login/LoginScreen"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={user.logged}
            path="/login"
            redirect="/"
            component={LoginScreen}
          />
          <PrivateRoute
            isAuthenticated={user.logged}
            path="/"
            redirect="/login"
            component={LoginScreen}
          />
        </Switch>
      </div>
    </Router>
  )
}
