import React, { useEffect, useState } from "react";
import {
  useColorMode,
  Box,
  Spinner,
  Heading,
  Stack,
  Flex,
  Checkbox,
  Radio,
  Button,
  ButtonGroup,
  IconButton,
  Grid,
} from "@chakra-ui/react";
import { getProducts } from "../Redux/Products/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import ProductCardItems from "./ProductCardItems";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ProductsPage() {
  const { colorMode } = useColorMode();
  const dispatch = useAppDispatch();

  // Get product-related data from the Redux store
  const { isLoading, isError, products } = useAppSelector(
    (store) => store.ProductReducer
  );

  // Pagination and filtering/sorting state
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [category, setCategory] = useState<string[]>([]);
  const [gender, setGender] = useState<string[]>([]);

  // Handle sorting change
  const handleSortChange = (value: "asc" | "desc") => {
    setSortOrder(value);
  };

  // Handle category/gender filter change
  const handleFilterChange = (type: "category" | "gender", value: string[]) => {
    if (type === "category") {
      setCategory(value);
    } else if (type === "gender") {
      setGender(value);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Apply filtering and sorting to the products
  const filteredAndSortedProducts = products
    .filter((product) => {
      if (category.length === 0 && gender.length === 0) {
        return true;
      }
      return (
        (category.length === 0 || category.includes(product.category)) &&
        (gender.length === 0 || gender.includes(product.gender))
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      }
      return 0;
    });

  // Calculate the total number of pages for pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / pageSize);

  // Get the products for the current page
  const paginatedProducts = filteredAndSortedProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // Handle previous page
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Handle clearing the sort option
  const handleClearSort = () => {
    setSortOrder(null);
  };

  return (
    <Box>
      <Navbar />

      <Box>
        {isLoading ? (
          <Box p={["10%", "20%"]}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        ) : isError ? (
          <Heading as="h2">Error..</Heading>
        ) : (
          <Stack direction={["row", "row", "row"]}>
            <Box>
              <Stack spacing={4} p={"40px"}>
                <Stack align="start">
                  <Heading size={"md"}>Filter By Category:</Heading>
                  <Checkbox
                    value="top_ware"
                    isChecked={category.includes("top_ware")}
                    onChange={(e) => {
                      handleFilterChange(
                        "category",
                        e.target.checked
                          ? [...category, e.target.value]
                          : category.filter((val) => val !== e.target.value)
                      );
                    }}
                  >
                    Top ware
                  </Checkbox>
                  <Checkbox
                    value="bottom_ware"
                    isChecked={category.includes("bottom_ware")}
                    onChange={(e) => {
                      handleFilterChange(
                        "category",
                        e.target.checked
                          ? [...category, e.target.value]
                          : category.filter((val) => val !== e.target.value)
                      );
                    }}
                  >
                    Bottom ware
                  </Checkbox>
                  <Checkbox
                    value="shoes"
                    isChecked={category.includes("shoes")}
                    onChange={(e) => {
                      handleFilterChange(
                        "category",
                        e.target.checked
                          ? [...category, e.target.value]
                          : category.filter((val) => val !== e.target.value)
                      );
                    }}
                  >
                    Shoes
                  </Checkbox>
                </Stack>
                <Stack align="start">
                  <Heading size={"md"}>Filter By Gender:</Heading>
                  <Checkbox
                    value="male"
                    isChecked={gender.includes("male")}
                    onChange={(e) => {
                      handleFilterChange(
                        "gender",
                        e.target.checked
                          ? [...gender, e.target.value]
                          : gender.filter((val) => val !== e.target.value)
                      );
                    }}
                  >
                    Male
                  </Checkbox>
                  <Checkbox
                    value="women"
                    isChecked={gender.includes("women")}
                    onChange={(e) => {
                      handleFilterChange(
                        "gender",
                        e.target.checked
                          ? [...gender, e.target.value]
                          : gender.filter((val) => val !== e.target.value)
                      );
                    }}
                  >
                    Women
                  </Checkbox>
                  <Checkbox
                    value="kids"
                    isChecked={gender.includes("kids")}
                    onChange={(e) => {
                      handleFilterChange(
                        "gender",
                        e.target.checked
                          ? [...gender, e.target.value]
                          : gender.filter((val) => val !== e.target.value)
                      );
                    }}
                  >
                    Kids
                  </Checkbox>
                </Stack>
                <Stack align="start">
                  <Heading size={"md"}>Sort By Price:</Heading>
                  <Radio
                    value="asc"
                    isChecked={sortOrder === "asc"}
                    onChange={() => handleSortChange("asc")}
                  >
                    Ascending
                  </Radio>
                  <Radio
                    value="desc"
                    isChecked={sortOrder === "desc"}
                    onChange={() => handleSortChange("desc")}
                  >
                    Descending
                  </Radio>
                  <Button onClick={handleClearSort}>Clear Sort</Button>
                </Stack>
              </Stack>
            </Box>
            <Box>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {paginatedProducts.map((product: any) => (
                  <ProductCardItems key={product.id} {...product} />
                ))}
              </Grid>
            </Box>
          </Stack>
        )}
      </Box>
      <ButtonGroup justifyContent="center" marginTop="4" p={"20px"}>
        <Button
          colorScheme="teal"
          //  icon="chevron-left"
          onClick={handlePrevPage}
          disabled={page === 1}
          aria-label="Previous Page"
        >
          Previous Page
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button
          colorScheme="teal"
          //icon="chevron-right"
          onClick={handleNextPage}
          disabled={page === totalPages}
          aria-label="Next Page"
        >
          Next Page
        </Button>
      </ButtonGroup>
      <br />
      <Footer />
    </Box>
  );
}

export default ProductsPage;
