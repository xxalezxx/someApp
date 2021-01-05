import React from "react"
import { Redirect, Route } from "react-router-dom"
import PropTypes from "prop-types"

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  redirect,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}
