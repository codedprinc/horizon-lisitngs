import styles from "./Footer.module.css";
import { CiMap } from "react-icons/ci";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { BiHome } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <button className={styles.footerMapBtn}>
          <span>Map</span> <CiMap className={styles.ciMap} size={22} />
        </button>
        <ul className={styles.footerContent}>
          <li>
            <BiHome className={styles.footerIconHome} />
            <span className={styles.homeTxt}>Home</span>
          </li>
          <li>
            <FaRegBuilding className={styles.footerIcon} />
            <span>My Properties</span>
          </li>
          <li>
            <BsFillChatTextFill className={styles.footerIcon} />
            <span>Messages</span>
          </li>
          <li>
            <IoMdPerson className={styles.footerIcon} />
            <span className={styles.profileTxt}>Profile</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
