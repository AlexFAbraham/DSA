import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const FormPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Make a blog post</h1>
    <form>
              <label>
          Title	&nbsp;
          <input type="text" name="title" /> <br/>
          </label> 	&nbsp;	&nbsp;
        
               <label>
          Author	&nbsp;
          <input type="text" name="author" /> <br/>
          </label>
        <br/> <br/>	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;
       <textarea rows="4" cols="50" name="comment" >
Enter text here...</textarea>
<br/> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;
  <input type="submit" value="Submit"></input> 
    </form>
     </Layout>
     
)

export default FormPage
