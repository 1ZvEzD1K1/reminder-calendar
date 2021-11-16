import React, { FC, useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Form.Item
        name="Email"
        label="Email"
        rules={[{ type: "email" }, { required: true }]}
      >
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} />
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
        <Input.Password value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={()=>console.log(email, password)}>
          Login
        </Button>
        <Link to="/registration"> Or register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
