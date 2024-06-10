import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [registeredCred, setRegisteredCred] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (userName && password) {
      setRegisteredCred({ userName, password });
      setIsRegistered(true);
      alert('Registration successful');
    } else {
      alert('Please provide both username and password to register');
    }
  };

  const handleLogin = () => {
    if (isRegistered && userName === registeredCred.userName && password === registeredCred.password) {
      navigate('/home');
    } else {
      alert('Invalid login credentials');
    }
  };


  return (
    <MDBContainer fluid className="p-3 my-5">
      <h1 className="text-center">Login Form</h1>
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <MDBInput
            wrapperClass='mb-4'
            label='User Name'
            id='formControlLg'
            type='text'
            size="lg"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='formControlLg'
            type='password'
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isRegistered ? (
            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleRegister}>
              Register
            </MDBBtn>
          ) : (
            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleLogin}>
              Sign in
            </MDBBtn>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
