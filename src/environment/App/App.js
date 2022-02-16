import React from 'react';
import {Counter} from 'lib';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <Counter size="small" type="primary" />
  </div>
);

export default App;
