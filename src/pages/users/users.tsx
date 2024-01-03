import React, { useState } from 'react';
import { Container, Button, RegisterButtonBox, ButtonsBox} from './styled'
import Register from '../register/register';
import { FaDeleteLeft } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Update from '../update/update';

const Users = () => {

  const [showModalRegister, setShowModalRegister] = useState(false)

  const [showModalUpdate, setShowModalUpdate] = useState(false)


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
                  <ButtonsBox>
                    <button>
                      <FaDeleteLeft/>
                    </button>
                    <button onClick={() => setShowModalUpdate(true)}>
                      {showModalUpdate ? <Update onClose={() => setShowModalUpdate(false)}/> : null}
                      <FaRegEdit/>
                    </button>
                  </ButtonsBox>
                </div>
            </div>
          </div>
          
          <RegisterButtonBox>
            <Button onClick={() => setShowModalRegister(true)}>New User</Button>
            {showModalRegister ? <Register onClose={() => setShowModalRegister(false)}/> : null}
          </RegisterButtonBox>
        </div>
    </Container>
  );
}

export default Users;
