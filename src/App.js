import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "./actions/counter";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h2>当前值: {this.props.value}</h2>
        <p>
          {/* <button onClick={ this.props.increment }>加+</button>
          <button onClick={ this.props.decrement }>减-</button> */}
          <button onClick={ () => this.props.counterActions.increment(10) }>加+</button>
          <button onClick={ () => this.props.counterActions.decrement(5) }>减-</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => {
  // return {
  //   increment: () => { dispatch(increment())},
  //   decrement: () => { dispatch(decrement())}
  // }
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)