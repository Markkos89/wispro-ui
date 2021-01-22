//example of how to import redux in de index.js file of './ASD.js'

//import the component
import LoginPage from './LoginPage'
//import connect from redux
import { connect } from 'react-redux'
//import bindActionCreators from redux, to create the ActionCreators and bind them to props via mapDispatchToProps
import { bindActionCreators } from 'redux'
//import actions from the store folder to be used in mapDispatchToProps
import { login, logout } from '../../redux/Admin/actions'

//example of simple mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch),
  logout: bindActionCreators(logout, dispatch)
})

//example of simple mapStateToProps
const mapStateToProps = state => ({
  loggingIn: state.authentication.loggingIn,
  user_error: state.authentication.user_error,
  loggedIn: state.authentication.loggedIn
})

//example of export default with connect to the component, giving it the mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
