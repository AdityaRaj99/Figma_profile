import React from 'react';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import styles from './_SidePanel.module.scss';
function SidePanel() {
  return (
    <div className={styles['sidepanel']}>
      <div className={styles['ul1']}>
        <h4>Pages people also viewed</h4>
        <img
          className={styles['company_img']}
          src="images/invision.png"
          alt=""
        />
        <p className={styles['p']}>
          <div>
            <p className={styles['company']} href="#">
              Invision
            </p>

            <p className={styles['p2']}>Internet . 137K followers</p>
          </div>
          <VisibilityOutlinedIcon className={styles['icon']} />
        </p>
        <img className={styles['company_img']} src="images/sketch.png" alt="" />
        <p className={styles['p']}>
          <div>
            <a className={styles['company']} href="#">
              Sketch
            </a>

            <p className={styles['p2']}>Design . 33K followers</p>
          </div>
          <VisibilityOutlinedIcon className={styles['icon']} />
        </p>
        <img
          className={styles['company_img']}
          src="images/dribbble.png"
          alt=""
        />
        <p className={styles['p']}>
          <div>
            <a className={styles['company']} href="#">
              Dribble
            </a>

            <p className={styles['p2']}>Design . 162K followers</p>
          </div>
          <VisibilityOutlinedIcon className={styles['icon']} />
        </p>
        <img
          className={styles['company_img']}
          src="images/behance.png"
          alt=""
        />
        <p className={styles['p']}>
          <div>
            <a className={styles['company']} href="#">
              Behance
            </a>

            <p className={styles['p2']}>Internet . 67K followers</p>
          </div>
          <VisibilityOutlinedIcon className={styles['icon']} />
        </p>
        <img
          className={styles['company_img']}
          src="images/overlapStudio.png"
          alt=""
        />
        <p className={styles['p']}>
          <div>
            {' '}
            <a className={styles['company']} href="#">
              Overlap Studio
            </a>
            <p className={styles['p2']}>
              Information Technology & Services . 105 followers
            </p>
          </div>
          <VisibilityOutlinedIcon className={styles['icon']} />
        </p>
        <img className={styles['company_img']} src="images/Medium.png" alt="" />
        <p className={styles['p']}>
          <div>
            <a className={styles['company']} href="#">
              Medium
            </a>{' '}
            <p className={styles['p2']}>Online Media . 101K followers</p>
          </div>
          <VisibilityOutlinedIcon className={styles['icon']} />
        </p>
        <img className={styles['company_img']} src="images/Adobe.png" alt="" />
        <p className={styles['p']}>
          <div>
            <a className={styles['company']} href="#">
              Adobe
            </a>{' '}
            <p className={styles['p2']}>Computer Software . 2,68M followers</p>
          </div>
          <VisibilityOutlinedIcon className={styles['icon']} />
        </p>
        <img className={styles['company_img']} src="images/slack.png" alt="" />
        <p className={styles['p']}>
          <div>
            <a className={styles['company']} href="#">
              Slack
            </a>

            <p className={styles['p2']}>Computer Software . 528K followers</p>
          </div>
          <VisibilityOutlinedIcon className={styles['icon']} />
        </p>
      </div>
    </div>
  );
}

export default SidePanel;
