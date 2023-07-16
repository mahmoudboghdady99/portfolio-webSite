import React from 'react'
import './footer.css'
import IconGroup from '../IconGroup'

function FooterComp() {
  return (
    <div >
        
  <div className='footer_content'> 
        <div className='title '>
          <h4>Mahmoud <span>Gad</span></h4>
          <h5>front end Developer</h5>
        </div>

        
          <div className='text-center'>
            <IconGroup />
          </div>
       

          <p>&copy; 2023 - All rights reserved</p>
  </div>
  
      </div>
  )
}

export default FooterComp
