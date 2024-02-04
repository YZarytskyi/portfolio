import { useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TOOLS, WORK_EXPERIENCE } from "../../constants";
import AnimateInView from "../common/AnimateOnView/AnimateInView.tsx";
import ToolItem from "./ToolItem.tsx";
import "swiper/css/navigation";
import "swiper/css/pagination";

import style from "./About.module.scss";
import "swiper/css";

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
              Work Experience
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
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoHeight={true}
            modules={[Pagination, Navigation]}
            className={style.workExperienceSwiper}
          >
            {WORK_EXPERIENCE.map((company) => (
              <SwiperSlide className={style.companyItem} key={company.company}>
                <div className={style.leftSide}>
                  {company.href ? (
                    <a
                      href={company.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={style.link}
                    >
                      <p className={style.companyName}>{company.company}</p>
                      <img
                        src={company.logo}
                        alt={company.alt}
                        className={style.logo}
                      />
                    </a>
                  ) : (
                    <>
                      <p className={style.companyName}>{company.company}</p>
                      <img
                        src={company.logo}
                        alt={company.alt}
                        className={style.logo}
                      />
                    </>
                  )}
                  <p className={style.position}>{company.position}</p>
                  <p className={style.date}>{company.date}</p>
                </div>

                <ul className={style.responsibilities}>
                  {company.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
