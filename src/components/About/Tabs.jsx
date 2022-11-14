import React from 'react';
import { useState } from 'react';
import s from './About.module.scss';
import sprite from '../../assets/icons.svg';

const Tabs = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (i) => {
    setTab(i);
  };

  return (
    <div className={s.tabs}>
      <ul className={s.tabsList}>
        <li>
          <button
            href=""
            className={s.tab + ' ' + (tab === 1 && s.tabCurrent)}
            onClick={() => toggleTab(1)}>
            Tooling
          </button>
        </li>
        <li>
          <button
            href=""
            className={s.tab + ' ' + (tab === 2 && s.tabCurrent)}
            onClick={() => toggleTab(2)}>
            Certification
          </button>
        </li>
      </ul>

      <div className={s.tabContentContainer}>
        <div className={s.tabContent + ' ' + (tab === 1 && s.tabContentCurrent)}>
          <ul className={s.toolsList}>
            <li className={s.toolsItem}>
              <svg className={s.toolsIcon}>
                <use href={`${sprite}#icon-html`}></use>
              </svg>
              HTML 5
            </li>
            <li className={s.toolsItem}>
              <svg className={s.toolsIcon}>
                <use href={`${sprite}#icon-css`}></use>
              </svg>
              CSS3
            </li>
            <li className={s.toolsItem}>
              <svg className={s.toolsIcon}>
                <use href={`${sprite}#icon-js`}></use>
              </svg>
              JavaScript
            </li>
            <li className={s.toolsItem}>
              <svg className={s.toolsIcon}>
                <use href={`${sprite}#icon-typescript`}></use>
              </svg>
              TypeScript
            </li>
            <li className={s.toolsItem}>
              <svg className={s.toolsIcon}>
                <use href={`${sprite}#icon-react`}></use>
              </svg>
              React
            </li>
            <li className={s.toolsItem}>
              <svg className={s.toolsIcon}>
                <use href={`${sprite}#icon-redux`}></use>
              </svg>
              Redux
            </li>
            <li className={s.toolsItem}>
              <svg className={s.toolsIcon}>
                <use href={`${sprite}#icon-git`}></use>
              </svg>
              Git
            </li>
            <li className={s.toolsItem}>
              <svg className={s.toolsIcon}>
                <use href={`${sprite}#icon-sass`}></use>
              </svg>
              Sass
            </li>
          </ul>
        </div>
        <div className={s.tabContent + ' ' + (tab === 2 && s.tabContentCurrent)}>
          <p className={s.certification}>
            <a
              href="https://goit.global/ua/courses/bootcamp/"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Fullstack Bootcamp, GoIt, 2022
            </a>
            Intensive 5-month-long course, with over 400 hours of coding. HTML, CSS, Javascript,
            React, Node JS, additional coursework on soft skills, teamwork, project management, agile
            methodologies and technologies, tools like Redux state management library, Firebase
            Firestore Cloud database, Jest testing framework. Built projects from zero to production
            level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
