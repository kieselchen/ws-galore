import React from 'react'
import { Link } from 'react-router'
import classes from './Categories.scss'

export const Categories = (props) => {
	let cats = props.categories.map(
		(item) =>
		<Link to={`/cat/${item.category}`} key={`${item.cid}`}>
			<img
				className={classes.button}
				src={require(`./assets/btn-${item.category}.png`)}
				alt={item.label} />
		</Link>
	);

	return (
		<section className={classes.categories}>
	  	{cats}
  	</section>
	)
}

Categories.propTypes = {}

export default Categories
