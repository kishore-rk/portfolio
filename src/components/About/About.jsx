import React from 'react'
import styles from './About.module.css'
import { getImageurl } from '../../utils'

export const About = () => {
    return <section className={styles.container} id ="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageurl("about/aboutImage.png")} alt="laptop image"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                
                <li className={styles.aboutItem}>
                        <img src={getImageurl("about/serverIcon.png")} alt="server"  />
                        <div className={styles.aboutItemText}>
                            <h3>Competitive programmer</h3>
                            <p>I am a competitive programmer with 300+ problems solved on LeetCode and experience on GeeksforGeeks, focused on refining my algorithmic skills.</p>
                        </div>
                    
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageurl("about/cursorIcon.png")} alt="cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I have workingprojects and have experience in working with React.</p>
                    </div>
                </li>
            </ul>

        </div>
    </section>

}
