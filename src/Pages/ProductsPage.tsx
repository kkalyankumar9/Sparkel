import React, { useEffect, useState } from "react";

import { getProducts } from "../Redux/Products/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import ProductCardItems from "./ProductCardItems";
import { styled } from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ProductsPage() {
  const dispatch = useAppDispatch();

  // Get product-related data from the Redux store
  const { isLoading, isError, products } = useAppSelector(
    (store) => store.ProductReducer
  );

  // Pagination and filtering/sorting state
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8); // Adjust this value as needed
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
        return true; // No filters applied, so include all products
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
    <div>
      <Navbar/>
    
    <div>
      {isLoading ? (
        <h2>Loading..</h2>
      ) : isError ? (
        <h2>Error..</h2>
      ) : (
        <>
        <Div4>
          <Div2>
          <div style={{textAlign:"left"}}>
            <label>
             <h4> Sort By Price:</h4>
            </label>
            <div>
              <input
                type="radio"
                value="asc"
                checked={sortOrder === "asc"}
                onChange={() => handleSortChange("asc")}
              />
              <span>Ascending</span>
            </div>
            <div>
              <input
                type="radio"
                value="desc"
                checked={sortOrder === "desc"}
                onChange={() => handleSortChange("desc")}
              />
              <span>Descending</span>
            </div>
            <button onClick={handleClearSort}>Clear Sort</button>
          </div>
          <div style={{textAlign:"left"}}>
            <label>
             <h4> Filter By Category:</h4>
              <div>
                <input
                  type="checkbox"
                  value="top_ware"
                  checked={category.includes("top_ware")}
                  onChange={(e) => {
                    handleFilterChange(
                      "category",
                      e.target.checked
                        ? [...category, e.target.value]
                        : category.filter((val) => val !== e.target.value)
                    );
                  }}
                />
                <span>Top ware</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="bottom_ware"
                  checked={category.includes("bottom_ware")}
                  onChange={(e) => {
                    handleFilterChange(
                      "category",
                      e.target.checked
                        ? [...category, e.target.value]
                        : category.filter((val) => val !== e.target.value)
                    );
                  }}
                />
                <span>Bottom ware</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="shoes"
                  checked={category.includes("shoes")}
                  onChange={(e) => {
                    handleFilterChange(
                      "category",
                      e.target.checked
                        ? [...category, e.target.value]
                        : category.filter((val) => val !== e.target.value)
                    );
                  }}
                />
                <span>Shoes</span>
              </div>
            </label>
          </div>
          <div style={{textAlign:"left"}}>
            <label>
             <h4> Filter By Gender:</h4>
              <div >
                <input
                  type="checkbox"
                  value="male"
                  checked={gender.includes("male")}
                  onChange={(e) => {
                    handleFilterChange(
                      "gender",
                      e.target.checked
                        ? [...gender, e.target.value]
                        : gender.filter((val) => val !== e.target.value)
                    );
                  }}
                />
                <span>Male</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="women"
                  checked={gender.includes("women")}
                  onChange={(e) => {
                    handleFilterChange(
                      "gender",
                      e.target.checked
                        ? [...gender, e.target.value]
                        : gender.filter((val) => val !== e.target.value)
                    );
                  }}
                />
                <span>Women</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="kids"
                  checked={gender.includes("kids")}
                  onChange={(e) => {
                    handleFilterChange(
                      "gender",
                      e.target.checked
                        ? [...gender, e.target.value]
                        : gender.filter((val) => val !== e.target.value)
                    );
                  }}
                />
                <span>Kids</span>
              </div>
            </label>
          </div>
          </Div2>
          <div>
          <ProductList>
            {paginatedProducts.map((product: any) => (
              <ProductCardItems key={product.id} {...product} />
            ))}
          </ProductList>
          </div>
          {/* Pagination buttons */}
          </Div4>
        
          <PaginationContainer  >
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              style={{ marginRight: "10px" }}
            >
              Previous Page
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              style={{ marginLeft: "10px" }}
            >
              Next Page
            </button>
          </PaginationContainer>
     
        
        </>
      )}
    </div>
    <br />
    <Footer/>
    </div>
  );
}

export default ProductsPage;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
  color: #666;
  text-align: center;
  justify-content: center;

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
const Div4 = styled.div`
display: flex;
justify-content: space-between;
padding: 2%;
Div4>div>div{
  align-items: center;
  
}

`;

const Div2 = styled.div`
width: 25%;
padding: 10px;
`;

// const ProductList = styled.div`
// width: 80%;
// display: flex;
// flex-wrap: wrap;
// justify-content: space-between;
// `;






const ProductList=styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  width: 60%;
  gap: 3px;
  padding: 3px;
 
  @media (max-width: 766px) {
    grid-template-columns: repeat(1,1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(3,1fr);
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* Styles for laptop devices */
    grid-template-columns: repeat(4,1fr);
  }


`
// const Div1 = styled.div`
//   padding: 10px;
//   margin: 10px auto;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   background-color: #fff;
//   width: 240px;
//   position: relative;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 8px;
//     transition: transform 0.3s ease;
//   }

//   p {
//     font-size: 14px;
//     margin: 8px 0;
//   }

//   button {
//     background-color: #f5c904;
//     color: #fff;
//     border: none;
//     padding: 8px 16px;
//     border-radius: 4px;
//     cursor: pointer;
//     transition: background-color 0.2s ease;

//     &:hover {
//       background-color:#007bff ;
//     }
//   }

//   &:hover img {
//     transform: translateY(-10px);
//   }
// `;