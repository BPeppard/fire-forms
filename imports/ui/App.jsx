import Button from '@material-ui/core/Button';

import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Hello />
    <Info />
  </div>
);

export default App;
