import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // предотвращает перезагрузку страницы

    emailjs.sendForm('service_sqkakzq', 'template_v6ej5m2', form.current, 'mHhIrF1xlqmNZaTQs')
      .then((result) => {
          alert("Сообщение отправлено успешно!");
      }, (error) => {
          alert("Ошибка: " + error.text);
      });
    
    e.target.reset(); // сбросить форму
  };

  return (
    <motion.section 
      className='py-16 lg-section' 
      id='contact'
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      <div className='container mx-auto mt-20'>
        <div className='flex flex-col lg:flex-row mt-8'>
          <div className='flex-1'>
            <div>
              <h4 className='text-[35px] uppercase text-accent font-medium mb-4 tracking-wide'>
                Связаться со мной 
              </h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>
                Давайте работать<br/> Вместе!
              </h2>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className='flex-1 border rounded-2xl flex flex-col gap-y-4 pb-20 p-6 pr-2 items-start' style={{ position: 'relative', right: '20px' }}>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='text'
              name='user_name'
              placeholder='Ваше Имя'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='email'
              name='user_email'
              placeholder='Ваш email'
              required
            />
            <textarea 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Ваше сообщение'
              required
            ></textarea>
            <button className='btn btn-lg'>Отправить сообщение</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

