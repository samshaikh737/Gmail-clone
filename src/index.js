import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

              //old

// import { store } from './app/store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('gmail-clone')
// );

import {Provider} from "./MyRedux/Provider";
import { database, Reducer } from "./MyRedux/Reducer";

ReactDOM.render(
  <React.StrictMode>
    <Provider reducer={Reducer} database={database} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('gmail-clone')
);
