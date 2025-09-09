# Flux Architecture Notes: Counter App

## Core Concepts
- **Pattern, not library**: A design pattern for state management.
- **Unidirectional Data Flow**: Data moves in one single, predictable direction.
- **Separation of Concerns**: Logic is split into distinct parts with clear responsibilities.

## The 4 Parts of Flux

### 1. Actions
- **What**: Plain objects describing "what happened"
- **Purpose**: Trigger state changes
- **Example**: `{ type: 'INCREMENT' }`, `{ type: 'DECREMENT' }`
- **Action Creators**: Functions that create and dispatch actions

### 2. Dispatcher
- **What**: Central hub that manages all data flow
- **Purpose**: Receives actions and dispatches them to all registered stores
- **Single Instance**: Only one dispatcher exists for the entire app
- **Synchronously** notifies stores of actions

### 3. Stores
- **What**: Contain application state and logic
- **Purpose**: Hold state, respond to actions, emit change events
- **Multiple Stores**: Can have several stores for different data domains
- **Change Events**: Emit events when state changes so views can update

### 4. Views (React Components)
- **What**: React components that display data
- **Purpose**: Render UI, trigger actions, listen for store changes
- **Two-way Relationship**: Read data from stores, write by creating actions

## Data Flow Sequence

1. **User Interaction** → User clicks "+" button in View
2. **Action Created** → View calls `CounterActions.increment()`
3. **Dispatcher** → Action is sent to the Dispatcher
4. **Store Notification** → Dispatcher notifies all registered Stores
5. **State Update** → CounterStore processes action, updates its state
6. **Change Event** → Store emits a 'change' event
7. **View Update** → Component hears event, gets new data from Store, re-renders

## Key Characteristics
- **Predictable**: Always follows the same pattern
- **Debug-friendly**: Easy to trace data changes
- **Decoupled**: Parts don't need to know about each other's implementation
- **Testable**: Each part can be tested in isolation

## When to Use Flux
- Medium to large applications
- When multiple components share state
- When you need to track state changes over time
- When prop drilling becomes unmanageable