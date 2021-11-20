import { Layout, Menu } from "antd";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routs/routs";

const Navbar: FC = () => {
  const history = useHistory();

  const { isAuth } = useTypedSelector((state) => state.authReducer);
  return (
    <Layout.Header>
        {isAuth ? (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("exit")} key="1">
                Exit
              </Menu.Item>

              <div
              style={{
                color: "white",
              }}
            >
              your name
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
