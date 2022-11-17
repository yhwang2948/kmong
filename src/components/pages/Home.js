import React from 'react';
import '../../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Category1 from '../../images/CategoryImage1.jpg';
import Category2 from '../../images/CategoryImage2.jpg';
import Category3 from '../../images/CategoryImage3.jpg';

import colseIcon from '../../images/fa-close-modal-white.png';
import About from '../pages/About';
import Projects from './Projects';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';


export default function Home() {
  return (
    <div id="/">
      <div className="dsgn-body  mode-render dbpt165">
      </div>
      
    <div className='mainContents'>
      
      <div className='category'>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div className='category'>
            <img src={Category1} />
          </div>
          <div>
            <img src={Category2} />
          </div>
          <div>
            <img src={Category3} />
          </div>
        </Carousel>
        <a className='carousel-control left' />
        <a className='carousel-control right' />
      </div>

      <About />
      

      <div className="userEL9354400 el_4 element aos-animate" data-id="9354400" data-el="el_4" data-pos="5" data-name="userEL9354400" data-msny="false" data-type="dividers" data-type2="" data-mode="" data-width="0" data-overlap="0">
        <div className="container">
          <div className="no-padding">
            <div className="divider-box" data-divider="true" data-selector=".divider-box" data-title="divider width">
              <hr className="half-rule" data-selector="hr" data-border="true" data-title="line color" />
            </div>
          </div>
        </div>
      </div>

      <Projects/>
      <Contact/>
      <Footer/>



    </div>
    </div>


  );
}