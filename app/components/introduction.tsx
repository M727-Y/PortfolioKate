import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'
import name from '../images/Vector.svg'
export default function introduction() {
  return (
    <div className={styles.introduction}>
        <div className={styles.introductionName}>
            <Image src={name} alt='Kate Yugay'/>
        </div>
        <div className={styles.introductionObjective}>
            <p>I draw inspiration from diverse cultures and design perspectives, which allows me to create thoughtful, user-centered designs. My goal is to craft experiences that are not only visually captivating but also intuitive and meaningful on a personal level.</p>
        </div>
    </div>
    
  )
}
