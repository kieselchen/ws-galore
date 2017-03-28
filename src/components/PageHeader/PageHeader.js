import React from 'react'

import classes from './PageHeader.scss'
import Logo from '../Logo'

export const PageHeader = () => (
  <header className={classes.pageHeader} >
    <div className={classes.wrapper} >
        <Logo />
    </div>
  </header>
)

export default PageHeader
