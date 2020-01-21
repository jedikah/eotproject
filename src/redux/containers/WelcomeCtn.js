import { connect } from "react-redux";

import welcome from "../../pages/welcome";

const mapStateToProps = state => ({
  clients: state.client.clients,
  travaux: state.travau.travaux,
  factures: state.facture.factures,
  convocations: state.convocation.convocations,
  pvs: state.pv.pvs,
  lettreCharges: state.lettreCharge.lettreCharges
});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps)(welcome);
