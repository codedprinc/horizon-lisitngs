import Image from "next/image";
import styles from "./page.module.css";
import { TbArrowsSort } from "react-icons/tb";
import Card from "@/app/components/ui/Card";
import Navlink from "./components/ui/Navlink";


export default function Home() {
  return (
    <>
      <Navlink></Navlink>

      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h4>
              Post your property for <em>Free</em>
            </h4>
            <p>List it on Dallal and get genuine leads</p>
            <button className={styles.heroBtn}>Post your property</button>
          </div>

          <div className={styles.heroImg}>
            <Image
              src="/hand_home.png"
              width={100}
              height={100}
              alt="house_and_hand"
            />
          </div>
        </section>
      </div>

     

      <div className={styles.container}>
        <section className={styles.rentSaleSort}>
          <div className={styles.rentSale} >
            <button className={styles.rentBtn}>For Rent</button>
            <button className={styles.saleBtn}>For Sale</button>
          </div>

          <button className={styles.sortBtn}>
            <TbArrowsSort />  
            <span>Sort</span>
          </button>
        </section>
      </div>

     

      <div className={styles.container}>
        <div className={styles.featuresText}>
          <h4>Featured Listings</h4>
          <h5>See All</h5>
          
        </div>

        <section className={styles.cards}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
      </div>

    </>
  );
}
