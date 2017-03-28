import { connect } from 'react-redux'
import { requestEntries, receivedEntries, getEntries } from '../modules/entries'
import Entries from 'components/Entries'

const mapDispatchToProps = {
  requestEntries,
  receivedEntries,
  getEntries
}

function mapStateToProps(state) {
    return {
  		entries: state.entries
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Entries)
