import React from 'react';

import { Link } from 'react-scroll';

import  Image  from '../assets/avatar.svg';

import {FaGithub,FaDribbble,} from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants';


const Banner = () => {
  return(
   <section className='min-h-[85vh] lg-min-h-[75vh] flex items-center' id='home'>
    <div className='container  mx-auto'>
      <div className=' flex flex-col gap-y-8 lg:flex-row lg:items-center
      lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)}
           initial="hidden"
          whileInView={'show'}
           viewport={{once:false, amount: 0.7}} 
           className='text-[55px] font-bold leading-[1.3] lg:text-[90px]'>
            Руслан <span>Абишев</span>
          </motion.h1>
          <motion.div
           variants={fadeIn('up', 0.4)}
           initial="hidden"
          whileInView={'show'}
           viewport={{once:false, amount: 0.7}}  
          className='mb-6 text [36px] lg:text-[60px] font-secondary
          font-semibold uppercase leading-[1] '>
            <TypeAnimation sequence={[
              'Frontend Разработчик',
              1000,
              'Web Разработчик',
              1000,
              'Full Stack Разработчик',
              1000,
            ]}
            speed={50}
            className ='text-accent'
            wrapper='span'
            repeat={Infinity}
            />           
          </motion.div> 
           <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount: 0.7}} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
           Меня зовут Руслан Абишев. Я целеустремленный и энергичный человек, 
           активно занимающийся саморазвитием и профессиональным ростом. 
           У меня есть опыт работы в различных областях, включая разработку,
            где я приобрел навыки, позволяющие эффективно решать задачи и достигать 
            поставленных целей. 
            </motion.p>  
            <motion.div 
             variants={fadeIn('up', 0.4)}
             initial="hidden"
            whileInView={'show'}
             viewport={{once:false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 
            mx-auto lg:mx-0'>
               <Link to='contact' 
              smooth={true} 
              duration={500} 
              className='btn btn-lg flex justify-center items-center'>Мои контакты</Link>
              <a href='#' className='text-gradient btn-link'>
                Мое Портфолио
              </a>
            </motion.div>  
            <motion.div 
             variants={fadeIn('up', 0.4)}
             initial="hidden"
            whileInView={'show'}
             viewport={{once:false, amount: 0.7}} 
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
             <a href='https://github.com/DeveloperRuslan' target='_blank' rel='noopener noreferrer'>
                <FaGithub/>
              </a>
            </motion.div>  
        </div>
       
        <motion.div
         variants={fadeIn('down', 0.4)}
         initial="hidden"
        whileInView={'show'}
         className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt='' />

        </motion.div>
      </div>     
    </div>
    </section>
  );
};

export default Banner;
