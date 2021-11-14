import React from "react";
import Login from "../pages/Login";
import Calendar from "../pages/Calendar";
import Registration from "../pages/Registration";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    REGISTRATION = '/registration',
    CALENDAR = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login},
    {path: RouteNames.REGISTRATION, exact: true, component: Registration}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.CALENDAR, exact: true, component: Calendar}
]