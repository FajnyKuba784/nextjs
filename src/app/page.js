import Image from "next/image";
import styles from "./page.module.css";
import ItemList from "./conponents/ItemList.js";
import TextBlock from "./conponents/TextBlock.js";
import ImageWithText from "./conponents/ImageWithText.js";





export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

      <a>Jakub Jackiewicz</a>
      <ItemList items={["ada","dwad"]}/> 
      <TextBlock content={"sigma"} heading={"jakub"}/>
      <ImageWithText text={"auto"} imageUrl={"https://beesafe.pl/porady/wp-content/uploads/2022/09/najszybsze-auto-na-swiecie.jpg"}/>
      </main>
    </div>
  );
}

