import React from 'react';
import { useState } from 'react';
import s from './About.module.scss';
import sprite from '../../assets/icons.svg';
import goIt from '../../assets/goIt.png';

const Tabs = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  return (
    <div className={s.tabs}>
      <ul className={s.tabsList}>
        <li>
          <button
            href=""
            className={`${s.tab} ${tab === 1 ? s.tabCurrent : ''}`}
            onClick={() => toggleTab(1)}>
            Tooling
          </button>
        </li>
        <li>
          <button
            href=""
            className={`${s.tab} ${tab === 2 ? s.tabCurrent : ''}`}
            onClick={() => toggleTab(2)}>
            Certification
          </button>
        </li>
      </ul>

      <div className={s.tabContentContainer}>
        <div className={`${s.tabContent} ${tab === 1 ? s.tabContentCurrent : ''}`}>
          <ul className={s.toolsList}>
            <li className={s.toolsItem}>
              <div className={s.toolsItemInner}>
                <svg className={s.toolsIcon}>
                  <use href={`${sprite}#icon-html`}></use>
                </svg>
                HTML 5
              </div>
            </li>
            <li className={s.toolsItem}>
              <div className={s.toolsItemInner}>
                <svg className={s.toolsIcon}>
                  <use href={`${sprite}#icon-css`}></use>
                </svg>
                CSS 3
              </div>
            </li>
            <li className={s.toolsItem}>
              <div className={s.toolsItemInner}>
                <svg className={s.toolsIcon}>
                  <use href={`${sprite}#icon-js`}></use>
                </svg>
                JavaScript
              </div>
            </li>
            <li className={s.toolsItem}>
              <div className={s.toolsItemInner}>
                <svg className={s.toolsIcon}>
                  <use href={`${sprite}#icon-typescript`}></use>
                </svg>
                TypeScript
              </div>
            </li>
            <li className={s.toolsItem}>
              <div className={s.toolsItemInner}>
                <svg className={s.toolsIcon}>
                  <use href={`${sprite}#icon-react`}></use>
                </svg>
                React
              </div>
            </li>
            <li className={s.toolsItem}>
              <div className={s.toolsItemInner}>
                <svg className={s.toolsIcon}>
                  <use href={`${sprite}#icon-redux`}></use>
                </svg>
                Redux
              </div>
            </li>
            <li className={s.toolsItem}>
              <div className={s.toolsItemInner}>
                <svg className={s.toolsIcon}>
                  <use href={`${sprite}#icon-git`}></use>
                </svg>
                Git
              </div>
            </li>
            <li className={s.toolsItem}>
              <div className={s.toolsItemInner}>
                <svg className={s.toolsIcon}>
                  <use href={`${sprite}#icon-sass`}></use>
                </svg>
                Sass
              </div>
            </li>
          </ul>
        </div>
        <div className={`${s.tabContent} ${tab === 2 ? s.tabContentCurrent : ''}`}>
          <p className={s.certification}>
            <a
              href="https://goit.global/ua/courses/bootcamp/"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Front-end Bootcamp
              <img src={goIt} alt="GoIt school logo" className={s.goItLogo} />| 2022
            </a>
            <a
              href="https://it-generation.gov.ua"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={s.itGenerationLink}>
              Member of the
              <svg className={s.itGenerationLogo}>
                <use href={`${sprite}#itGeneration`}></use>
              </svg>
            </a>
            Intensive 5-month-long course, with over 500 hours of coding. HTML, CSS, Javascript,
            React, Node JS, additional coursework on soft skills, teamwork, project management,
            agile methodologies, tools like Redux state management library, Firebase Cloud database,
            Jest testing framework. Built projects from zero to production level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
