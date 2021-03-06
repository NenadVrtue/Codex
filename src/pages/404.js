import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link className='btn-prim mt-20' to='/'>Back to Home</Link>
  </Layout>
)

export default NotFoundPage
