import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'

library.add(fab, fas)

const linkStyles = {
    color: '#feffff',
    textDecoration: 'none'
}

/*
const linkStyles2 = {
    color: '#d4d4d4',
    textDecoration: 'none'
}
*/

/*
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
)
*/

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

export default ({ children }) => (
    <div>
    <head>
        <script src="js/modernizr.js"></script>
        
        <title>Pranav Anandarao</title>
    </head>
        <div id="content-desktop">
            <div class="home-container">
                <div class="name">
                    <Link to="/" style={linkStyles}>Pranav Anandarao</Link>
                </div>
                <div class="Menu">
                    <ul class="Menu-list" data-offset="10">
                        <Link to="/" style={linkStyles}>
                        <li class="Menu-list-item" data-offset="20">
                        Home
                        <span class="Mask"><span>Home</span></span>
                        <span class="Mask"><span>Home</span></span>
                        </li>
                        </Link>
                        <a href="#about">
                        <li class="Menu-list-item" data-offset="16">
                        About
                        <span class="Mask"><span>About</span></span>
                        <span class="Mask"><span>About</span></span>
                        </li>
                        </a>
                        <a href="#projects">
                        <li class="Menu-list-item" data-offset="12">
                        Projects
                        <span class="Mask"><span>Projects</span></span>
                        <span class="Mask"><span>Projects</span></span>
                        </li>
                        </a>
                        <a href="#contact">
                        <li class="Menu-list-item" data-offset="8">
                        Contact
                        <span class="Mask"><span>Contact</span></span>
                        <span class="Mask"><span>Contact</span></span>
                        </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="site-content">
                {children}
            </div>
        </div>
        <div id="content-mobile">
            <div class="home-container-mobile">
                <div class="Menu">
                    <ul class="Menu-list-mobile" data-offset="10">
                        <Link to="/" style={linkStyles}>
                        <li class="Menu-list-item" data-offset="20">
                        Home
                        <span class="Mask"><span>Home</span></span>
                        <span class="Mask"><span>Home</span></span>
                        </li>
                        </Link>
                        <a href="#about">
                        <li class="Menu-list-item" data-offset="16">
                        About
                        <span class="Mask"><span>About</span></span>
                        <span class="Mask"><span>About</span></span>
                        </li>
                        </a>
                        <a href="#projects">
                        <li class="Menu-list-item" data-offset="12">
                        Projects
                        <span class="Mask"><span>Projects</span></span>
                        <span class="Mask"><span>Projects</span></span>
                        </li>
                        </a>
                        <a href="#contact">
                        <li class="Menu-list-item" data-offset="8">
                        Contact
                        <span class="Mask"><span>Contact</span></span>
                        <span class="Mask"><span>Contact</span></span>
                        </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="site-content-mobile">
                {children}
            </div>
        </div>        
    </div>
)