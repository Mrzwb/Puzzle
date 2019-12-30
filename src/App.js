import React from 'react';
import './App.css';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import FileChooser from './containers/FileChooser';
import Puzzle from './containers/Puzzle';
import ModeChooser from './containers/ModeChooser';
import Controller from './containers/Controller';

//import ModeChooser from './components/ModeChooser'

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
              <p>
                  <Controller/>
               {/*   <button onClick={e => {
                      console.info(  );
                      console.info(   Math.random())
                  }
                }> 开始 </button>
                  <button> 自动 </button>
                  <button> 计时 </button>
                  <button> 步数 </button>
                  */}

              </p>
          </aside>
      </article>
  </Provider>
);

export default App;
