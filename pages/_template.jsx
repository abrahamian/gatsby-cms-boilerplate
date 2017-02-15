import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm, scale } from 'utils/typography'

class PageTemplate extends React.Component {
  render () {
    const { location, children } = this.props
    return (
      <div className="page-template">
        <Container
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
          }}
        >
          {children }
        </Container>
      </div>
    )
  }
}

PageTemplate.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default PageTemplate