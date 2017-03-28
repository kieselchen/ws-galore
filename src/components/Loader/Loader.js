import React from 'react'
import classes from './Loader.scss'

class Loader extends React.Component {
	render() {
		return (
			<div className={classes.loader}>
				<div className={classes.wheel}></div>
			</div>
		)
	}
}

export default Loader