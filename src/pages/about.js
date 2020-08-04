import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class about extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About Us" />
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias
          enim nisi fugit porro ducimus asperiores, delectus consequuntur amet,
          libero tempore odio et excepturi nemo placeat ab tempora ad
          recusandae.
        </p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
