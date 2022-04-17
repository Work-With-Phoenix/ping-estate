import * as React from 'react'
import Layout from '../components/constant/layout/layout'
import AboutSection from '../components/pages/landing/aboutSection'
import Banner from '../components/pages/landing/banner'


const Index = () => {
  return(
    <Layout>
   {/* banner section */}
   <Banner />
       
      <div className={"w-full py-32"}>
         {/* about section */}
      <AboutSection />
      </div>
    </Layout>
  )
}

export default Index