import { connect } from "react-redux";

import Welcome from "../../pages/welcome";

const mapStateToProps = state => ({
  clients: state.client.clients
});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps)(Welcome);
