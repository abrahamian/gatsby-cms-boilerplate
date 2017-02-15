import React from 'react'
import Generic from 'components/Generic'

class Article extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  }

  render () {
    const {title, body} = this.props;

    return (
      <div className="article">
        <h1> {title} </h1>
        <Generic body={body} />
      </div>
    )
  }
}

export default Article;