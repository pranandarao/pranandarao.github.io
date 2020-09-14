import React from "react"
import Layout from "../components/layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'

library.add(fab, fas)

const linkStyles = {
    color: '#17252a',
    textDecoration: 'none'
}

export default () => (
<Layout>
    <h1 id="projects">PROJECTS</h1>
    <p>Check out some of my previous projects: </p>
    <div class="carousel">
  <input type="checkbox" class="faux-ui-facia" /> 
  <div class="slide" slide="3" annot="More to come, but enjoy this picture I took of NEOWISE for now.">
    <img src="/DSC_8455.JPG"  alt="Slide 3" />
  </div>

  <input type="checkbox" class="faux-ui-facia" />
  <div class="slide" slide="2" annot="BoilerMake - Cam Mouse">
    <img src="/cam-mouse.jpg"  alt="Slide 2" />
  </div>

  <input type="checkbox" class="faux-ui-facia" />

  <div class="slide" slide="1" annot="VandyHacks - Social Savage">
    <img src="/social-savage.jpg" alt="Slide 1" />
  </div>
  </div>
  <p>See more details, and other projects: </p>
    <div class="logo-container">
        <Link to="https://github.com/pranandarao" style={linkStyles}><FontAwesomeIcon icon={["fab", "github-square"]} /></Link>
        <div class="logo-spacer" />
        <Link to="https://devpost.com/pranavanandarao?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" style={linkStyles}><img src="/devpost-seeklogo.com.svg" alt="devpost" class="svg"/></Link>
    </div>
</Layout>
)