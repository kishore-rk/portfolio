import React from 'react'
import styles from './Hero.module.css'
import { getImageurl } from '../../utils'

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title} >Hi, I'm Raj Kishore</h1>
        <p className={styles.description} >I am a competitive programmer with a strong problem-solving background, now exploring front-end development to build efficient and user-friendly web solutions.</p>
        <a href="mailto:mymail@gmail.com" className={styles.contactBtn}>
            Contact me
        </a>

    </div>
    <img src={getImageurl("hero/heroImage.jpg")} alt="image here" className={styles.heroImg} />
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
}
