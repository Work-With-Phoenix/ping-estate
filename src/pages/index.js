import * as React from 'react'
import Layout from '../components/constant/layout/layout'
import AboutSection from '../components/pages/landing/aboutSection'
import Banner from '../components/pages/landing/banner'
import ServiceSection from '../components/pages/landing/serviceSection'
import Listingsection from "../components/pages/landing/listingSection";
import Testimonialsection from "../components/pages/landing/testimonalSection";


const Index = () => {
  return(
    <Layout>
   {/* banner section */}
   <Banner />
       
      <div className={"w-full py-32"}>
         {/* about section */}
      <AboutSection />
      {/* Service Section */}
      <ServiceSection />
      {/*Listing Section*/}
      <Listingsection />
      {/*Testimonials section*/}
<Testimonialsection />
      </div>
    </Layout>
  )
}

export default Index