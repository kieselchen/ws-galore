import React from "react"
import { Link } from 'react-router'
import classes from './Breadcrumbs.scss'

class Breadcrumbs extends React.Component {
  render() {
    let cats = (this.props.cat) ? <span> » <Link to={`/cat/${this.props.cat}/`}>{this.props.cat}</Link></span> : '';

    return (
      <p className={classes.breadcrumbs}>
        <Link to={`/`}>Home</Link>{cats}
      </p>);
  }
}

Breadcrumbs.propTypes = {}

export default Breadcrumbs
