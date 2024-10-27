'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Project from './components/projects'
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
    <>
      <h1>Horizontal Carousel with GSAP</h1>
        <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
          <Project />
        </div>
    </>
  );
}
