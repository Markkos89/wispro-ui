import DashboardPage from "./DashboardPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCandidates, updateCandidate } from "../../redux/Candidates/actions";

const mapDispatchToProps = (dispatch) => ({
  getCandidates: bindActionCreators(getCandidates, dispatch),
  updateCandidate: bindActionCreators(updateCandidate, dispatch),
});

const mapStateToProps = (state) => ({
  getAllData: state.candidates.getAllData,
  getAllLoading: state.candidates.getAllLoading,
  getAllError: state.candidates.getAllError,
  updateCandidateData: state.candidates.updateCandidateData,
  updateCandidateError: state.candidates.updateCandidateError,
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
