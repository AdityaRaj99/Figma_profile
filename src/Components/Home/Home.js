import React from 'react';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import styles from './_Home.module.scss';
import SidePanel from '../SidePanel/SidePanel';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className={styles['main_div']}>
      <Navbar />
      <div className={styles['upper_div']}>
        <div className={styles['div2']}>
          <Profile />
          <About />
        </div>
        <div className={styles['div3']}>
          <SidePanel />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
