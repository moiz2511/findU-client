import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewNavbar from "@/components/NewNavbar";
import Assistant from "@/components/homepage/Assistant";
import Dream from "@/components/homepage/Dream";
import Faqs from "@/components/homepage/Faqs";
import HomeHeader from "@/components/homepage/HomeHeader";
import SuperPower from "@/components/homepage/SuperPower";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      {/* <Navbar /> */}
      <NewNavbar/>
      <HomeHeader />
      <Assistant />
      <Dream />
      <SuperPower />

      <Faqs />
      <Footer />
    </Box>
  );
}
