import React from 'react';
import s from './Portfolio.module.scss';
import crypto1 from '../../assets/crypto1.png';
import crypto2 from '../../assets/crypto2.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className={s.portfolio}>
      <div className={s.container}>
        <div className={s.presentation}>
          <div className={s.imac}>
            <img src={crypto1} alt="Crypto project" className={s.crypto1} />
          </div>
          <div className={s.iphone}>
            <img src={crypto2} alt="Crypto project" className={s.crypto2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
