import React, { useState } from 'react';
import { Container, Form, Input, Button } from "./styled"

interface ModalProps {
  onClose: any
}
const Register: React.FC<ModalProps> = ({onClose}) => {

  const [user, setUser] = useState({
    name: String,
    city: String,
    cpf: String
  })

  return (
    <Container>
        <div>
          <Form>
            <h4>Name</h4>
            <Input></Input>
            <h4>City</h4>
            <Input></Input>
            <h4>CPF</h4>
            <Input></Input>
            <Button>Register</Button>
          </Form>
        </div>
    </Container>
  );
}

export default Register;
