import React from "react"
import { Link } from 'gatsby'

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 550, padding: `0 1rem` }}>
        {children}
    </div>
)