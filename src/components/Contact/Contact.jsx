import React from 'react'
import { getImageurl } from '../../utils'
import styles from './Contact.module.css'
export const Contact = () => {
  return <><footer id ="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageurl("contact/emailIcon.png")} alt="emailIcon" />
            <a href="mailto:kishorev2425@gmail.com">kishorev2425@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageurl("contact/linkedinIcon.png")} alt="emailIcon" />
            <a href="https://www.linkedin.com/in/raj-kishore2005/">raj kishore</a>
        </li>
        <li className={styles.link}>
            <img src={getImageurl("contact/githubIcon.png")} alt="emailIcon" />
            <a href="https://github.com/kishore-rk">github</a>
        </li>
        <li className={styles.link}>
            <img src={getImageurl("contact/leetcode.png")} alt="emailIcon" />
            <a href="https://leetcode.com/u/raj-kishore/">leetcode</a>
        </li>
        
    </ul>
  </footer>
    </>
}
