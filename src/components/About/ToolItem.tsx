import { clsx } from "clsx";

import style from "./ToolItem.module.scss";

import sprite from "../../assets/icons.svg";

interface ToolItemProps {
  name: string;
  icon: string;
}

const ToolItem = ({ name, icon }: ToolItemProps) => (
  <li className={style.toolsItem}>
    <div className={style.toolsItemInner}>
      <svg
        className={clsx(style.toolsIcon, icon === "next" && style.toolsNextJs)}
      >
        <use href={`${sprite}#icon-${icon}`}></use>
      </svg>
      {name}
    </div>
  </li>
);

export default ToolItem;
