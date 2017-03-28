import React from 'react'
import classes from './PageContent.scss'

class PageContent extends React.Component {
	render () {
		var children = this.props.children

		return (
			<div className={classes.wrapper}>
			    {children}
			</div>
		)
	}
}

export default PageContent
