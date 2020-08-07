<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  My First Gatsby
</h1>

Blog site built with gatsby using **markdown posts**.

This project was developed while taking Scott Tolinski course [Pro Gatsby2](https://www.leveluptutorials.com/tutorials/pro-gatsby-2) and was a chance for me to practice and apply the concepts learned in the course.

## 💫 Deploy

- [![Netlify Status](https://api.netlify.com/api/v1/badges/54b39c20-6276-46b3-a94a-cccdbecb1469/deploy-status)](https://app.netlify.com/sites/relaxed-mclean-93e4d6/deploys) [Contentful Netlify Deploy](https://relaxed-mclean-93e4d6.netlify.app/)

- [![Netlify Status](https://api.netlify.com/api/v1/badges/1f0c5a8f-3527-42dd-ae13-ee3a5a80358b/deploy-status)](https://app.netlify.com/sites/focused-beaver-2d90c2/deploys) [Markdown Netlify Deploy](https://focused-beaver-2d90c2.netlify.app/)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`/static`**: This directory will contain assets for images and admin config.yml use for the admin dashboard used by the netlify-cms package.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

10. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project. **NOTE** github pages doesn't load markdown images correctly so I disabled gh-pages. Also removed this from package.json
    `"deploy": "gatsby build --prefix-paths && gh-pages -d public"`

13. **`README.md`**: A text file containing useful reference information about your project.

### Credit

- [Christopher Collins](https://ccollins.io)
- [Pro Gatsby](https://www.leveluptutorials.com/tutorials/pro-gatsby) and [Pro Gatsby2](https://www.leveluptutorials.com/tutorials/pro-gatsby-2) - Scott Tolinski
