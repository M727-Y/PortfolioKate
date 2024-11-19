import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
import letsConnect from '../images/LetsConnect.png'
export default function Footer() {
  return (
    <div className={styles.footer}>
        <Image src={letsConnect} alt='Connect'/>
    </div>
  )
}
