import * as React from 'react'
import Layout from '../components/constant/layout/layout'
import AboutSection from '../components/pages/landing/aboutSection'
import Banner from '../components/pages/landing/banner'
import ServiceSection from '../components/pages/landing/serviceSection'


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
      </div>
    </Layout>
  )
}

export default Index