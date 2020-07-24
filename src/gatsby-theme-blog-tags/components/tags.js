import React from 'react'
import Header from "gatsby-theme-blog/src/components/header"

export default function Tags(props) {
  return (
    <div style={{ color: `teal` }}>
      <Header {...props} />
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
