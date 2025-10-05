import React from "react";
import styles from "@/app/components/ui/card.module.css";
import { GoPlus } from "react-icons/go";
import { GiInjustice } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { AiOutlineFullscreen } from "react-icons/ai";
import Image from "next/image";

const Card = (props) => {
  return (
    <div>
      <div id="card" className={styles.container}>
        <div id="card-img" className={styles.card}>
          <Image
            src={props.src}
            alt="hotel_image"
            width={100}
            height={100}
            className={styles.cardImg}
          />

          <div >
            <span className={styles.floatText}>{props.age} year old</span>
          </div>
          <div>
            <span className={styles.floatIconPlus}>
              <GoPlus />
            </span>
            <span className={styles.floatIconJustice}>
              <GiInjustice />
            </span>
            <span className={styles.floatIconHeart}>
              <CiHeart />
            </span>
          </div>
        </div>
        <div id="card-details" className={styles.cardDetails}>
          <div id="col-1">
            <h4 className={styles.cardDetailsH4}>
              <small>KD </small>{props.price} /month
            </h4>
            <p>
              <small  className={styles.pLocation}>
                <CiLocationOn />Block {props.block} , Al Barsha 1
              </small>
            </p>
            <p >
              <small className={styles.pLocation}>
                <IoBedOutline /> Bedroom {props.bed}
              </small>
            </p>
            <p>
              <small className={styles.pLocation}>
                <AiOutlineFullscreen /> Built-up area {props.area}sq m<sub className={styles.sub}>3</sub>
              </small>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
