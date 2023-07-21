import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image
} from "@chakra-ui/react";

import { ArrowBackIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Product {
  image: string;
  id:number
}

const products: Product[] = [
  {
    image: "https://sslimages.shoppersstop.com/sys-master/root/h98/h0b/30166581313566/Main-Banner-Static-Web-1840x500--2023-06-10-new.gif",
    id:1
  },
  {
    image: "https://sslimages.shoppersstop.com/sys-master/root/hc2/hec/30385094950942/Forerver-New_Celeb-Brand-Web_120723W.jpg",
    id:2
  },
  {
    image: "https://sslimages.shoppersstop.com/sys-master/root/hf7/ha8/30385095999518/US-Polo_Celeb-Brand-Web__2023-07-120look-star-hp1.jpg",
    id:3
  },
  {
    image: "https://sslimages.shoppersstop.com/sys-master/root/hc2/hc1/30385095213086/tommy-hilfiger_Celeb-Brand-Web_2023-07-120look-star-hp.jpg",
    id:4
  },
  {
    image: "https://sslimages.shoppersstop.com/sys-master/root/h9c/h4d/30385096523806/jack-_-jones_Celeb-Brand-Web_120723W.jpg",
    id:5
  },
];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box width="100%" overflow="hidden">
      <Box width="100%">
        <Image borderRadius="30px" src={`${product.image}`} width="100%"/>
      </Box>
    </Box>
  );
};

const BannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const firstIndex = currentSlide;
  const lastIndex =
    currentSlide + 1 >= products.length ? products.length - 1 : currentSlide;

  return (
    <Box position="relative" w="full" maxW="97%" mx="auto">
      <Flex 
      w="full" overflow="hidden">
        {products.slice(firstIndex, lastIndex + 1).map((product, index) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </Flex>
      

      <Flex justify="space-between" mt="4" width="10%">
        {currentSlide === 0 ? null : (
          <IconButton
            aria-label="Previous Slide"
            icon={<ChevronLeftIcon boxSize="60px" border=" thin solid #ddd" borderColor={"transparent"} textDecoration="none" />}
            border={"none"}
            position="absolute"
            top="50%"
            left="13px"
            transform="translateY(-50%)"
            onClick={handlePrevSlide}
            width={["30px","30px","30px","30px"]}
          />
        )}
        {currentSlide === products.length - 6 ? null : (
          <IconButton
            aria-label="Next Slide"
            icon={<ChevronRightIcon boxSize="60px" border=" thin solid #ddd" borderColor={"transparent"} textDecoration="none" />}
            position="absolute"
            border={"none"}
            top="50%"
            right="13px"
            transform="translateY(-50%)"
            onClick={handleNextSlide}
            width={["25px","25px","30px","30px"]}
          />
        )}
         
      </Flex>

     
    </Box>
  );
};

export default BannerSlider;
