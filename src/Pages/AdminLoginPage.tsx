import React from "react";
import { Grid, Flex } from "@chakra-ui/react";
import AdminPageLoginLeft from "../Components/AdminPageLoginLeft";
import AdminLoginRight from "../Components/AdminLoginRight";

const AdminLoginPage = () => {
  return (
    <>
      <Flex h="100vh" w="80%" m="auto" alignItems="center">
        <Grid w="90%" gridTemplateColumns="repeat(2,1fr)">
          <AdminPageLoginLeft />
          <AdminLoginRight />
        </Grid>
      </Flex>
    </>
  );
};

export default AdminLoginPage;
