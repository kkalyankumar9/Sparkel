import GoogleButton from "react-google-button"
import { useState, useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseauth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'

interface RegisterForm {
  email: string;
  password: string;
}

const SignUp = () => {
  const toast = useToast()
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
      toast({
        title: 'SignUp Successfully',
        description: "Continue to Login..",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  };
 
const handleGoBack=()=>{
  navigate(-1)
}

// Function to handle Google sign-in
const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log('Google sign-in success:', result.user);
    navigate('/login'); 
  } catch (error) {
    console.error('Google sign-in error:', error);
  }
};

  return (
<Box  bgGradient="linear(to-r, gray.300, yellow.400, pink.200)" width={"100%"} height="100vh" p={"4%"}>
      <Box
        maxWidth="sm"
        mx="auto"
        p={4}
        borderColor="gray.200"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px"
        backgroundColor="white"
        borderRadius={"10px"}
       


      >
        <Heading mb={4} color="#010008">
          Register
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl id="email" isRequired>
              <FormLabel>Email ID</FormLabel>
              <Input
                type="text"
                name="email"
                placeholder="Email Id"
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
                  variant="outline"
                  placeholder="Password"
                  h="40px"
                />
              </Stack>
            </FormControl>
            <Box>
              <Button
                type="submit"
                colorScheme="blue"
                bg="#143dc4"
                color="white"
                width="240px"
                justifyContent="center"
              >
                Sign Up
              </Button>
            </Box>
            <Box justifyItems="center" marginLeft="162px">
              <FormLabel>Or</FormLabel>
            </Box>
            <Box paddingLeft="55px" mt={2}>
              <GoogleButton onClick={handleGoogleSignIn} />
            </Box>
          </Stack>
          <Box w="100px" mt={2}>
            <button onClick={handleGoBack} >
              <ArrowBackIcon marginRight="10px" />
              Back
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;


