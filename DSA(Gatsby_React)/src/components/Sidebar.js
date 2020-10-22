import React from 'react'
import {Card, CardTitle, CardBody, Form, FormGroup, Input, Button} from 'reactstrap'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
 

const Sidebar = () => (
    <div>
       <Card>
        <CardBody>
            <CardTitle className = "text-center text-uppercase mb-3">
                Newsletter
            </CardTitle>
            <Form className="text-center">
            <FormGroup><Input 
            type ="email" 
            name="email" 
            placeholder= "Your email address here..."/>
            </FormGroup>
            <Button outline color="primary"  className ="btn text-uppercase">
                Subscribe
            </Button>
            </Form>
        </CardBody>
       </Card>
       <Card>
           <CardBody>
               <CardTitle className="text-center text-uppercase mb-3"></CardTitle>
               Recent Posts
           </CardBody>
           <StaticQuery query={sideBarQuery} render = {(data) => (
               <div>
                   {data.allMarkdownRemark.edges.map(({node}) => (
                    <Card key ={node.id}>
                        <Link to = {node.frontmatter.path}>
                            <Img className="card-image-top" fluid ={node.frontmatter.image.childImageSharp.fluid}/>
                        </Link>
                        <CardBody>
                            <CardTitle>
                                <Link to = {node.frontmatter.path}>
                                    {node.frontmatter.title}
                                </Link>
                            </CardTitle>
                        </CardBody>
                        
                    </Card>
                    
                   ))}
               </div>
            )}/>   
       </Card>
       
    
    </div>
)

const sideBarQuery = graphql`
 query sidebarQuery{
     allMarkdownRemark(
         sort:{ fields: [frontmatter___date], order: DESC}
         limit: 3
     ){
         edges{
             node{
                 id
                 frontmatter{
                        title
                        path
                        image{
                         childImageSharp{
                             fluid(maxWidth: 300){
                             ...GatsbyImageSharpFluid
                             }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default Sidebar