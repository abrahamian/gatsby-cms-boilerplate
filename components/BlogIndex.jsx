import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import extraConfig from 'dato/config'
import include from 'underscore.string/include'


class BlogIndex extends React.Component {
  render () {

    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      { return access(page, 'data.date'); }
    ).reverse()
    sortedPages.forEach((page) => {
      // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404') || access(page, 'data.date')) {
        const title = access(page, 'data.title') || access(page, 'data.name') || page.path;
        const dirname = access(page, 'file.dirname');
        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
            <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}> {title}</Link>
          </li>
        )
      }
    })
    return (
      <div className="blog-index">
        <Helmet
          title={extraConfig.siteTitle }
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
