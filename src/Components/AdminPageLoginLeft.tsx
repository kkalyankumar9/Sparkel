import { GridItem, Image } from "@chakra-ui/react";
import Images from "../Pictures/Images.jpeg";

const AdminPageLoginLeft = () => {
  return (
    <GridItem>
      <Image style={{ background: "white" }} src={Images} alt="Admin Image" />
    </GridItem>
  );
};

export default AdminPageLoginLeft;
