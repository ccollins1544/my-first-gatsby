import React from "react"
import Link from "gatsby-link"

const PostListing = ({ post }) => {
  return (
    <article>
      <h3>{post.frontmatter.title}</h3>
      <span>{post.frontmatter.date}</span>
      <p>{post.excerpt}</p>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: post.html,
        }}
      /> */}
    </article>
  )
}

export default PostListing
