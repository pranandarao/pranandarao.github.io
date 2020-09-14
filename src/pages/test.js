import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'
//import Layout from "../components/layout"

library.add(fab, fas)

const linkStyles = {
  color: 'black',
  textDecoration: 'none'
}

export default () => (
<div class="Menu">
  <ul class="Menu-list" data-offset="10">
    <li class="Menu-list-item" data-offset="20">
      Home
      <span class="Mask"><span>Home</span></span>
      <span class="Mask"><span>Home</span></span>
    </li>
    <li class="Menu-list-item" data-offset="16">
      About
      <span class="Mask"><span>About</span></span>
      <span class="Mask"><span>About</span></span>
    </li>
    <li class="Menu-list-item" data-offset="12">
      Work
      <span class="Mask"><span>Work</span></span>
      <span class="Mask"><span>Work</span></span>
    </li>
    <li class="Menu-list-item" data-offset="8">
      Contact
      <span class="Mask"><span>Contact</span></span>
      <span class="Mask"><span>Contact</span></span>
    </li>
  </ul>
  <Link to="https://github.com/pranandarao" style={linkStyles}><FontAwesomeIcon icon={["fab", "github-square"]} /></Link>
                <br />
                <Link to="https://www.linkedin.com/in/pranav-anandarao-6bb570191/" style={linkStyles}><FontAwesomeIcon icon={["fab", "linkedin"]} /></Link>
                <br />
                <Link to="/" style={linkStyles}><FontAwesomeIcon icon={["fas", "file"]} /></Link>
</div>
)