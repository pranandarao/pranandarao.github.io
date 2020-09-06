import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
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
    <head>
        <script src="js/modernizr.js"></script>
        
        <title>Pranav Anandarao</title>
    </head>
        <div id="content-desktop">
            <div class="nav-desktop">
                <Link to="https://github.com/pranandarao"><FontAwesomeIcon icon={["fab", "github-square"]} /></Link>
                <FontAwesomeIcon icon={["fa-home"]} />
            </div>
            <div class="site-content">
                {children}
            </div>
        </div>
        <div id="content-mobile">
            {children}
        </div>        
    </div>
)