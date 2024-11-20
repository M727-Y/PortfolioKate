import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'
import name from '../images/Vector.png'
export default function introduction() {
  return (
    <div className={styles.introduction}>
        <div className={styles.introductionName}>
            <Image src={name} alt='Kate Yugay'/>
        </div>
        <div className={styles.introductionObjective}>
            <p>With a background that spans diverse cultures and design perspectives, I bring a unique and thoughtful approach to UX/UI. My focus is on crafting intuitive, visually striking experiences that resonate on a personal level.</p>
        </div>
    </div>
    
  )
}
