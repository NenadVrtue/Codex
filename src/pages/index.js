import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Usluge from "../components/usluge"
import Cjenovnik from "../components/cjenovnik"
import ONama from "../components/oNama"
import Kontakt from "../components/kontakt"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Hero />
    <Usluge />
    <Cjenovnik />
    <ONama />
    <Kontakt />
  </Layout>
)

export default IndexPage
