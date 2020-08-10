import { graphql } from 'gatsby'

import TagPage from '../components/tag'

export default TagPage

export const query = graphql`
  query TagPageQuery_hnishi($tag: String!) {
    allBlogPost(filter: { tags: { in: [$tag] } }) {
      edges {
        node {
          id
          excerpt
          body
          slug
          title
          tags
          keywords
          date(formatString: "MMMM DD, YYYY")
        }
      }
      totalCount
    }
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
  }
`
