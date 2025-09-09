    // Import the Flux dispatcher library
import { Dispatcher } from 'flux';

// Create an instance of the Dispatcher
const AppDispatcher = new Dispatcher();

// Optionally, create a helper function to handle actions
AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

// Export the instance so the whole app can use it
export default AppDispatcher;