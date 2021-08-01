import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import http from "../../services/http";

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const loginInput = useRef(null);
  const passInput = useRef(null);

  const onLogin = (e) => {
    e.preventDefault();
    http
      .post("/login", {
        email: loginInput.current.value,
        password: passInput.current.value,
      })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
      })
      .catch(() => {
        setHasError(true);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setHasError(false);
    }, 3000);
  });

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="5">
          <Card className="mt-5 p-3">
            <Card.Title className="text-center">Login Page</Card.Title>
            <Card.Body className="p-0">
              {hasError ? (
                <Alert variant="danger">Login or Password is a error</Alert>
              ) : (
                <></>
              )}
              <Form onSubmit={onLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    ref={loginInput}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={passInput}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  className="d-flex justify-content-center"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
