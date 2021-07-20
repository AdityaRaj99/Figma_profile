import React from 'react';
import Divider from '@material-ui/core/Divider';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styles from './_Footer.module.scss';

function Footer() {
  return (
    <div className={styles['footer']}>
      <ul className={styles['ul1']}>
        <li>About</li>
        <li>Accessibility</li>
        <li>Help Center</li>
        <li>
          Privacy and Terms <KeyboardArrowDownIcon className={styles['drop']} />
        </li>
        <li>Ad Choices</li>
        <li>Advertising</li>
        <li>
          Business Services <KeyboardArrowDownIcon className={styles['drop']} />
        </li>
        <li>Get the LinkedIn App</li>
        <li>...</li>
      </ul>
      <hr style={{ width: '89%', marginTop: '14px' }}></hr>
      <ul className={styles['ul2']}>
        <li>
          <span className={styles['a1']}>Linked</span>
          <span>
            {' '}
            <LinkedInIcon className={styles['classicon']} />
          </span>
        </li>
        <span className={styles['year']}>LinkedIn © 2021</span>
      </ul>
    </div>
  );
}

export default Footer;
