import React from 'react'
import PageHeader from '../../components/PageHeader'
import PageContent from '../../components/PageContent'
import PageFooter from '../../components/PageFooter'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className={classes.coreLayout}>
    <PageHeader />
    <PageContent children={children} />
    <PageFooter />
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
