import React, {useState, useEffect} from 'react';
import './home.css';
import {  Col, Container, Row } from 'react-bootstrap';
import homeImage from '../../images/home-image2.png';
import { Zoom } from 'react-awesome-reveal';
import IconGroup from '../IconGroup';
import { Link } from 'react-router-dom';

const titles = [
  'Front-End Developer',
  'React js',
  'Designer',
  'JavaScript Engineer',
  'Node js Engineer',
  'Front-End Engineer',
];

function Home() {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const title = titles[titleIndex];

    const interval = setInterval(() => {
      if (charIndex >= title.length) {
        clearInterval(interval);
        // تحقق من وصولنا إلى آخر عنصر في المصفوفة
        if (titleIndex === titles.length - 1) {
          // قم بتحديث اللون وحجم الخط للعنصر الأخير
          setDisplayedTitle((prevTitle) => (
            <span 
            style={{
              color: 'gold',
              fontSize: '30px',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
              fontWeight: 'bold',
         
            }}
            
            >{prevTitle}</span>
          ));
          return;
        }
        setTitleIndex(titleIndex + 1);
        return;
      }
      charIndex++;
      setDisplayedTitle(title.slice(0, charIndex));
    }, 100); // زيادة قيمة هنا لتبطئ الحركة

    return () => clearInterval(interval);
  }, [titleIndex]);



  return (
   <Row>
    <Container> 
  <Col>
       <div id='home' className='home'>
         <div className='home-content'>
           {/* contain: home-info + home image */}
           <div className='home-info'>
             <Zoom> 
             <h3 className='home-info-1'>Hello <span>i'm</span></h3>
             <h1 className='home-info-name'>Mahmoud Boghdady</h1>
             <h3 className='home-info-title'>{displayedTitle} </h3>
             <p className='home-info-desc'>
               With knowledge in web development and Design, I offer<br />
               the best projects resulting in quality work
             </p>
             <Link to='/contact' className=' btn btn-success mb-3 mt-3' >Let's Talk</Link>
    <IconGroup />
               </Zoom>
           </div>
           <div className='home-image '>
             <svg className='home__blob' viewBox='0 0 550 591' xmlns='http://www.w3.org/2000/svg'>
               <mask id='maskBlob' mask-type='alpha'>
                 <path d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z' />
               </mask>
               <g mask='url(#maskBlob)'>
                 <path d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z' />
                 <rect x='37' width='476' height='630' fill='url(#pattern0)' />
               </g>
               <rect x='37' width='476' height='300' fill='url(#pattern1)' />
               <defs>
                 <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                   <use href='#imageBlob' transform='matrix(0.00143057 0 0 0.00108108 0.0404062 0)' />
                 </pattern>
                 <pattern id='pattern1' patternContentUnits='objectBoundingBox' width='1' height='1'>
                   <use href='#imageBlob' transform='matrix(0.00143057 0 0 0.00226984 0.0404062 0)' />
                 </pattern>
                 {/* Insert your profile (recommended size: 640 x 940) */}
                 <image className='home__image ' id='imageBlob' width='640' height='925' xlinkHref={homeImage} />
               </defs>
             </svg>
           </div>
         </div>
       </div>
       <div className='margin'></div>
  </Col>
     </Container>
   </Row>
  );
}

export default Home;
