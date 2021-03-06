import React from "react"
import Layout from "../components/layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'

library.add(fab, fas)

const linkStyles = {
    color: '#17252A',
    textDecoration: 'none'
}

export default () => (
<Layout>
    <h1 id="contact">CONTACT</h1>
    <p>Feel free to email me at <a href="mailto: panandar@purdue.edu">panandar@purdue.edu</a>. You can also check out my GitHub, connect with me on LinkedIn, or just grab a copy of my resume!</p>
    <div class="logo-container">
        <Link to="https://github.com/pranandarao" style={linkStyles}><FontAwesomeIcon icon={["fab", "github-square"]} /></Link>
        <div class="logo-spacer" />
        <Link to="https://www.linkedin.com/in/pranav-anandarao-6bb570191/" style={linkStyles}><FontAwesomeIcon icon={["fab", "linkedin"]} /></Link>
        <div class="logo-spacer" />
        <a class="resume-link" href="/Pranav_Anandarao_Resume.pdf"><FontAwesomeIcon icon={["fas", "file"]} /></a>
    </div>
</Layout>
)