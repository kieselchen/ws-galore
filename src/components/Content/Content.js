import React from "react"
import Markdown from "react-markdown"
import classes from './Content.scss'

class Content extends React.Component {
  render() {
    return <Markdown className={classes.entryContent} source={this.props.content} />
  }
}

Content.propTypes = {}

export default Content
