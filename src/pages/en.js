import React,{useState} from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"



import HeaderEN from "../components/en/headerEN"
import SidebarEN from "../components/en/sidebarEN"
import HeroEN from "../components/en/heroEn"
import ServicesEN from "../components/en/servicesEN"
import PricingEN from "../components/en/pricingEN"
import AboutEN from "../components/en/aboutEN"
import ContactEN from "../components/contactEN"
import FooterEN from "../components/en/footerEN"

const EnPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebarEN = () => {
    setIsOpen(!isOpen);
  }
 
  return (
  <Layout>
    <SEO title="Stevo Tadić" />
    <HeaderEN toggleSidebarEN={toggleSidebarEN}></HeaderEN>
    <SidebarEN isOpen={isOpen} toggleSidebarEN={toggleSidebarEN}></SidebarEN>
    <HeroEN></HeroEN>
    <ServicesEN></ServicesEN>
    <PricingEN></PricingEN>
    <AboutEN></AboutEN>
    <ContactEN></ContactEN>
    <FooterEN></FooterEN>
  </Layout>
  )}

export default EnPage
