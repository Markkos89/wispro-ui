import DashboardPage from './DashboardPage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../../redux/Users/actions'

const mapDispatchToProps = dispatch => ({
  getUsers: bindActionCreators(getUsers, dispatch)
})

const mapStateToProps = state => ({
  getAllData: state.users.getAllData,
  getAllLoading: state.users.getAllLoading,
  getAllError: state.users.getAllError
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
