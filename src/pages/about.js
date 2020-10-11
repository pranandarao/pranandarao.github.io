import React from "react"
import Layout from "../components/layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { Link } from 'gatsby'

library.add(fab, fas)

export default () => (
<Layout>
    <h1>ABOUT</h1>
    <p>Hi, I'm a student at Purdue University studying computer engineering and minoring in math. I'm mostly interested in electronics, programming, and data science.</p>
    <p>Right now I'm a teaching assistant for an introductory engineering course, which allows me to not only improve my technical skills, but also my leadership and communcation skills.</p>
    <h1>Stuff I can do</h1>
    <p>I have experience in a lot of different subjects, including software development, programming, math, and circuitry.</p>
    <div class="logo-container">
        <FontAwesomeIcon icon={["fab", "python"]} />
        <div class="logo-spacer" />
        <FontAwesomeIcon icon={["fab", "java"]} />
        <div class="logo-spacer" />
        <FontAwesomeIcon icon={["fab", "js-square"]} />
        <div class="logo-spacer" />
        <FontAwesomeIcon icon={["fab", "css3-alt"]} />
        <div class="logo-spacer" />
        <FontAwesomeIcon icon={["fab", "html5"]} />
        <div class="logo-spacer" />
        <FontAwesomeIcon icon={["fab", "node-js"]} />
        <div class="logo-spacer" />
        <FontAwesomeIcon icon={["fab", "react"]} />
        <div class="logo-spacer" />
        <FontAwesomeIcon icon={["fab", "angular"]} />
    </div>
    <p>I'm also experienced with data analysis softwares such as MATLAB and R, along with a few different data visualization techniques.</p>
</Layout>
)