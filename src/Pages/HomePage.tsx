import React from 'react'
import BannerSlider from '../Components/BannerSlider'
import Footer from "../Components/Footer"
// import Navbar from '../Components/Navbar'
import { Box, Flex, Image, SimpleGrid, Text, Heading } from "@chakra-ui/react"
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom"
import ProductSlider from '../Components/ProductSlider'

let data = [
  {
    "name": "Veirdo - Green Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
    "price": 159,
    "rating": 4,
    "gender": "Mens",
    "category": "Top",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h32/hd1/26509715931166/A21HT01211124_GREEN.jpg_230Wx334H",
    "id": 1
  },
  {
    "name": "GIYSI - Polyester Men's Trackpants ( Pack of 1 )",
    "price": 199,
    "rating": 4,
    "gender": "Mens",
    "category": "Bottom",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h2f/hf4/30162029281310/S23M-ATTRPN048_ECRU.jpg_230Wx334H",
    "id": 2
  },
  {
    "name": "White-Shirt(slim-fit cotton Shirt for Women)",
    "price": 299,
    "rating": 4.3,
    "gender": "Womens",
    "category": "Top",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h02/hd8/29684314701854/S23PEPEPL304573_WHITE.jpg_230Wx334H",
    "id": 3
  },
  {
    "name": "Mojua - Pink Cotton Boy's Shirt ( Pack of 1 )",
    "price": 119,
    "rating": 4.2,
    "gender": "Boys",
    "category": "Top",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/hce/h59/29155585490974/S23UCBBCH211IPI_PINK.jpg_230Wx334H",
    "id": 4
  },
  {
    "name": "Allen-Soly Black Pant for Women ( Pack of 1 )",
    "price": 179,
    "rating": 4.2,
    "gender": "Women",
    "category": "Bottom",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h4e/hc8/29585279713310/FLWVHCRGBQ03857_NAVY.jpg_230Wx334H",
    "id": 5
  },
  {
    "name": "Mufti- Wrinkle free shirts for men by Mufti",
    "price": 235,
    "rating": 4.3,
    "gender": "Mens",
    "category": "TopWear",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h4b/h3b/28196979081246/A22SFLCUFR24157_BLACK.jpg_2000Wx3000H",
    "id": 6
  },
  {
    "name": "vanraj Blue Slik Saree ",
    "price": 325,
    "rating": 4.3,
    "gender": "Womens",
    "category": "Dress",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h4e/ha9/28789483896862/A22INRMS00007_BLUE.jpg_230Wx334H",
    "id": 7
  },
  {
    "name": "Neo Garments - Womens Casual Wear ( Pack of 1 )",
    "price": 339,
    "rating": 4.1,
    "gender": "Mens",
    "category": "Bottom",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h60/h5f/29497258442782/SS23HCTU2310_MOUSE.jpg_230Wx334H",
    "id": 8
  },
  {
    "name": "Armani Men's Watch - DMRCM4C Premium Collection",
    "price": 2999,
    "rating": 5,
    "gender": "Mens",
    "category": "Accessories",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/he9/hdb/17447506083870/WCAD240_NoColour.jpg_230Wx334H",
    "id": 9
  },
  {
    "name": "SVARCHI - Womens Casual Wear ( Pack of 1 )",
    "price": 239,
    "rating": 4,
    "gender": "Womens",
    "category": "Top",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h44/h0a/27958988144670/S22SERALA4035BL_BLUE.jpg_230Wx334H",
    "id": 10
  },
  {
    "name": "Mens-Kurta (party-wear pack of 1)",
    "price": 219,
    "rating": 4.2,
    "gender": "Mens",
    "category": "TopWear",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/hf9/h0e/27802106200094/A22LKYLELWGEO24_YELLOW.jpg_230Wx334H",
    "id": 11
  },
  {
    "name": "Fossil- Watch For Men (Premium Collection)",
    "price": 2449,
    "rating": 4.1,
    "gender": "Mens",
    "category": "Accessories",
    "image": "https://sslimages.shoppersstop.com/sys-master/images/h38/h5b/17431797628958/WFIF-FTW4056I_NoColour.jpg_230Wx334H",
    "id": 12
  }
]
const Home = () => {
  const { section } = useParams();
  useEffect(() => {
    if (section !== undefined) {
      document.title = `ShopNow-${section}`
    }
    else {
      document.title = `ShopNow.com`
    }



  }, [section])
  return (
    <div style={{ width: "100%" }}>
      {/* <Navbar /> */}
      <div style={{ width: "100%" }}>
        <BannerSlider />
      </div>
      <Box
      fontFamily="Poppins, sans-serif"
      id="about-us"
      fontWeight="bold"
      borderRadius="40px"
      paddingTop="8%"
      paddingLeft="2%"
      backgroundSize="100%"
      height={["200px", "300px", "350px", "400px"]}
      backgroundImage="https://images.pexels.com/photos/7232493/pexels-photo-7232493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      width="95%"
      margin="auto"
      marginBottom="30px"
      padding={"20px"}
    >
      <Flex alignItems="center" justifyContent="space-between">
        {/* 1st Box - About */}
        <Box
          width={["100%", "50%"]} // Adjust the width to control text size
          padding={["20px", "40px"]} // Adjust padding as needed
          backgroundColor="transparent" // Optional background color for better readability
        >
          <Heading marginBottom="20px" fontStyle="italic" fontFamily="cursive" color="#1C96C5">About Us</Heading>
          <Text fontSize={["12px", "16px", "17px", "20px"]} width="100%" fontStyle="italic" fontFamily="cursive" color="#1C96C5" >
          Sparkle Fashion and Clothing caters to thoughtful shoppers who appreciate unique
            designs and top quality pieces you just can’t find anywhere else.
            We are constantly curating fresh new collections and looking for
            the next big thing our customers will love. Founded in Vienna in
            2019, we are proud to be your Online Clothing Shop that you can
            rely on for our expert service and care.
          </Text>
        </Box>

        {/* 2nd Box - Image */}
        <Box
          height={["200px", "300px", "350px", "400px"]}
          width={["100%", "50%"]} // Adjust the width to control image size
        >
          <img
            src="https://images.pexels.com/photos/2598630/pexels-photo-2598630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "40px" }}
          />
        </Box>
      </Flex>
    </Box>
      

      {/* Trending Style Video  */}
       <Box width="95%" margin="auto" marginTop="50px">
      <Flex>
        {/* Video Side */}
        <Box width="50%" height="350px" borderRadius="10px">
          <video autoPlay muted width="100%" height="100%" controls>
            <source src="https://cdn-useast1.kapwing.com/final_64ba3f80f79e27001f2959de_596771.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1689956399&Signature=IEwclkAg35nVkpA%2F9aT7drJ397KEnn5wqBWhZFpOglqWpS%2F5qtfJf6Yq9xcamY04PIGYWjF%2FXEgFP36%2FmqVYBC3ytWmieqfY4sW7BkbcDTxqEUCetVmRYAnsp%2F3aBYQv4DTBeCGS%2F3JxhHVmc5hvocM0hp80HVuxK3AD5PqBEj4U3GAjf8uvjz8oYHyQgn8R1SmsKG9VQ2ZG2G4QP0tnk0bBaML2YuKNkWQMjOgPoUZ0837k7x5ib4g8uE52lTwixvQ1WTfCuu%2B7hSKksI70OUNXdzcbkY9Wto3HA5K2UrJJPJE0IcniEWV4haq%2F1Y%2BKWbKf81Kvwj0GFbaUzjfFhQ%3D%3D" type="video/mp4" />
          </video>
        </Box>

        {/* Text Side */}
        <Box width="50%" height="200px" display="flex" alignItems="center" justifyContent="center" fontStyle="italic" fontFamily="cursive" fontSize="larger" color="#1C96C5" paddingTop="50px">
          <h1>'Fashion is the armor to survive <br /> the reality of everyday life'. 
          <br />
            By —Bill Cunningham
            <hr />
            </h1>
          <img src="" alt="" />
        </Box>
      </Flex>
    </Box>
    


      <Box id='new-arrivals' width="95%" marginTop="60px" fontFamily='Poppins,sans-serif' letterSpacing="wide" fontWeight="bold" marginLeft="40px" color="#1C96C5">
        <Heading >2023 New Arrivals</Heading>
        <Flex marginTop="20px" marginBottom="30px">
          <SimpleGrid margin="auto" columns={[1,2,3,4]} gap="40px">
            {data?.map((ele) => {
              return (
                <Link to="#" key={ele.id}>
                  <Box textAlign="left" >
                    <Image borderRadius="30px" width="100%" border="1px solid lightgrey" src={`${ele.image}`}></Image>
                    <Text fontSize="15px" marginTop="10px">{ele.name}</Text>
                    <Text fontWeight="bold" color="#FA6F1E" marginTop="10px">${+ele.price.toFixed(2)}</Text>
                  </Box>
                </Link>
              )
            })}
          </SimpleGrid>
        </Flex>
      </Box>
      <ProductSlider/>
      <Footer />
    </div>
  )
}

export default Home


