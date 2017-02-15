import React from 'react'
import { rhythm, scale } from 'utils/typography'
import PropTypes from 'prop-types'

export default class PageTemplate extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    route: PropTypes.object,
  }

  render () {
    const { location, children } = this.props
    return (
      <div className="page-template">
        { children }
      </div>
    )
  }
}