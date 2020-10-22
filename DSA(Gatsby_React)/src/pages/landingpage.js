import React from "react"
//import { Link } from "gatsby"
import {Row,Col} from 'reactstrap';
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Landingpageimg from '../images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg'
import Sidebar from '../components/Sidebar'


const landingpage = () => (
  <Layout>
    <SEO title="landingPage"/>
    <Row>
    <Col md="6">
      <br/>
    <h1 style={{textAlign: "left"}}>Overview of DSA</h1>
    <img src = {Landingpageimg} style={{width: '80%'}} alt="pic"/>
    <br/><br/>
    <p>
    Data science and analytics (DSA) is a data-driven program 
    applying different fields, including mathematics, computing and 
    domain knowledge.
    </p><p>
    Graduates of the DSA concentration satisfy the growing need for 
    jobs requiring skills in effective analysis of data-intensive 
    problems, meaningful communications with technical and 
    non-technical audiences through data visualization, 
    implementing solutions using standard data analytics processes, 
    and recommending data governance solutions that are secure, 
    ethical and minimize risk.
    </p><br/><br/><br/>
    </Col>
      <br/>
    
    <Col md= "2"/>

      <Col md="3">
        <br/>
        <Row>
        
      <h2>Recent Blog Posts</h2>
      </Row>
      <Sidebar/>
      </Col>
      
    
    </Row>
    
    
     </Layout>
     
)

export default landingpage
