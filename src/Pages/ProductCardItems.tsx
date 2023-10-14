import React, { useState,useContext } from "react";

// import { ProductDatatype } from "../Redux/Products/ProductType";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Spacer} from "@chakra-ui/react";
import axios from "axios";
import { MdGppGood } from "react-icons/md";
import { AuthContext } from "../context/Authcontext";
import { useToast } from '@chakra-ui/react'
const CardContainer = styled.div`
  padding: 10px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 240px;
  position: relative;
  overflow: hidden;
  
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
`;

const NewBadge = styled.span`
  border-radius: 9999px;
  padding: 2px;
  font-size: 0.8em;
  color: #fff;
  background: red;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 8px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 8px;
`;

const DiscountedPrice = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: #2d3748;
`;

const OriginalPrice = styled.span`
  padding-left: 8px;
  font-size: 1rem;
  text-decoration: line-through;
  color: #718096;
`;

const DiscountPercentage = styled.span`
  padding-left: 8px;
  font-size: 1rem;
  font-weight: bolder;
  color: #48bb78;
`;

const SizeInfo = styled.div`
  display: flex;
  margin-top: 8px;
`;

const SizeLabel = styled.b`
  color: #718096;
  padding-right: 8px;
`;

const SizeValue = styled.span`
  color: #718096;
`;

const Button = styled.button`
  background-color: #f5c904;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #007bff;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  gap: 3px;
  padding: 3px;
  margin-left: 30%;

  @media (max-width: 766px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;




interface ProductDatatype {
  ratings: number;
  reviews: string;
  image: string;
  brand: string;
  title: string;
  size: string;
  discountprice: number;
  price: number;
  discountPercentage: string;
  id: number;
  assured: boolean;
  gender: string;
  type?: string;
  category?: string;
  isNew?: boolean;
}


const ProductCardItems: React.FC<ProductDatatype> = ({
  ratings,
  reviews,
  image,
  brand,
  title,
  size,
  discountprice,
  price,
  discountPercentage,
  id,
  isNew,
  assured,
  gender,
}) => {
  const [isInCart, setIsInCart] = useState(false);
  const toast = useToast()
  
  const { isAuthenticated ,cart} = useContext(AuthContext);
  const handleAddToCart = () => {
    const cartItems: ProductDatatype[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const isProductInCart = cartItems.some((item) => item.id === id);
    
    if (isProductInCart) {
     // alert('Product is already in the cart. Not adding a duplicate.');
      toast({
        title: 'Product is already in the cart.',
        //description: "Continue to Login..",
        status: 'success',
        duration: 2000,
        isClosable: false,
      })
      return;
    }

    const productData: ProductDatatype = {
      ratings,
      reviews,
      image,
      brand,
      title,
      size,
      discountprice,
      price,
      discountPercentage,
      id,
      assured,
      gender,
    };

    axios
      .post('https://sparkel2.onrender.com/cart', productData)
      .then((response) => {
        console.log('Product added to cart:', response.data);
        //alert('Product added to cart');
        toast({
          title: 'Product added to cart',
          //description: "Continue to Login..",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
        setIsInCart(true);
        cartItems.push(productData);
        localStorage.setItem('cart', JSON.stringify(cart));
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  return (
    <CardContainer>
      {isNew && <NewBadge>New</NewBadge>}
      <Image src={image} alt={`Picture of ${title}`} />
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {isNew && <span>New</span>}
          {assured && (
            <div title="Assured" style={{ display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>
              <MdGppGood style={{ height: '28px', width: '28px' }} />
            </div>
          )}
        </div>
        <Title>{brand}</Title>
        <h4
          style={{
            fontSize: '1.2rem', // Use '1.2rem' instead of 'lg'
            fontWeight: 'bold', // Use 'bold' instead of 'semibold'
            color: '#718096',
            lineHeight: '1.5',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginTop: '4px',
          }}
        >
          {title}
        </h4>
        {/* <StarRating rating={ratings} numReviews={reviews} /> */}
        <PriceContainer>
          <DiscountedPrice>₹ {discountprice}</DiscountedPrice>
          <OriginalPrice>₹ {price}</OriginalPrice>
          <DiscountPercentage>{discountPercentage}</DiscountPercentage>
        </PriceContainer>
        <SizeInfo>
          <SizeLabel>Size :</SizeLabel>
          <SizeValue>{size}</SizeValue>
        </SizeInfo>
      </div>

      {/* <Link to={`/data/${id}`}>
        <Button>View Details</Button>
      </Link> */}
      <Spacer />
      {isAuthenticated && <Button onClick={handleAddToCart} disabled={isInCart}  >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </Button>

      }
      
    </CardContainer>
  );
};

export default ProductCardItems;
