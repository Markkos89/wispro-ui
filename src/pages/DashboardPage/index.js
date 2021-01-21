import DashboardPage from "./DashboardPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCandidates } from "../../redux/Candidates/actions";

const mapDispatchToProps = (dispatch) => ({
  getCandidates: bindActionCreators(getCandidates, dispatch),
});

const mapStateToProps = (state) => ({
  getAllData: state.candidates.getAllData,
  getAllLoading: state.candidates.getAllLoading,
  getAllError: state.candidates.getAllError,
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
