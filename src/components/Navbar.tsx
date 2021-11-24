import { Layout, Menu } from "antd";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../redux/redusers/auth/authActionCreators";
import { CalendarActionCreators } from "../redux/redusers/calendars/calendarActionCreators";
import { RouteNames } from "../routs/routs";

const Navbar: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth, user, token } = useTypedSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    if (token) {
      dispatch(CalendarActionCreators.getCalendars());
    }
  }, [token, dispatch]);

  const exit = () => {
    dispatch(AuthActionCreators.sendData(""));
    dispatch(AuthActionCreators.setAuth(false));
  };
  return (
    <Layout.Header>
      {isAuth ? (
        <>
          <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={exit} key="1">
                Exit
              </Menu.Item>

              <div
                style={{
                  color: "white",
                  padding: "0px 20px 0px 20px",
                }}
              >
                {user.username}
              </div>
          </Menu>
        </>
      ) : (
        <>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => history.push(RouteNames.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        </>
      )}
    </Layout.Header>
  );
};

export default Navbar;
