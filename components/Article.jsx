import React from 'react'
import PropTypes from 'prop-types'
import Generic from 'components/Generic'

export default class Article extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }

  render() {
    const {title, body} = this.props;

    return (
      <div className="article">
        <h1> {title} </h1>
        <Generic body={body} />
      </div>
    )
  }
}