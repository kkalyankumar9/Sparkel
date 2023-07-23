import React, { useEffect, useState } from "react";
import { Grid, GridItem, Image, Box, Heading } from "@chakra-ui/react";
// import Products from "../components/Products";

import { Dispatch } from "redux";
import { shallowEqual, useDispatch } from "react-redux";

import {
  deleteAdminProduct,
  getAdminProudcts,
} from "../Redux/AdminReducer/action";

import { useAppSelector } from "../Redux/store";
import LoadingSpinner from "../Pictures/Loading Spinner.gif";

import { useSearchParams } from "react-router-dom";

const AdminProduct = () => {
  const [page, setPage] = useState(1);
  const [searchParam, setSearchParam] = useSearchParams();
  const [gender, setGender] = useState<string[]>(
    searchParam.getAll("gender") || []
  );
  const [category, setCategory] = useState<string[]>(
    searchParam.getAll("category") || []
  );
  const [order, setOrder] = useState(searchParam.get("order") || "");
  const { isLoading, productArr } = useAppSelector(
    (state) => state.adminProductReducer,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  const deleteProduct = (id: number) => {
    deleteAdminProduct(id).then(() =>
      dispatch(getAdminProudcts(dispatch, page))
    );
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let tempArr = [...gender];
    if (tempArr.includes(value)) {
      setPage(1);
      tempArr = tempArr.filter((ele) => ele !== value);
    } else {
      tempArr.push(value);
    }
    setGender(tempArr);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let tempArr = [...category];
    if (tempArr.includes(value)) {
      setPage(1);
      tempArr = tempArr.filter((ele) => ele !== value);
    } else {
      tempArr.push(value);
    }
    setCategory(tempArr);
  };

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };

  const updatePage = (value: number) => {
    setPage((prevPage) => prevPage + value);
  };

  let queriesObject = {
    params: {
      gender,
      category,
      _page: page,
      _limit: 12,
      _order: order || null,
      _sort: order && "discountprice",
    },
  };

  useEffect(() => {
    let searchValue: any = { gender, category };

    order && (searchValue.order = order);
    setSearchParam(searchValue);

    dispatch(getAdminProudcts(dispatch, queriesObject));
  }, [page, gender, category, order]);

  return (
    <>
      {/* <Navbar /> */}
      {isLoading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Image src={LoadingSpinner} alt="Loading Spinner" />
        </Box>
      ) : productArr.length === 0 ? (
        <Heading as="h2" size="lg">
          No Prodcut Found
        </Heading>
      ) : (
        <Grid templateColumns={["1fr", "1fr", "1fr 4fr"]} gap="4">
          <GridItem>
            {/* <SideBarFilter
              handleGender={handleGender}
              handleSorting={handleSorting}
              handleCategory={handleCategory}
              gender={gender}
              category={category}
              order={order}
            /> */}
          </GridItem>
          <GridItem>
            {/* <Products deleteProduct={deleteProduct} /> */}
          </GridItem>
        </Grid>
      )}
      {/* <Pagination page={page} updatePage={updatePage} />
      <Footer /> */}
    </>
  );
};

export default AdminProduct;

// import React, { useEffect, useState } from "react";
// import { Dispatch } from "redux";
// import LoadingSpinner from "../Pictures/Loading Spinner.gif";
// import { useSearchParams } from "react-router-dom";
// import { useAppSelector } from "../Redux/store";
// import { shallowEqual, useDispatch } from "react-redux";
// import { Box, Grid, GridItem, Image, Heading } from "@chakra-ui/react";
// import { getProduct } from "../Redux/AdminReducer/action";
// import { deleteProduct } from "../Redux/AdminReducer/action";
// export const AdminProduct = () => {
//   const [page, setPage] = useState(1);
//   const [searchParam, setSearchParam] = useSearchParams();
//   const [gender, setGender] = useState<string[]>(
//     searchParam.getAll("gender") || []
//   );
//   const [category, setCategory] = useState<string[]>(
//     searchParam.getAll("category") || []
//   );
//   const [order, setOrder] = useState(searchParam.get("order") || "");
//   const { isLoading, product } = useAppSelector(
//     (state) => state.adminReducer,
//     shallowEqual
//   );
//   const dispatch: Dispatch<any> = useDispatch();

//   const deleteProducts = (id: number) => {
//     deleteProduct(id).then(() => dispatch(getProduct(dispatch)));
//   };

//   const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     let tempArr = [...gender];
//     if (tempArr.includes(value)) {
//       setPage(1);
//       tempArr = tempArr.filter((ele) => ele !== value);
//     } else {
//       tempArr.push(value);
//     }
//     setGender(tempArr);
//   };

//   const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     let tempArr = [...category];
//     if (tempArr.includes(value)) {
//       setPage(1);
//       tempArr = tempArr.filter((ele) => ele !== value);
//     } else {
//       tempArr.push(value);
//     }
//     setCategory(tempArr);
//   };

//   const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setOrder(e.target.value);
//   };

//   const updatePage = (value: number) => {
//     setPage((prevPage) => prevPage + value);
//   };

//   let queriesObject = {
//     params: {
//       gender,
//       category,
//       _page: page,
//       _limit: 12,
//       _order: order || null,
//       _sort: order && "discountprice",
//     },
//   };

//   useEffect(() => {
//     let searchValue: any = { gender, category };

//     order && (searchValue.order = order);
//     setSearchParam(searchValue);

//     dispatch(getProduct(dispatch));
//   }, [page, gender, category, order]);

//   return (
//     <>
//       {isLoading ? (
//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           height="100vh"
//         >
//           <Image src={LoadingSpinner} alt="Loading Spinner" />
//         </Box>
//       ) : products.length === 0 ? (
//         <Heading as="h2" size="lg">
//           No Prodcut Found
//         </Heading>
//       ) : (
//         <Grid templateColumns={["1fr", "1fr", "1fr 4fr"]} gap="4">
//           <GridItem>
//             {/* <SideBarFilter handleGender={handleGender} handleSorting={handleSorting} handleCategory={handleCategory} gender={gender} category={category} order={order} /> */}
//           </GridItem>
//           <GridItem>
//             {/* <Products deleteProduct={deleteProducts} /> */}
//           </GridItem>
//         </Grid>
//       )}
//       {/* <Pagination page={page} updatePage={updatePage} />
//         <Footer/> */}
//     </>
//   );
// };
