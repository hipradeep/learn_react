// Import the EventEmitter from Node.js (or a browser polyfill)
// This is what will allow components to listen for changes
import { EventEmitter } from 'events';

// Import the Dispatcher and the Action Types
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../actions/CounterActions';

// Define the initial state
const COUNT = 0;

// Extend the EventEmitter class to create our Store
class CounterStore extends EventEmitter {

  constructor() {
    super();
    // The Store's internal state
    this.count = COUNT;

    // Register a callback with the Dispatcher.
    // This function is called on every dispatched action.
    this.dispatchToken = AppDispatcher.register((actionPayload) => {

      // We switch based on the action's type
      switch (actionPayload.action.type) {

        case ActionTypes.INCREMENT:
          this.count++;
          // Emit a 'change' event. Views will listen for this.
          this.emit('change');
          break;

        case ActionTypes.DECREMENT:
          this.count--;
          this.emit('change');
          break;

        default:
          // do nothing
          break;
      }
    });
  }

  // Public getter method so components can read the state
  getCount() {
    return this.count;
  }

  // Public method allowing components to subscribe to change events
  addChangeListener(callback) {
    this.on('change', callback);
  }

  // Public method allowing components to unsubscribe
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

// Create a single instance of the store and export it
const storeInstance = new CounterStore();
export default storeInstance;