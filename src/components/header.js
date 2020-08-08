import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import logo from "../images/logo.svg";

const HeaderWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  img {
    margin-bottom: 0;
  }
  span {
    margin-left: 1rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding: 0.5rem 0;
    margin-bottom: 0px;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #524763;
        }
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: "100px",
            }}
            src={logo}
            alt="Level Up Tutorials Logo"
          />{" "}
          {siteTitle}
        </Link>
      </h1>

      <MainNav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </MainNav>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
