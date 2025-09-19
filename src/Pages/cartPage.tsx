import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { decrementQty, deleteItem, fetchCart, incrementQty } from "../Redux/Cart/action";



const CartPage = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // ✅ get cart state from Redux
  const { items: cartData, loading, error } = useAppSelector(
    (state) => state.cartReducer
  );

  // ✅ Fetch cart on load
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // ✅ Subtotal calculation
  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  // ✅ Discount logic
  const calculateDiscount = () => {
    if (subtotal >= 1000 && subtotal < 2000) return Math.floor(subtotal * 0.2);
    if (subtotal >= 2000 && subtotal < 4000) return Math.floor(subtotal * 0.3);
    if (subtotal >= 4000) return Math.floor(subtotal * 0.4);
    return Math.floor(subtotal * 0.6);
  };

  const discount = calculateDiscount();
  const deliveryCharge = subtotal > 0 ? 50 : 0;
  const totalAmount = Math.floor(subtotal - discount + deliveryCharge);

  // ✅ Handle delete
  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
    toast({
      title: "Removed from cart",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <>
      <Navbar />
      <Box p="2%">
        <Heading>Your Shopping Cart</Heading>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "70%" }}>
            <TableContainer>
              {cartData.length === 0 ? "EMPTY" : ""}
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Image</Th>
                    <Th>Brand</Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                    <Th>Total</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cartData.map((item) => (
                    <Tr key={item.id}>
                      <Td>
                        <Image src={item.image} alt="" width="80px" />
                      </Td>
                      <Td>{item.brand}</Td>
                      <Td>₹ {item.price}</Td>
                      <Td>
                        <Button onClick={() => dispatch(decrementQty(item.id))}>
                          -
                        </Button>
                        {item.quantity}
                        <Button onClick={() => dispatch(incrementQty(item.id))}>
                          +
                        </Button>
                      </Td>
                      <Td>₹ {item.price * item.quantity}</Td>
                      <Td>
                        <Button onClick={() => handleDelete(item.id)}>
                          <DeleteIcon />
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          {/* ✅ Order Summary */}
          <Box w={{ base: "100%", md: "25%" }}>
            <Box border="1px solid gray" p={4} borderRadius="md">
              <Heading size="md">Order Summary</Heading>
              <Stack divider={<StackDivider />} spacing="4" mt={4}>
                <Flex justifyContent="space-between">
                  <Text>Subtotal</Text>
                  <Text>₹ {subtotal}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Discount</Text>
                  <Text>₹ {discount}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Delivery Fee</Text>
                  <Text>₹ {deliveryCharge}</Text>
                </Flex>
                <Flex justifyContent="space-between" fontWeight="bold">
                  <Text>Total</Text>
                  <Text>₹ {totalAmount}</Text>
                </Flex>
              </Stack>
              <Button
                onClick={() => navigate("/Checkout")}
                bg="#FA6F13"
                color="white"
                mt={4}
                w="100%"
              >
                Order Now
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default CartPage;
