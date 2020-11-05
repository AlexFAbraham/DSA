//const { node } = require('prop-types');
const {slugify} = require('./src/util/utilityFunctions');
const path = require('path')
//const { Component } = require('react')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions 
    if(node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node, 
            name: 'slug',
            value: slugFromTitle,
        })
    }
}
exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagsPage: path.resolve('src/components/TagsSideBar.js'),
    }

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            author
                            tags
                            
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        //Create single blog post
        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    slug: node.fields.slug
                }
            })
        })
        //Get All tags
        let tags = []
        _.each(posts, edge =>{
            if(_.get(edge,'node.frontmatter.tags')){
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })

        //['design','code',...]
        //[design: 5, code: 6,...]
        let tagPostCounts = {}
        tags.forEach(tag => {
            tagPostCounts[tag] == (tagPostCounts[tag] || 0) + 1; 
        })

        console.log(tags)
        console.log(tagPostCounts)

        tags = _.uniq(tags)

        // Create tags page
        createPage({
            path:'/TagsSideBar',
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts
            }

        })
    })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }
  }