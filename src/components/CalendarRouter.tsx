import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../routs/routs";

const CalendarRouter: FC = () => {
  const {isAuth} = useTypedSelector(state=>state.authReducer)
  return isAuth  ? (
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
