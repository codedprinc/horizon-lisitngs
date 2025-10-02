import React from "react";
import Image from "next/image";
import { LuSettings2 } from "react-icons/lu";
import { HiOutlineBell } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";

import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <header className={styles.container}>
        <div className={styles.profileBar}>
          <div className={styles.profilePT}>
            <div id="Image" className={styles.profileImg}>
              <Image
                src="/profile_1.jpg"
                width={50}
                height={50}
                alt="Profile1"
                className={styles.Img}
              />
            </div>

            <div className={styles.profileText}>
              <h5>Hello✋🏽</h5>
              <br />
              <h3>Ronald Richards</h3>
            </div>
          </div>
          <div className={styles.bell}>
            <HiOutlineBell size={20} />
          </div>
        </div>

        <div className={styles.searchBar}>
          <div className={styles.search}>
            <div>
              <RiSearch2Line className={styles.searchIcon} />
              <input
                type="text"
                placeholder="          Search Governance, Area, PACI number"
              />
            </div>
            <div className={styles.settingIcon}>
              <LuSettings2 size={20} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
