import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Listing from "../components/listing";

const SecondPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Listing />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
