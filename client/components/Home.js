import React from 'react';
import {Link} from 'react-router-dom';

const Home = props =>{
  return (
    <div className='home'>
      
      <div className='home_container'>
        <header>
          <Link to='/'>Switchapper</Link>
          <ul>
            <li><Link to='/greenfoods'>GreenFoods</Link></li>
            <li><Link to='/scrolltop'>Scrolltop</Link></li>
            <li><Link to='/contactform'>ContactForm</Link></li><li>Pricing</li><li>Library</li>
          </ul>
          <div>
            <span><Link to='/'>Sign In</Link></span>
            <Link to='/'>Get Started</Link>
          </div>
        </header>
        
        
        
        <div className='main_heading'>
          <ion-icon name="star-outline"></ion-icon>
          <h3>Switch To Your Other Designs Easily</h3>
          <a>This is the home template to switch to further designs.</a>
          
          <div className='btns'>
            <Link to='/'>Get Started</Link>
            <Link to='/'>Learn More</Link>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Home;