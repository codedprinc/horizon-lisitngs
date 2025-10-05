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
          <Card src="/prop1.jpg" price={2000} block="C" beds={2} area={200} age={2}/>
          <Card src="/prop2.jpg" price={2300} block="D" beds={2} area={200} age={5}/>
          <Card src="/prop3.jpg" price={2500} block="G" beds={2} area={2100} age={1}/>
          <Card src="/prop4.jpg" price={2000} block="G" beds={1} area={500} age={2}/>
          <Card src="/prop5.jpg" price={2100} block="D" beds={2} area={800} age={4}/>
          <Card src="/prop6.jpg" price={2000} block="A" beds={4} area={200} age={2}/>
          <Card src="/prop7.jpg" price={3000} block="G" beds={2} area={2900} age={2}/>
          <Card src="/prop2.jpg" price={7000} block="H" beds={5} area={250} age={3}/>
          <Card src="/prop4.jpg" price={3000} block="E" beds={2} area={240} age={2}/>
          <Card src="/prop5.jpg" price={1500} block="Y" beds={3} area={230} age={4}/>
          
        </section>
      </div>

    </>
  );
}
