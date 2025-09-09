// Import the dispatcher
import AppDispatcher from '../dispatcher/AppDispatcher';

// Define Action Types as constants
// This is crucial for avoiding typos
const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

// Action Creators
const CounterActions = {

  increment() {
    // Use the helper function we created in the dispatcher
    AppDispatcher.handleAction({
      type: ActionTypes.INCREMENT
    });
  },

  decrement() {
    AppDispatcher.handleAction({
      type: ActionTypes.DECREMENT
    });
  }

};

// Export both the actions and the types
export { ActionTypes };
export default CounterActions;