import React from "react"
import Entry from '../Entry'
import classes from './Scope.scss'
import { Map } from 'Immutable'

export const Scope = (props) => {
  let entries = props.entries.map(
    (entry, index) => <Entry index={index} entry={entry} key={index} />
  );

  return (
    <li className={classes.scope}>
      <h2 className={classes.scopeLabel}>
        {props.label}
      </h2>
      <ul className={classes.entries}>
        {entries}
      </ul>
    </li>
  )
}

Scope.propTypes = {}

export default Scope
