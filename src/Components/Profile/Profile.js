import React from 'react';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import styles from './_Profile.module.scss';

function Profile() {
  return (
    <div className={styles['Profile']}>
      <img
        className={styles['img1']}
        src={'/images/figmaBackground.jpg'}
        alt="figma"
      />
      <div className={styles['div2']}>
        <img className={styles['logo']} src={'/images/figma.jpg'} alt="figma" />
        <div className={styles['div3']}>
          <p className={styles['p1']}>Figma</p>
          <p className={styles['p2']}>
            A design platform for teams who build products together.
          </p>
          <p className={styles['p3']}>
            Design • San Francisco,CA • 101,282 followers
          </p>
          <a className={styles['see_all']} href="#">
            See all 358 emmployees on LinkedIn 🠊
          </a>
          <div className={styles['div4']}>
            <div className={styles['followbtn']}>
              <VisibilityOutlinedIcon className={styles['visibility']} />
              <a className={styles['follow']} href="#">
                Follow
              </a>
            </div>
            <div className={styles['visitbtn']}>
              <ExitToAppOutlinedIcon className={styles['go']} />
              <a className={styles['visit']} href="#">
                Visit Website
              </a>
            </div>
            <div className={styles['lastbtn']}>
              <a className={styles['and_more']} href="#">
                •••
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
