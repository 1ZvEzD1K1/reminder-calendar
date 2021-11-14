import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../routs/routs";

const CalendarRouter = () => {
  const auth = true;
  return auth  ? (
    <Switch>
      {privateRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        );
      })}
      <Redirect to={RouteNames.CALENDAR}/>
    </Switch>
  ) : (
    <Switch>
        {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        );
      })}
      <Redirect to={RouteNames.LOGIN}/>
    </Switch>
  );
};

export default CalendarRouter;
