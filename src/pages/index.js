
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Assistant from '@/components/homepage/Assistant'
import Faqs from '@/components/homepage/Faqs'
import HomeHeader from '@/components/homepage/HomeHeader'
import SuperPower from '@/components/homepage/SuperPower'
import { Box } from '@chakra-ui/react'


export default function Home() {
  return (
    <Box>
     <Navbar/>
     <HomeHeader/>
     <Assistant/>
     <SuperPower/>
     <Faqs/>
     <Footer/>
    </Box>
  )
}
