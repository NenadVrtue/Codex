import React,{useState} from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Usluge from "../components/usluge"
import Cjenovnik from "../components/cjenovnik"
import ONama from "../components/oNama"
import Kontakt from "../components/kontakt"
import Sidebar from "../components/sidebar"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
 
  return(
  <Layout>
    <SEO title="Home" />
    <Header toggleSidebar={toggleSidebar} ></Header>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>
    <Hero />
    <Usluge />
    <Cjenovnik />
    <ONama />
    <Kontakt />
  </Layout>
)}

export default IndexPage