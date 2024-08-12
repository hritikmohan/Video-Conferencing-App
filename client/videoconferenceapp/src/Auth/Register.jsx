import React from "react";
import { Button, Card, Typography, Form, Input, Alert } from "antd";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Register = () => {
    const {loading, error, registerUser} = useSignup();
  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className="form-container">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>
        {/* form */}
        <Typography.Title level={3} strong className="title">
          Create an account
        </Typography.Title>
        <Typography.Text type="secondary" strong className="slogan">
          Join for exclusive access!
        </Typography.Text>
        <Form layout="vertical" onFinish={handleRegister} autoComplete="off" style={{ width: '100%', maxWidth: '400px' }}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your full name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "This input is not a valid Email!",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="passwordConfirm"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Re-enter your password"
            />
          </Form.Item>

          {error && (
            <Alert
            description={error}
            type="error"
            showIcon
            closable
            className="alert"
            />
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="btn"
            >
              {loading? <Spin />: 'Create Account'}
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/login">
              <Button size="large" className="btn">Sign In</Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default Register;
