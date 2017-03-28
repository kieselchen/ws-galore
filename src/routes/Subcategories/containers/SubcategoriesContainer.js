import { connect } from 'react-redux'
import Subcategories from 'components/Subcategories'

function mapStateToProps(state, ownProps) {
    var category = ownProps.params.category
    var subcategories = state.subcategories.get("subcategories")
    var selected = [];

    for (var index in subcategories) {
        if(subcategories[index].category == category) {
           selected.push(subcategories[index]);
        }
    }

    return {
  		subcategories: selected
	}
};

export default connect(mapStateToProps)(Subcategories)
