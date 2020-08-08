import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "./layout";

export default class postLayout extends Component {
  render() {
    const { data, location } = this.props;
    if (!data) return null;
    const { contentfulBlogPost } = data;

    return (
      <Layout location={location}>
        <span>{contentfulBlogPost.createdAt}</span>
        <h1>{contentfulBlogPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    );
  }
}

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages
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
`;
