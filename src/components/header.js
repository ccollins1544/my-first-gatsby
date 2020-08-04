import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/logo.svg"
import Img from "gatsby-image"

const HeaderWrapper = styled.header`
  position: relative;
  background: #524763;
  height: ${({ isHome }) => (isHome ? "70vh" : "20vh")};
  margin-bottom: 1.45rem;
  overflow: hidden;
  h1 {
    display: inline-block;
    img {
      height: 80px;
      vertical-align: middle;
    }
    span {
      padding-left: 1rem;
    }
  }
`

const HeaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
`
export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props

    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === "/") {
        this.wrapper.animate([{ height: "20vh" }, { height: "70vh" }], {
          duration: 1000,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1,
        })
      } else {
        this.wrapper.animate([{ height: "70vh" }, { height: "20vh" }], {
          duration: 1000,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1,
        })
      }
    }
  }

  render() {
    const { siteTitle, background, location } = this.props
    return (
      <HeaderWrapper
        isHome={typeof location !== "undefined" && location.pathname === "/"}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <img src={logo} alt="Level Up Logo" />
              <span>{siteTitle}</span>
            </Link>
          </h1>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </HeaderContainer>
        {background && (
          <Img
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
            fluid={background.childImageSharp.fluid}
          />
        )}
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  location: {
    pathname: ``,
  },
}
