import React from 'react';
import './App.css';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import FileChooser from './containers/FileChooser';

const store = createStore(reducer);

const App = () => (
  <Provider store = { store }>
      <article className = "App">
          <section>
              <img id="show-img" draggable="true" src={require('./default.jpg')} className="App-img" alt="showImg"/>
          </section>
          <aside>
              <FileChooser/>
              <p>
                  <button> 开始 </button>
                  <button> 自动 </button>
                  <button> 计时 </button>
                  <button> 步数 </button>
              </p>
          </aside>
      </article>
  </Provider>
);

export default App;
