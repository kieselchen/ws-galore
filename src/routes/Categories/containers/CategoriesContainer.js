import { connect } from 'react-redux'
import Categories from 'components/Categories'

function mapStateToProps(state) {
	return {
  		categories: state.categories.get("categories")
	}
};

export default connect(mapStateToProps)(Categories)
