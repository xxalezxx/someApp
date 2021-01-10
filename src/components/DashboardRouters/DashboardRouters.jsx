import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { MainScreen } from "../mainScreen/MainScreen"
import { TablesScreen } from "../Tables/TablesScreen"
import { Navbar } from "../ui/navbar/Navbar"

export const DashboardRouters = () => {
  return (
    <>
      <Navbar />
      <div className="dashboardRouters__main">
        <Switch>
          <Route exact path="/home" component={MainScreen} />
          <Route exact path="/tables" component={TablesScreen} />
          <Route exact path="/contact" component={MainScreen} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  )
}
