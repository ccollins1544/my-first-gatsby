import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allContentfulBlogPost(limit: 5, sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          slug
          title
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
    render={({ allContentfulBlogPost }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allContentfulBlogPost.edges.map(({ node }) => (
              <li key={node.slug}>
                <Link to={`/posts/${node.slug}`}>{node.title}</Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
);

export default Archive;
