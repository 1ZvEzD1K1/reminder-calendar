import React, { FC, useState } from "react";
import { Button, Form, Input, Spin } from "antd";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../redux/redusers/auth/authActionCreators";

const LoginForm: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useTypedSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const submitAuth = () => {
    dispatch(AuthActionCreators.request(username, password));
  };

  return (
    <Form onFinish={submitAuth}>
      <Form.Item name="nickname" label="Nickname" rules={[{ required: true }]}>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          {
            min: 8,
            message: "Minimum 8 characters",
          },
        ]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        {isLoading && <Spin style={{ padding: "5px" }} />}
        <Link to="/registration"> Or register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
