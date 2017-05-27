import React from 'react'
import PropTypes from 'prop-types'
import Generic from 'components/Generic'

class Event extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }

  render() {
    const {title, body, imageUrl} = this.props;
    const theDate = new Date(this.props.date).toDateString();

    return (
      <div className="article">
        <h1> {title} </h1>
        { imageUrl ? <img src={imageUrl}/> : null }
        <h2> {theDate} </h2>
        <Generic body={body} />
      </div>
    )
  }
}

export default Event;