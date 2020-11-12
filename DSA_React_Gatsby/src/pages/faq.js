import { withAuthenticationRequired } from "@auth0/auth0-react"
import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
const largediv = {
    position: 'absolute',
width: '505px',
height: '60px',
align: 'center',
margin: 'auto',
left: '10%',
padding: '10px',
borderRadius: '2.5px',


background: '#375BD2',
textColor: 'white',
}


const smalldiv = {

padding: '10px',

}

const line = {
    position: 'absolute',
width: '500px',
height: '1px',
left: '10px',
top: '120px',

background: 'white',
}
const FAQPage = () => (
  <Layout>
    <SEO title="FAQ" />
    <h1>Frequently Asked Questions</h1>
    <br/>
    <div style = {largediv}>
        <div style = {smalldiv} >
        <h5 style = {{ color: 'white'}}>ADMIN 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; DSA COMMITEE	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; STUDENT</h5>
        
        </div>
        <br/>
         Q: How do I control roles for admin?
        <div style = {line}></div>
        <br/>
        <br/>
        A: You use the Netlify CMS to assign or delete roles for users.
        </div>
        

        <div>
            

           
        </div>
 
     </Layout>
     
)

export default FAQPage
