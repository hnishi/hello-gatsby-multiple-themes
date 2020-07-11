import merge from "deepmerge"
import defaultTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"

export default merge(defaultTheme, {
  colors: {
    background: "ghostwhite",
    text: "black",
    primary: "mediumvioletred",
    modes: {
      dark: {
        background: "black",
        text: "ghostwhite",
        primary: "gold",
      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Inter, sans-serif',
    monospace: 'Menlo, monospace',
  },
})
