import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authChanged } from 'redux/actions/authActions';
import AppComponent from '../App';

const mapStateToProps = (state) => ({
  auth: state.auth,
  list: state.costList,
  categories: state.categories,
});

export const App =
  withRouter(connect(mapStateToProps, { authChangedAction: authChanged })(AppComponent));

