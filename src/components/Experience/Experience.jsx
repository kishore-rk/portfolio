import React from 'react'
import skills from '../../data/skills.json'
import { getImageurl } from '../../utils'
import styles from './Experience.module.css';

export const Experience = () => {
  return <section id = "skills" className={skills.container}>
    <h2 className={styles.title}>skills</h2>
    <div className={styles.content}>
        <div className={styles.skills}> {
            skills.map((skill, id) => {
                return <div key ={id}> 
                    <div className={styles.imageContainer}><img src={getImageurl(skill.imageSrc)} alt={skill.title} /></div>
                    <p>{skill.title}</p>
                </div>
            })
        }</div>
    </div>
  </section>
}
