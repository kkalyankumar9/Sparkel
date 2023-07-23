// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button, Form, Container, Row, Col } from 'react-bootstrap';
// import { AuthContext } from '../context/Authcontext';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../firebaseauth";

// interface RegisterForm{
//   email: string;
//   password: string
// }

// const SignupPage = () => {
 
//   const navigate= useNavigate()
//   const {isAuthenticated} = useContext(AuthContext);
//   const [registerForm, setRegisterForm] = useState<RegisterForm>({
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setRegisterForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(registerForm.email,registerForm.password)
//     createUserWithEmailAndPassword(auth,registerForm.email,registerForm.password)
//     .then((res)=>{
//       console.log(res)
//       navigate("/login")
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   };

//   const handleGoBack=()=>{
//     navigate(-1)
//   }

//   return (
//     <Container className="signup-container">
//       <Row className="justify-content-center">
//         <Col md={6} className="signup-form-container">
//           <h1 className="mb-4">Create an Account</h1>
//           <Form onSubmit={handleSubmit}>
            
//             <Form.Group controlId="formBasicEmail">
//               <Form.Control
//                 type="email"
//                 name = "email"
//                 placeholder="Email"
//                 value={registerForm.email}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Control
//                 type="password"
//                 name= "password"
//                 placeholder="Password"
//                 value={registerForm.password}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mb-3 btn-block">
//               Sign Up
//             </Button>
//           </Form>
//           <p className="text-center mt-3">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignupPage;



import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/Authcontext';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseauth';

import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

interface RegisterForm {
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate=useNavigate()
  const { isAuthenticated } = useContext(AuthContext);
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerForm.email,registerForm.password)
    createUserWithEmailAndPassword(auth,registerForm.email,registerForm.password)
    .then((res)=>{
      console.log(res)
      navigate("/login")
    })
    .catch((error)=>{
      console.log(error)
    })

 
  };
 

const handleGoBack=()=>{
  navigate(-1)
}
  return (
    <Box maxWidth="sm" mx="auto" p={4}  borderColor="gray.200" boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px" marginTop={"5%"}>
      <Heading mb={4} color={"#010008"}>Register</Heading>
      <form onSubmit={handleSubmit} >
        <Stack spacing={3}>
          <FormControl id="email" isRequired>
            <FormLabel>Email ID</FormLabel>
            <Input
              type="text"
              name="email"
              placeholder='Email Id'
              value={registerForm.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Stack spacing={3}>
            <Input
              type="password"
              name="password"
              value={registerForm.password}
              onChange={handleInputChange}
              variant='outline' placeholder='password'
             h={"40px"}
            />

            </Stack>
            
          </FormControl>
          <Button type="submit" colorScheme="143dc4"  bg="#143dc4" color={"white"}>
          SignUp
          </Button>
        </Stack>
        <Box w="100px">
        <button onClick={handleGoBack} > <br /><ArrowBackIcon marginRight={"10px"}/>Back</button>
        </Box>
      </form>
      
    </Box>
  );
};

export default SignUp;


