import React, { FC, useState } from "react";
import { Button, Form, Input, Spin } from "antd";
import { RegistrationActionCreators } from "../redux/redusers/registration/registrationActionCreators";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RegistrationForm: FC = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useTypedSelector((state) => state.registrationReducer);
  const dispatch = useDispatch();

  const submitRegistration = () => {
    dispatch(RegistrationActionCreators.request(nickname, email, password));
  };

  return (
    <Form onFinish={submitRegistration}>
      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            min: 8,
            message: "Minimum 8 characters",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="comfirm"
        label="Confirm Password"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        {isLoading && <Spin style={{padding: "5px"}} />}
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
