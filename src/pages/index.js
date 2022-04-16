import * as React from 'react'
import Layout from '../components/constant/layout/layout'
import Banner from '../components/pages/landing/banner'


const Index = () => {
  return(
    <Layout>
   {/* banner section */}
   <Banner />
   <div>
     hello moving away from banner
   </div>
    </Layout>
  )
}

export default Index