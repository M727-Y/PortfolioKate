import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/logo.svg'
export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      
        <Link href="/" className={styles.logo}>
          <Image className={styles.logoImage} src={logo} alt="Logo"/>
        </Link>
      
      
          <Link className={styles.link} href="/">Portfolio</Link>
        
          <Link className={styles.link} href="/about">About Me</Link>
        
          <Link className={styles.link} href="/">Resume</Link>
        
        <div className={styles.contactLinks}>
          <Link className='contactBtn' href="/contacts">Get In Touch</Link>
        </div>
      
    </nav>
  )
}
