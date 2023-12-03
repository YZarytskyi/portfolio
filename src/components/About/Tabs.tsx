import { useState } from "react";

import { TOOLS } from "../../constants";
import AnimateInView from "../common/AnimateOnView/AnimateInView.tsx";
import ToolItem from "./ToolItem.tsx";

import style from "./About.module.scss";

import goIt from "../../assets/goIt.png";
import sprite from "../../assets/icons.svg";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const toggleTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className={style.tabs}>
      <AnimateInView delay={0.2}>
        <ul className={style.tabsList}>
          <li>
            <button
              className={`${style.tab} ${
                currentTab === 1 ? style.tabCurrent : ""
              }`}
              onClick={() => toggleTab(1)}
            >
              Tooling
            </button>
          </li>
          <li>
            <button
              className={`${style.tab} ${
                currentTab === 2 ? style.tabCurrent : ""
              }`}
              onClick={() => toggleTab(2)}
            >
              Certification
            </button>
          </li>
        </ul>
      </AnimateInView>

      <div className={style.tabContentContainer}>
        <AnimateInView delay={0.25}>
          <div
            className={`${style.tabContent} ${
              currentTab === 1 ? style.tabContentCurrent : ""
            }`}
          >
            <ul className={style.toolsList}>
              {TOOLS.map((tool) => (
                <ToolItem key={tool.name} name={tool.name} icon={tool.icon} />
              ))}
            </ul>
          </div>
        </AnimateInView>

        <div
          className={`${style.tabContent} ${
            currentTab === 2 ? style.tabContentCurrent : ""
          }`}
        >
          <p className={style.certification}>
            <a
              href="https://goit.global/ua/courses/bootcamp/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Front-end Bootcamp
              <img
                src={goIt}
                alt="GoIt school logo"
                className={style.goItLogo}
              />
              | 2022
            </a>
            <a
              href="https://it-generation.gov.ua"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={style.itGenerationLink}
            >
              Member of the
              <svg className={style.itGenerationLogo}>
                <use href={`${sprite}#itGeneration`}></use>
              </svg>
            </a>
            Intensive 5-month-long course, with over 500 hours of coding. HTML,
            CSS, Javascript, React, Node JS, additional coursework on soft
            skills, teamwork, project management, agile methodologies, tools
            like Redux state management library, Firebase Cloud database, Jest
            testing framework. Built projects from zero to production level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
