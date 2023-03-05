import { Box } from "@mui/system";
import React from "react";
import Honeymoon from "./Honeymoon";
import Packages from "./Packages";
import RecentlyViewed from "./RecentlyViewed";
import Popular from "../../components/Popular"

const CategoriesComp = ({isCatDetail}) => {
  return( 
  <Box>
    <Box>
      <Popular isCatDetail={isCatDetail}/>
    </Box>
    <RecentlyViewed />
    <Packages/>
    <Honeymoon/>
  </Box>
  ); // test123
};

export default CategoriesComp;
