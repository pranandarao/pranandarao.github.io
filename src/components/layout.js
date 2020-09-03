import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'

library.add(fab)


/*
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
)
*/

export default ({ children }) => (
    <div>
        <div id="container">
            {children}
        </div>
        <div class="info-container">
            <Link to="https://github.com/pranandarao">
                <FontAwesomeIcon icon={["fab", "github-square"]} />
            </Link>
            <br/>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
            <br/>
            <FontAwesomeIcon icon={["fab", "devpost"]} />
        </div>
    </div>
)