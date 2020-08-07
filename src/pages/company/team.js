import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";

const TEAM_QUERY = graphql`
  query TeamMembers {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(team)/" } }
      limit: 100
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            bio
          }
        }
      }
    }
  }
`;

const Team = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>The Team</h1>
      <ul>
        <StaticQuery
          query={TEAM_QUERY}
          render={({ allMarkdownRemark }) =>
            allMarkdownRemark.edges.map(({ node }) => (
              <li>
                <div>
                  <strong>{node.frontmatter.title}</strong>
                  <span> - {node.frontmatter.bio}</span>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.html,
                  }}
                />
              </li>
            ))
          }
        />
      </ul>
    </div>
  </Layout>
);

export default Team;
