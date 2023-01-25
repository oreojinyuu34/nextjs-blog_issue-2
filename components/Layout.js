import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Oreo&Atsushi";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/point.png"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
              width={100}
            />
          </>
        ) : (
          <>
            <img
              src="/images/point.png"
              className={`${utilStyles.borderCircle}`}
              width={100}
            />
          </>
        )}

        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームへに戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
