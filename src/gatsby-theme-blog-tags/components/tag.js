import React from 'react'
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import PostList from "gatsby-theme-blog/src/components/post-list"

const Tag = ({ location, data, pageContext }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title={pageContext.tag + " - tag pages"} />
    <main>
      <h1>
        {pageContext.tag} tag (total {data.allBlogPost.totalCount} pages)
      </h1>
      <p>こんにちは</p>
      <PostList posts={data.allBlogPost.edges} />
    </main>
    <Footer socialLinks={data.site.siteMetadata.social} />
  </Layout>
)

export default Tag

