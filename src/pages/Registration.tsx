import React, { FC } from "react";
import { Alert, Card, Layout, Row } from "antd";
import RegistrationForm from "../components/RegistrationForm";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useHistory } from "react-router";

const Registration: FC = () => {
  const { status } = useTypedSelector((state) => state.registrationReducer);
  const history = useHistory();

  if (status === null) {
    return (
      <Layout>
        <Row justify="center" align="middle" className="h100">
          <RegistrationForm />
        </Row>
      </Layout>
    );
  } else {
    setTimeout(() => {
      history.push("/login");
    }, 4000);
    return (
      <Layout>
        <Card>
          <Alert
            message="Success Tips"
            description="Registration success"
            type="success"
            showIcon
          />
        </Card>
      </Layout>
    );
  }
};

export default Registration;
