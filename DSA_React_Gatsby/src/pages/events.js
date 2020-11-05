
import React from "react"
//import { Link } from "gatsby"
import { graphql, StaticQuery} from 'gatsby'
import Post from '../components/Post'
import {Row, Col} from 'reactstrap';
//import Sidebar from '../components/Sidebar'
import Calender from '../components/Calender'


import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
//import { Row } from "reactstrap"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" />
    <h1>Events Page</h1>
    <Row>
     <Col md="2"></Col>

      <Col md="6">
      <StaticQuery 
    query ={eventsQuery }
    render = {data => {
      return(
        <div>
          {data.allMarkdownRemark.edges.map(({node}) => (
            <Post 
              key={node.id}
            title = {node.frontmatter.title}
            author={node.frontmatter.author}
            slug = {node.fields.slug}
            tags = {node.frontmatter.tags}
            date = {node.frontmatter.date}
            body = {node.excerpt}
            fluid = {node.frontmatter.image.childImageSharp.fluid}/>
          ))}
        </div>
      )
    }}
    
    />

      </Col>
      <Col md="4">
        <div>
          <Calender/>
          </div>
      </Col>
    </Row>
    
     </Layout>
)

const eventsQuery = graphql`
query{
  allMarkdownRemark(sort:{ fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY") 
          author
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
            
          } 
          
        }
        fields{
          slug
        }
        
        excerpt
      }
      
    }
  }
}
`

export default EventsPage
