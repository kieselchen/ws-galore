import React from 'react'
import classes from './Logo.scss'

class Logo extends React.Component {
	render() {
		var largePath = require(`./assets/banner-large.png`);
		var smallPath = require(`./assets/banner-small.png`);

		return (
	  		<div className={classes.logo}>
				<img className={classes.logoLarge} src={largePath} alt="W* Galore" />
				<img className={classes.logoSmall} src={smallPath} alt="W* Galore" />
	  		</div>
		)
	}
}

export default Logo