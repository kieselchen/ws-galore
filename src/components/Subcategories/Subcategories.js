import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { Link } from 'react-router'
import classes from './Subcategories.scss'

export const Subcategories = (props) => {
	let cat = props.params.category;
	let subs = props.subcategories.map(
		(item) =>
		<Link to={`/cat/${cat}/sub/${item.subcategory}`} key={`${item.sid}`}>
			<img
				className={classes.button}
				src={require(`./assets/btn-${item.subcategory}.png`)}
				alt={item.label} />
		</Link>
	);

	return (
		<section>
			<Breadcrumbs />
			<h1
				className={classes.category}
				style={{backgroundImage: `url(${require(`./assets/label-${cat}.png`)})`}} >
			</h1>
			<div className={classes.subcategories}>
	  		{subs}
	  	</div>
  	</section>
	)
}

Subcategories.propTypes = {}

export default Subcategories
