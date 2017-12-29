import { connect } from 'react-redux'
import Columns from './Columns'
import convertNormalizedDataToArray from '../utilities/convertNormalizedDataToArray'

const mapStateToProps = ({ columns }) => ({
  columns: convertNormalizedDataToArray(columns.data)
})

export default connect(mapStateToProps)(Columns)
