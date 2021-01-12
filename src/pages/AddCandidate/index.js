import AddCandidate from "./AddCandidate";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postCandidate } from "../../redux/Candidates/actions";

const mapDispatchToProps = (dispatch) => ({
  postCandidate: bindActionCreators(postCandidate, dispatch),
});

const mapStateToProps = (state) => ({
  postData: state.candidates.postData,
  postLoading: state.candidates.postLoading,
  postError: state.candidates.postError,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidate);
