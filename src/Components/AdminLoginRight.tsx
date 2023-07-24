import {
  Divider,
  GridItem,
  Stack,
  Heading,
  FormControl,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState, FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AdminInput } from "../types/typeForAdmin";

import { userLoginAuth } from "../api/api";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { adminLogin } from "../Redux/AdminReducer/action";

const AdminLoginRight = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [adminInfo, setAdminInfo] = useState<AdminInput>({
    email: "",
    password: "",
  });
  const toast = useToast();
  const navigator = useNavigate();
  const { email, password } = adminInfo;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    userLoginAuth(adminInfo.email && adminInfo.password)
      .then((req) => {
        if (req.data.email === email && req.data.password === password) {
          localStorage.setItem("currentUser", req.data.name);
          dispatch(adminLogin(dispatch));
          toast({
            position: "top",
            title: "Login Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });

//           setTimeout(() => navigator("/admin-addproducts"), 3000);

          setTimeout(() => navigator("/admin"), 3000);

        } else {
          toast({
            position: "top",
            title: "Login Failed",
            status: "error",
            duration: 2000,
            isClosable: true,
            description: "Please check your email and password",
          });
        }
      })
      .catch(() =>
        toast({
          position: "top",
          title: "Login Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          description: "Please check your email and password",
        })
      );
  };

  return (
    <GridItem>
      <Stack spacing={["1rem", "3rem"]}>
        <Divider />
        <Heading as="h3" size="lg">
          Login as an Admin User
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing="2rem">
            <FormControl isRequired>
              <Input
                type="email"
                // name="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                required
                border="2px solid #282828"
                value={email}
                onChange={(e) =>
                  setAdminInfo({ ...adminInfo, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                type="password"
                // name="password"
                placeholder="Enter Your Password"
                autoComplete="off"
                border="2px solid #282828"
                required
                value={password}
                onChange={(e) =>
                  setAdminInfo({ ...adminInfo, password: e.target.value })
                }
              />
            </FormControl>
            <Stack width={["100%", "50%"]} m="auto">
              {" "}
              <Button colorScheme="teal" variant="solid" type="submit">
                Login
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </GridItem>
  );
};

export default AdminLoginRight;
