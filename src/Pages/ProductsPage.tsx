import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../Redux/store'
import { getProducts } from '../Redux/Products/action'
import { ProductDatatype } from '../Redux/Products/ProductType'
import { styled } from 'styled-components'

export const ProductsPage = () => {
  const products:any=useSelector((store:RootState)=>store.ProductReducer.products)
  const dispatch=useDispatch()
  React.useEffect(()=>{
dispatch(getProducts())
  },[])
  return (
    <Div>
        {products?.map((e:ProductDatatype)=>(
          <Div1 key={e.id} className='div1'>
          
          <img src={e.image} alt="" />
          <p>{e.brand}</p>
          <p>{e.title}</p>
          <p>{e.gender}</p>
          <p>{e.size}</p>
          <p>{e.price}</p>
          <button>View Move</button>
          </Div1>
        ))}

    </Div>
  )
}
const Div=styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  width: 70%;
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
const Div1 = styled.div`
  padding: 10px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 240px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  p {
    font-size: 14px;
    margin: 8px 0;
  }

  button {
    background-color: #f5c904;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color:#007bff ;
    }
  }

  &:hover img {
    transform: translateY(-10px);
  }
`;