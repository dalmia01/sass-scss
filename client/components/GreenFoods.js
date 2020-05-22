import React from 'react';
import '../assets/scss/greenfoods.scss';
import food2 from '../assets/images/greenfoods/food2.jpg';
import food3 from '../assets/images/greenfoods/food3.jpg';
import food4 from '../assets/images/greenfoods/food4.jpg';

const GreenFoods = props =>{

  let [headerActiveState, setHeaderActiveState] = React.useState(0);
  let [headerlinks,setHeaderLinks] = React.useState(false);
  let [showsidebar,setShowsidebar] = React.useState(true);
  
  React.useEffect(()=>{
    window.addEventListener('resize',()=>{
      if(window.outerWidth < 767){
        setHeaderLinks(true);
      }else{
        setHeaderLinks(false);
      }
    });
  },[])
  
  let index = 0;
  
  const nextShow = () => {
    const foodcontentitems = document.querySelectorAll('.food_content');    
    const foodimageitems = document.querySelectorAll('.food_img');  
    
    foodcontentitems[index].classList.remove('active');
    foodimageitems[index].classList.remove('active');
    index = (index + 1) % foodcontentitems.length;
    foodcontentitems[index].classList.add('active');
    foodimageitems[index].classList.add('active');
    
    
  }
  
  const prevShow = () => {
    const foodcontentitems = document.querySelectorAll('.food_content');    
    const foodimageitems = document.querySelectorAll('.food_img');  
    
    foodcontentitems[index].classList.remove('active');
    foodimageitems[index].classList.remove('active');
    index = (index - 1 + foodcontentitems.length) % foodcontentitems.length;
    foodcontentitems[index].classList.add('active');
    foodimageitems[index].classList.add('active');
  }
  
  return (
    <div className='greenfoods'>
      <header>
        <a className='logo'>Good <span>Foods</span></a>
          {!headerlinks && <ul >
            <li className={headerActiveState == 0 ? 'active' : ''} onClick={()=>setHeaderActiveState(0)}>Home</li>
            <li className={headerActiveState == 1 ? 'active' : ''} onClick={()=>setHeaderActiveState(1)}>Images</li>
            <li className={headerActiveState == 2 ? 'active' : ''} onClick={()=>setHeaderActiveState(2)}>Content</li>
            <li className={headerActiveState == 3 ? 'active' : ''} onClick={()=>setHeaderActiveState(3)}>Logo</li>
          </ul>}
          {(headerlinks && showsidebar)  && <span className='menu_logo'><ion-icon name="menu" onClick={() => setShowsidebar(false)}></ion-icon></span>}
      </header>
      
      {!showsidebar && <section className='sidebar'>
      
        <span><ion-icon name="close" onClick={() => setShowsidebar(true)}></ion-icon></span>
        <ul >
          <li className={headerActiveState == 0 ? 'active' : ''} onClick={()=>setHeaderActiveState(0)}>Home</li>
          <li className={headerActiveState == 1 ? 'active' : ''} onClick={()=>setHeaderActiveState(1)}>Images</li>
          <li className={headerActiveState == 2 ? 'active' : ''} onClick={()=>setHeaderActiveState(2)}>Content</li>
          <li className={headerActiveState == 3 ? 'active' : ''} onClick={()=>setHeaderActiveState(3)}>Logo</li>
        </ul>
      
      </section>}
      
      <section className='food_container'>
        <div className='main_food_container'>
        <div className='food_content active'>
        
          <b>Eat Healthy<br/>Stay Healthy</b>
          
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
          
          <a>Read More</a>
        
        </div>
        <div className='food_content'>
        
          <b>Eat Your<br/>Veggies</b>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
          
          <a>Read More</a>
        
        </div>
        <div className='food_content'>
        
          <b>Good Food<br/>Good Mood</b>
          
          <p>Morem i perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto </p>
          
          <a>Read More</a>
        
        </div>
        </div>
        <div className='food_imagebox'>
          <div className='food_img active'><img src={food2} /></div>
          <div className='food_img'><img src={food3} /></div>
          <div className='food_img'><img src={food4} /></div>
        </div>
        
        
        </section>
      
        <div className='icons'>
          <div className='social_icons'>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div className='arrow_icons'>
            <div className='left_arrow' onClick={prevShow}></div>
            <div className='right_arrow' onClick={nextShow}></div>
          </div>
        </div>
      
      
      
    </div>
  );
}

export default GreenFoods;