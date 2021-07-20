import React from 'react';
import styles from './_About.module.scss';

function About() {
  return (
    <div className={styles['about']}>
      <div className={styles['div2']}>
        <a className={styles['overview']} href="#">
          Overview
        </a>
        <p>|</p>
        <a className={styles['aboutt']} href="#">
          About
        </a>
        <p>|</p>
        <a className={styles['products']} href="#">
          Products
        </a>
        <p>|</p>
        <a className={styles['posts']} href="#">
          Posts
        </a>
        <p>|</p>
        <a className={styles['jobs']} href="#">
          Jobs
        </a>
        <p>|</p>
        <a className={styles['people']} href="#">
          People
        </a>
        <p>|</p>
        <a className={styles['videos']} href="#">
          Videos
        </a>
      </div>
      <div className={styles['div3']}>
        <p className={styles['_about']}>About</p>
        <p className={styles['about-figma']}>
          Figma is the first professional-grade online tool created specifically
          for interface design. Born on the Web, Figma helps the entire team
          create, test, and ship better, designs, faster.
        </p>
        <div className={styles['div4']}>
          <ul className={styles['div4_ul']}>
            <li className={styles['Weburl']}>Website URL</li>
            <li>
              <a className={styles['figma_dot_com']} href="#">
                Figma.com
              </a>
            </li>
          </ul>
          <ul className={styles['div4_ul2']}>
            <li className={styles['funding']}>Funding via Crunchbase</li>
            <li className={styles['series']}>Series D</li>
            <li className={styles['worth']}>US$ 50M</li>
          </ul>
        </div>
      </div>
      <a className={styles['see_details']} href="#">
        See all details
      </a>
    </div>
  );
}

export default About;
