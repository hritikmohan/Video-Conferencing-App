import React from "react";
import { Button, Card, Typography, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (values) => {
    console.log(values);
  };

  return (
    <Card className="form-container">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>
        {/* form */}
        <Typography.Title level={3} strong className="title">
          Login
        </Typography.Title>
        <Typography.Text type="secondary" strong className="slogan">
          Welcome back! Please log in to your account.
        </Typography.Text>
        <Form layout="vertical" onFinish={handleLogin} autoComplete="off" style={{ width: '100%', maxWidth: '400px' }}>
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="btn"
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Typography.Text type="secondary">
              Don't have an account? <Link to="/register">Create one</Link>
            </Typography.Text>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default Login;
