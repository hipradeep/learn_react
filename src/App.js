// PROBLEM 1: Unused Import
// 'Modal' is imported but not used. This adds unnecessary code to the bundle if tree-shaking fails.

// PROBLEM 2: Barrel File / "Dead Code"
// Importing named exports from a barrel file (components/index.js) can sometimes cause
// the bundler to load ALL exports from that file (including Modal), even if only Button is used.
import { Button, Modal } from 'components';

// OPTIMIZATION 1: Remove unused imports
// import { Button } from 'components';

// OPTIMIZATION 2: Direct Import (Best for Bundle Size)
// Import directly from the file to avoid loading the barrel file and unused modules.
// import Button from 'components/Button';

// OPTIMIZATION 3: Aliased Direct Import
// import Button from '@/components/Button';
// This is also a direct import (good for performance).
// However, it requires configuring the '@' alias in jsconfig.json (and potentially webpack overrides) to work.
// Current setup uses standard absolute imports ('components/Button') which works out-of-the-box.

function App() {
  return (
    <div className="App">
      <h1>Barrel File Demo</h1>
      <div style={{ margin: '20px' }}>
        <Button />
        {/* <Modal /> */}
      </div>
    </div>
  );
}

export default App;
