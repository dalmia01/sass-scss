import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import GreenFoods from './GreenFoods';
import ScrollTop from './ScrollTop';
import ContactForm from './ContactForm';
import '../assets/scss/app.scss';

const App = props =>{
  return (
    <BrowserRouter>
    
      <Switch>
        
        <Route exact path='/'><Home /></Route>
        <Route exact path='/greenfoods'><GreenFoods /></Route>
        <Route exact path='/scrolltop'><ScrollTop /></Route>
        <Route exact path='/contactform'><ContactForm /></Route>
      </Switch>
    
    
    </BrowserRouter>
  );
}

export default App;