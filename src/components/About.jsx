import React from 'react';
import CountUp from 'react-countup';
import { InView, useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
            style={{ opacity: 0.3 }}> 
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=' flex-1'>
            <h2 className='h2 text-accent'>Обо мне</h2>
            <h3 className='h3 mb-3'>
              Я начинающий разработчик <br />c опытом обучения и практики в сфере IT более 18 месяцев
            </h3>
            <p className='mb-6'>
              За это время я освоил основные технологии и инструменты, используемые в веб-разработке, и успешно применял их на практике.
              В Front-end разработке у меня есть опыт работы с HTML, CSS, и JavaScript, а также с популярными библиотеками и фреймворками, такими как React.js.
              С другой стороны, в Back-end разработке я работал с языками, такими как PHP, Java (SpringBoot), и C#
              а также с базами данных MySQL и SQLite.
              Я готов к новым вызовам и постоянному обучению, открываю новые технологии и инструменты для совершенствования своих навыков.
            </p>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={18} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Месяцев<br />
                  Опыта в обучении<br />
                  и разработке
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null} +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Выполненых<br />
                  Проектов
                </div>
              </div>

            </div>

            <div className='flex gap-x-8 items-center'>
              <Link to='contact' 
              smooth={true} 
              duration={500} 
              className='btn btn-lg flex justify-center items-center'>Мои контакты</Link>
              <a href='#' className='text-gradient btn-link'> Мое портфолио</a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

