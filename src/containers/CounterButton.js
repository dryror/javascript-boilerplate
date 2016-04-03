import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = (state) => (
  {
    value: state.counter,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onClick: () => {
      dispatch({ type: 'INCREMENT' });
    },
  }
);

const CounterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterButton;
