'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Project from './components/projects'
import Introduction from './components/introduction'
import Footer from './components/footer'
export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  return (
    <div className={styles.content}>
      <Project/>
    </div>
  );
}
