import React, { useState } from 'react';
import { Container, Button, ButtonBox} from './styled'
import Register from '../register/register';
import { FaDeleteLeft } from "react-icons/fa6";

const Users = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <Container>
        <div>
          <div id='users_box'>
            <div className='users'>
                <div>
                  <p>Gustavo da Silva Lima</p>
                  <p>765.192.098-12</p>
                </div>
                <div>
                  <p>Rio de Janeiro</p>
                  <button>
                    <FaDeleteLeft/>
                  </button>
                </div>
            </div>
          </div>
          
          <ButtonBox>
            <Button onClick={() => setShowModal(true)}>New User</Button>
            {showModal ? <Register onClose={() => setShowModal(false)}/> : null}
          </ButtonBox>
        </div>
    </Container>
  );
}

export default Users;
