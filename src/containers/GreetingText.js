import { connect } from 'react-redux';
import Greeting from '../components/Greeting';

const mapStateToProps = (state) => (
  {
    message: state.greeting,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onClick: () => {
      dispatch({ type: 'REVERSE_GREETING' });
    },
  }
);

const GreetingText = connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

export default GreetingText;
