import React, { useState } from 'react';
import { Container } from './styled'
import Register from '../register/register';

const Users = () => {

  const [showModal, setShowModal] = useState(false)
  return (
    <Container>
        <div id='user_box'>
          <div className='users'></div>
          
          <div>
            <button onClick={() => setShowModal(true)}>New User</button>
            {showModal ? <Register onClose={() => setShowModal(false)}/> : null}
          </div>
        </div>
    </Container>
  );
}

export default Users;
