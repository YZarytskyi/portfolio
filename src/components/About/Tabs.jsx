import React from 'react';
import { useState } from 'react';
import s from './About.module.scss';

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
            Tab1
          </button>
        </li>
        <li>
          <button
            href=""
            className={s.tab + ' ' + (tab === 2 && s.tabCurrent)}
            onClick={() => toggleTab(2)}>
            Tab2
          </button>
        </li>
        <li>
          <button
            href=""
            className={s.tab + ' ' + (tab === 3 && s.tabCurrent)}
            onClick={() => toggleTab(3)}>
            Tab3
          </button>
        </li>
      </ul>
      
      <div className={s.tabContentContainer}>
        <p className={s.tabContent + ' ' + (tab === 1 && s.tabContentCurrent)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ex pharetra,
          tincidunt ante vel, pulvinar enim. Nam aliquam eros quis augue fermentum feugiat. Ut non
          varius eros. Curabitur semper venenatis dui, at ornare nibh bibendum vel. Donec nulla
          velit, vehicula a ex vitae, aliquet suscipit libero. Nunc sit amet magna nisl.
        </p>
        <p className={s.tabContent + ' ' + (tab === 2 && s.tabContentCurrent)}>
          Sed efficitur libero non nibh pellentesque pharetra. Praesent consequat eu lectus nec
          dignissim. Pellentesque efficitur lobortis nulla, ut laoreet leo imperdiet at. Phasellus
          commodo purus ut libero rhoncus, quis rhoncus nulla elementum. Fusce porta tristique
          lectus, quis ornare tortor mattis in. Aenean lobortis rhoncus sodales. Etiam porta massa
          mi, nec bibendum nisl egestas et. Nullam pretium lectus ante, at pulvinar nibh varius
          quis. Praesent accumsan semper tempus.
        </p>
        <p className={s.tabContent + ' ' + (tab === 3 && s.tabContentCurrent)}>
          Duis porttitor massa nec neque consequat, et hendrerit enim fringilla. Quisque lacus ante,
          vehicula eu est in, rutrum commodo arcu. Donec ut sollicitudin mi. Suspendisse porttitor
          libero est, at lobortis augue congue eu. Nam lectus nisl, luctus eget nulla consequat,
          condimentum laoreet velit. Suspendisse interdum efficitur nisi ut viverra. Vestibulum
          vitae justo cursus, congue libero eget, faucibus quam. Morbi et vulputate eros. Morbi in
          rhoncus nunc.
        </p>
      </div>
    </div>
  );
};

export default Tabs;
