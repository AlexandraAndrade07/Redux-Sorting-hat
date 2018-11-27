import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import Result from './Containers/Result'

import './App.css';

const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];
//le reducer mets à jour le store

const reducer = (state, action) => {    
    switch(action.type) {
      case "UPDATE_CHOICE_WITH_MY_INDEX" :
        return  {selectedHouse : houses[Math.floor(Math.random()  *  4)], houses}
      default :
        return state
    }
}
 const  store = createStore(reducer);

class App extends Component {

  render() {
    console.log(store.getState())
    return (
      <Provider store={store} >
        <Result />
      </Provider>
    );
  }
}

export default App;
