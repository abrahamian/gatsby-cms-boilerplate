import React from 'react'
import PropTypes from 'prop-types'
import 'less/markdown-styles.less'
import Helmet from 'react-helmet'
import { config } from 'config'
import extraConfig from 'extraConfig'
import access from 'safe-access'
import Components from 'components/';

export default class Markdown extends React.Component {

  static propTypes = {
    router: PropTypes.object,
  }

  render() {

    const dirname = this.props.route.page.file.dirname;
    const post = this.props.route.page.data;

    let Component = Components[dirname] || Components["generic"];

    return (
      <div>
        <Helmet
          title={`${extraConfig.siteTitle} | ${post.title}`}
        />

        <Component { ...post } />

      </div>
    )
  }
}
