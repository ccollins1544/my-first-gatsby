import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.fields.slug}>
                <Link to={`${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
);

export default Archive;