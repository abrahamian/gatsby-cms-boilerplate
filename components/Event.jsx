import React from 'react'
import Generic from 'components/Generic'

class Event extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  }

  render () {
    const {title, body} = this.props;
    const theDate = new Date(this.props.date).toDateString();

    return (
      <div className="article">
        <h1> {title} </h1>
        <h2> {theDate} </h2>
        <Generic body={body} />
      </div>
    )
  }
}

export default Event;