import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        当前值: {this.props.value}
        <p>
          <button onClick={ this.props.onIncrement }>加+</button>
          <button onClick={ this.props.onDecrement }>减-</button>
        </p>
      </div>
    )
  }
}

export default App;