import { connect } from 'react-redux'
import { addNewList, changeNewListValue } from '../../modules/columns/actions'
import NewListComposer from './NewListComposer'

const mapStateToProps = ({ columns }) => ({
  newListValue: columns.newListValue,
  showNewListComposer: columns.showNewListComposer,
})

export default connect(
  mapStateToProps,
  { addNewList, changeNewListValue }
)(NewListComposer)
