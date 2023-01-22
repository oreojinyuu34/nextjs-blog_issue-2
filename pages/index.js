import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import utilStyle from "../styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>プログラムの学習しています</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝ブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分け</a>
              <br />
            </Link>
            <small className={utilStyle.lightText}>2023.1.22</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分け</a>
              <br />
            </Link>
            <small className={utilStyle.lightText}>2023.1.22</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分け</a>
              <br />
            </Link>
            <small className={utilStyle.lightText}>2023.1.22</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分け</a>
              <br />
            </Link>
            <small className={utilStyle.lightText}>2023.1.22</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
