import React, { useState } from 'react';
import { Container, Form, Input, Button, IconBox, Icon } from "./style"
import { FaWindowClose } from "react-icons/fa";

interface ModalProps {
  onClose: any
}
const Update: React.FC<ModalProps> = ({onClose}) => {

  const [user, setUser] = useState({
    name: String,
    city: String,
    cpf: String
  })

  return (
    <Container>
        <div>
          <Form>
            <IconBox>
              <button>
                <FaWindowClose style={Icon}/>
              </button>
            </IconBox>
            <h4>Name</h4>
            <Input></Input>
            <h4>City</h4>
            <Input></Input>
            <h4>CPF</h4>
            <Input></Input>
            <Button>Update</Button>
          </Form>
        </div>
    </Container>
  );
}

export default Update;
