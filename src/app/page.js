import Image from "next/image";
import styles from "./page.module.css";
import TextBlock from "./conponents/TextBlock.js";
import ImageWithText from "./conponents/ImageWithText.js";
import ItemList from "./conponents/ItemList.js";
import SimpleForm from "./conponents/SimpleForm";
import ConditionalDisplay from "./conponents/ConditionalDisplay";
import ListWithObjects from "./conponents/ListWithObjects";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

      <a>Jakub Jackiewicz</a>
      <ItemList items={["jeden","dwa"]}/> 
      <TextBlock content={"j"} heading={"jakub"}/>
      <ImageWithText text={"auto"} imageUrl={"https://beesafe.pl/porady/wp-content/uploads/2022/09/najszybsze-auto-na-swiecie.jpg"}/>
      <SimpleForm label={"input"} placeholder={"TEXT"}/>
      <ConditionalDisplay isVisible={false}/>
      <ListWithObjects items={[{name : "pierwsza" ,value :"1"}]}/>
      </main>
    </div>
  );
}

