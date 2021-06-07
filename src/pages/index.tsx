import { NextSeo } from "next-seo";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo title="javiblanco.dev ~" />

      <main className={styles.main}>
        <h1>~</h1>
      </main>
    </div>
  );
}
