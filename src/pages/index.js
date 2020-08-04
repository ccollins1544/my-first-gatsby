import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import PostListing from "../components/Posts/PostListing"

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.description}</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`
