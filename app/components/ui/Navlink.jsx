import React from "react";
import styles from "./link.module.css";
import { BiHome } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { PiBuildings } from "react-icons/pi";
import { PiBarn } from "react-icons/pi";
import { PiIsland } from "react-icons/pi";

const Navlink = () => {
  return (
    <nav className={styles.Nav}>
      <ul className={styles.navList}>
        <li>
          <div className={styles.navLinkList}>
            <div className={styles.navLinkBorder}>
              <BiHome className={styles.navLink} />
            </div>
            <span>Residential</span>
          </div>
        </li>
        <li>
          <div className={styles.navLinkList}>
            <FaRegBuilding className={styles.navLink}/><br />
            <span>Industrial</span>
          </div>
        </li>
        <li>
          <div className={styles.navLinkList}>
            <PiBuildings className={styles.navLink}/><br />
            <span>Commercial</span>
          </div>
        </li>
        <li>
          <div className={styles.navLinkList}>
            <PiBarn className={styles.navLink}/><br />
            <span>Agricultural</span>
          </div>
        </li>
        <li>
          <div className={styles.navLinkList}>
            <PiIsland className={styles.navLink}/><br />
            <span>  Land</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navlink;
