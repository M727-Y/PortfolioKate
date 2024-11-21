'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Project from './components/projects'
import Introduction from './components/introduction';
export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll({ autoStart: false });
          locomotiveScroll.start();
      }
    )()
  }, [])


  return (
    <div className={styles.content}>
      <Introduction />
      <Project/>
    </div>
  );
}
