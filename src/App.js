import React from 'react';
import './App.css';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {
    Puzzle,
    FileChooser,
    ModeChooser,
    Controller,
    Steps,
} from './containers';

const store = createStore(reducers);

const App = () => (
  <Provider store = { store }>
      <article className = "App">
          <section>
              <Puzzle/>
          </section>
          <aside>
              <FileChooser/>
              <ModeChooser/>
              <p/>
              <Controller/>
              <Steps/>
          </aside>
      </article>
  </Provider>
);

export default App;
