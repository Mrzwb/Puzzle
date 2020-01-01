import React from 'react';
import './App.css';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import FileChooser from './containers/FileChooser';
import Puzzle from './containers/Puzzle';
import ModeChooser from './containers/ModeChooser';
import Controller from './containers/Controller';

const store = createStore(reducers);

const App = () => (
  <Provider store = { store }>
      <article className = "App">
          <section>
              <Puzzle/>
          </section>
          <aside>
              <FileChooser/>
              <p>
                  <ModeChooser/>
              </p>
              <Controller/>
          </aside>
      </article>
  </Provider>
);

export default App;
