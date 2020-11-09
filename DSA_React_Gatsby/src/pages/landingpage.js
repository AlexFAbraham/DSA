import React from "react"
//import { Link } from "gatsby"
//import {Row,Col} from 'reactstrap';
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Landingpageimg from '../images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg'
//import Sidebar from '../components/Sidebar'



const landingpage = () => (


  <Layout>
    <SEO title="landingPage"/>
    <tr>
      <td>
    <br/>
    <h1 style={{textAlign: "left"}}>Overview of DSA</h1>
    <br/>
    <img src = {Landingpageimg} style={{width: '60%'}} alt="pic"/>
    <br/><br/>
    <p>
    Data science and analytics (DSA) is a data-driven program <br/>
    applying different fields, including mathematics, computing and <br/>
    domain knowledge.
    </p><p>
    Graduates of the DSA concentration satisfy the growing need for <br/>
    jobs requiring skills in effective analysis of data-intensive <br/>
    problems, meaningful communications with technical and <br/>
    non-technical audiences through data visualization, <br/>
    implementing solutions using standard data analytics processes, <br/>
    and recommending data governance solutions that are secure, <br/>
    ethical and minimize risk.
    </p>
      </td>
      <td/><td/><td/>
    <td>
   
    </td>
    </tr>
     </Layout>
     
)

export default landingpage