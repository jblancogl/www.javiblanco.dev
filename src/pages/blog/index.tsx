import { NextSeo } from "next-seo";
import styles from "../../styles/Home.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <NextSeo title="javiblanco.dev ~/blog" />

      <main className={styles.main}>
        <h1>~/blog</h1>
      </main>
    </div>
  );
}
