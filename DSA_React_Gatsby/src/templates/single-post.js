import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import {graphql, Link} from 'gatsby'
import SEO from '../components/seo'
import {Badge, Row, Col, CardBody, CardSubtitle, Card} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import {DiscussionEmbed} from 'disqus-react'


const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter
    const baseUrl = 'https://dsablog.com/'
    const disqusShortname = 'dsa-blog-1'
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug,
    }
    return (
        
       <Layout>
           <SEO title={post.title}
                keywords={post.tags}
                description={post.description}
                url= {baseUrl}
                //pathname={location.pathname}
                />
                <h1>{post.title}</h1>
                
            <Row>
                <Col md = "8">
                        <Card>
                            <Img className = "card-image-top" fluid={post.image.childImageSharp.fluid}/>
                            <CardBody>
                                <CardSubtitle>
                                        <span className= "text-info">{post.date}</span> by{''}
                                        <span className="text-info">{post.author}</span>
                                </CardSubtitle>
                                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
                                <ul className = "post-tags">
                                    {post.tags.map(tag => (
                                        <li key ={tag}>
                                            <Link to={`/tag/${slugify(tag)}`}>
                                                <Badge color = "primary">{tag}</Badge>
                                                </Link>
                                            </li>
                                        ))}
                                        
                                </ul>
                            </CardBody>
                        </Card>
                        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>

                </Col>
                <Col md = "4">
                    <Sidebar/>
                </Col>
            </Row>
           </Layout>
          
    )
}
export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: {slug:{eq: $slug}}){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default SinglePost
