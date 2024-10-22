"use client";

import Head from 'next/head';
import styles from './Login.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <div className={styles.loginBox}>
          <div className={styles.googleLogin}>
            <img src="/google-logo.png" alt="Google logo" className={styles.googleLogo} />
            <span className={styles.loginText}>Google 로그인</span>
          </div>
          <p className={styles.description}>소개</p>
        </div>
      </main>
    </div>
  );
};

export default Home;




