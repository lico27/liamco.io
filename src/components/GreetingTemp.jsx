import React from 'react'
import { 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin 
} from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const GreetingTemp = () => {
  return (
    <div className='w-100 flex text-center py-5'>
        <h1 className='mb-4 text-capitalize text-general'>Hi, I'm Liam</h1>
        <p className='mb-1 text-general'>My portfolio is a work in progress.</p>
        <p className='mb-2 text-general'>You can contact me here:</p>
        <p>
          <a href='https://github.com/lico27' target='_blank'><FaGithub className='contact-icons m-1'/></a>
          <a href='mailto:liam@liamco.io' target='_blank'><FaEnvelope className='contact-icons m-1'/></a>
          <a href='https://www.linkedin.com/in/liam-cottrell-a1837272/' target='_blank'><FaLinkedin className='contact-icons m-1'/></a>
          <a href='https://www.threads.net/@__lico27' target='_blank'><FaThreads className='contact-icons m-1'/></a>
        </p>
        
    </div>
  )
}

export default GreetingTemp