// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PeriodicTable from './views/PeriodicTable';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PeriodicTable />
    </Provider>
  );
}

export default App;
