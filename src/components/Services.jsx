import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'UI/UX дизайн',
    description: 'Создание визуального дизайна интерфейсов и проработка пользовательского опыта. ',
    link: 'Узнать больше'
  },

  {
    name: 'Веб-разработка',
    description: 'Создание  функциональных и адаптивных веб-сайтов с использованием современных технологий.',
    link: 'Узнать больше'
  },
  {
    name: 'Мобильная разработка',
    description: 'Создание приложений для мобильных платформ,  которые помогут вашему бизнесу достичь широкой аудитории.',
    link: 'Узнать больше'
  },

];


const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
            mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">Что я могу делать</h2>
            <h3 className='h3 max-w-[455px] mb-16'> Я начинающий разработчик <br />
              c опытом работы в сфере IT более 18 месяцев
            </h3>
            <Link to='work'
              smooth={true}
              duration={500}
              className='btn btn-small flex justify-center items-center'>Мои работы </Link>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary
                  font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#work' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                      <a href='#work' className='text-gradient text-sm'>{link}</a>
                    </div>

                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
