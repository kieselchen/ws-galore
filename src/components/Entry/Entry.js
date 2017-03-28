import React from "react"
import Content from '../Content'
import classes from './Entry.scss'


let Entry = React.createClass({
  getInitialState: function () {
    return { childVisible: false };
  },

  componentWillMount: function() {
    if(this.props.entry.get('sourcetype') === 'tfbtf') {
      this.setState({childVisible: !this.state.childVisible});
    }
  },

  switchSource() {
		let pattern = /^((http|https):\/\/)/;
    let source = this.props.entry.get('source');
    let sourcetype = this.props.entry.get('sourcetype');

    return (pattern.test(source))
    ? <a href={source} target="_blank">{sourcetype}</a>
    : <span>{source}</span>;
	},

  render: function() {
  	let entry = this.props.entry;
    let iconImagePath = require(`./assets/icon-${entry.get('sourcetype')}.png`);

  	return(
  		<li className={classes.entry}>
  			<header className={classes.entryHeader} onClick={this.onClick}>
  				<img className={classes.entryIcon} src={iconImagePath} alt={entry.get('source')} />
  				<h3 className={classes.entryHeadline}>{entry.get('headline')}</h3>
  			</header>
  			{
  				this.state.childVisible
  				? <Content content={entry.get('content')} />
  				: null
  			}
  			<footer className={classes.entryFooter}>
  				Source: {this.switchSource()}
  			</footer>
  		</li>
  	)},

  onClick: function() {
    this.setState({childVisible: !this.state.childVisible});
  }
});

export default Entry
