import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class PostPage extends Component {
  render() {
    const { data, location } = this.props
    if (!data) return null
    return (
      <Layout location={location}>
        <SEO title={data.contentfulBlogPost.title} />
        <span>{data.contentfulBlogPost.createdAt}</span>
        <h1>{data.contentfulBlogPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      createdAt(formatString: "MMMM DD YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
