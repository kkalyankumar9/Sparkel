import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const ProductsSideBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.getAll("gender");
  const [category, setCategory] = useState<string[]>(initialCategory || []);

  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState<string | null>(initialOrder || null);

  const initialType = searchParams.getAll("type");
  const [type, setType] = useState<string[]>(initialType || []);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }

    setCategory(newCategory);
    console.log(newCategory);
  };

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let newType = [...type];
    if (newType.includes(value)) {
      newType = newType.filter((el) => el !== value);
    } else {
      newType.push(value);
    }
    setType(newType);
    console.log(newType);
  };

  useEffect(() => {
    let params: any = {
      category,
      type,
    };
    if (order) {
      params.order = order;
    }
    setSearchParams(params);
  }, [category, type, order]);

  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setOrder(value);
  };

  return (
    <DIV>
      <h3>Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleFilter}
          checked={category.includes("male")}
        />
        <label>Male</label>
        <br />
        <br />
        <input
          type="checkbox"
          value={"female"}
          onChange={handleFilter}
          checked={category.includes("female")}
        />
        <label>Female</label>
        <br />
        <br />
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleFilter}
          checked={category.includes("kids")}
        />
        <label>Kids</label>
        <br />
        <br />
        {/* <input
        
          type="checkbox"
          value={"thai"}
          onChange={handleFilter}
          checked={category.includes("thai")}
        /> */}
        {/* <label>Thai</label> */}
        <br />
      </div>
      <br />
      <br />
      <h3>Type</h3>
      <div>
        <input
          type="checkbox"
          value={""}
          onChange={handleType}
          checked={type.includes("veg")}
        />
        <label>Veg</label>
        <br />
        <br />
        <input
          type="checkbox"
          value={"non-veg"}
          onChange={handleType}
          checked={type.includes("non-veg")}
        />
        <label>Non Veg</label>
      </div>
      <br />
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div>
        <input
          type="radio"
          name="sort"
          value={"asc"}
          onChange={handleSort}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <br />
        <input type="radio" name="sort" value={"desc"} onChange={handleSort} />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 13%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  box-shadow: 2px 2px 2px gray;
  position: static;
  z-index: 0;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
