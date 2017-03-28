import React from "react"
import { Link } from 'react-router'
import classes from './Entries.scss'
import Breadcrumbs from '../Breadcrumbs'
import Scope from '../Scope'
import { Map, fromJS } from 'immutable'
import { requestEntries, receivedEntries, getEntries } from '../../routes/Entries/modules/entries.js'

class Entries extends React.Component {
  componentWillMount() {
    this.props.getEntries(
      this.props.params.category,
      this.props.params.subcategory
    );
  }

  render() {
    let scopes = fromJS(this.props.entries).map(
      function(scopeentries, scopelabel) {
          return <Scope label={scopelabel} entries={scopeentries}  key={scopelabel} />
      }

    );
    let cat = this.props.params.category;
    let sub = this.props.params.subcategory;

    return (
      <section className={classes.wrapper}>
        <Breadcrumbs cat={cat} />
        <h1
          className={classes.subcategory}
          style={{backgroundImage: `url(${require(`./assets/label-${sub}.png`)})`}} >
        </h1>
        <ul className={classes.scopes}>
          {scopes}
        </ul>
      </section>
    )
  }
}

Entries.propTypes = {}

export default Entries
