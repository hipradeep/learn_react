import React, { Component } from 'react';

// Import the Store and Actions
import CounterStore from '../stores/CounterStore';
import CounterActions from '../actions/CounterActions';

class Counter extends Component {

  constructor(props) {
    super(props);

    // Get the initial state directly from the Store
    this.state = {
      count: CounterStore.getCount()
    };

    // This is necessary to make `this` work in the callback
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    // Subscribe to the Store's change events
    CounterStore.addChangeListener(this.onStoreChange);
  }

  componentWillUnmount() {
    // Unsubscribe to prevent memory leaks
    CounterStore.removeChangeListener(this.onStoreChange);
  }

  onStoreChange() {
    // When the Store emits a 'change' event, update the component's state
    this.setState({
      count: CounterStore.getCount()
    });
  }

  // Handler methods that trigger Actions
  handleIncrement() {
    CounterActions.increment();
  }

  handleDecrement() {
    CounterActions.decrement();
  }

  render() {
    return (
      <div>
        <h1>Flux Counter Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleIncrement()}>+</button>
        <button onClick={() => this.handleDecrement()}>-</button>
      </div>
    );
  }
}

export default Counter;