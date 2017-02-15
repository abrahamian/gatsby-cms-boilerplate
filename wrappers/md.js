import React from 'react'
import 'less/markdown-styles.less'
import Helmet from 'react-helmet'
import { config } from 'config'
import extraConfig from 'extraConfig'
import access from 'safe-access'
import Components from 'components/';

module.exports = React.createClass({

  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },

  render () {

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
  },
});
