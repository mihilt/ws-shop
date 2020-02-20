import React from 'react';
import{ Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const ClothPage = () =>(
  <div>
  <h1> 의류 페이지 </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>   
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/cloth' component = {ClothPage} />
      </Switch>
    </div>
  );
}

export default App;
