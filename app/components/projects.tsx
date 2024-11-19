import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from '../page.module.css'
import Introduction from "./introduction";
function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  
  useEffect(() => {
    const endValue = window.innerHeight * 2;
    const startOffset = 0;
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-110%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `${startOffset} top`,
          end: `${endValue} top`,
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <>
    
    <section className={styles.scrollSectionOuter}>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      
      <div ref={triggerRef}>
      <Introduction/>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          <div className={styles.scrollSection}>
            <div className={styles.projectContainer}></div>
            <div className={styles.projectContainer}></div>
            <div className={styles.projectContainer}></div>
            <div className={styles.projectContainer}></div>
            
          </div>
          <div className={styles.scrollSection}>
            <div className={styles.projectContainer}></div>
            <div className={styles.projectContainer}></div>
            <div className={styles.projectContainer}></div>
            <div className={styles.projectContainer}></div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ScrollSection;