import styles from '../page.module.css'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Introduction from "./introduction";
import LocomotiveScroll from 'locomotive-scroll';
import project1 from '../images/ux/project1.png';
import project2 from '../images/ux/project2.png';
import project3 from '../images/ux/project3.png';
import project4 from '../images/ux/project4.png';
import grproject1 from '../images/graphic/project1.png';
import grproject2 from '../images/graphic/project2.png';
import grproject3 from '../images/graphic/project3.png';
import grproject4 from '../images/graphic/project4.png';
import grproject5 from '../images/graphic/project5.png';
import grproject6 from '../images/graphic/project6.png';
import grproject7 from '../images/graphic/project7.png';
const images = [
  {
    projects: [
      {
          src:project1,
          link:""
      },
      {
          src:project2,
          link:""
      },
      {
          src:project3,
          link:""
      },
      {
          src:project4,
          link:""
      },
    ]
  },

  {
    projects: [
      {
          src:grproject1,
          link:""
      },
      {
          src:grproject2,
          link:""
      },
      {
          src:grproject3,
          link:""
      },
      {
          src:grproject4,
          link:""
      },
      {
          src:grproject5,
          link:""
      },
      {
          src:grproject6,
          link:""
      },
      {
          src:grproject7,
          link:""
      },
    ]
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = gsap.utils.toArray(`.${styles.scrollSection}`);
    const endValue = window.innerHeight * sections.length; // Adjust end based on number of sections

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0, // Starting position
      },
      {
        translateX: `-${(sections.length - 1) * 100}%`, // Final position moves to last section
        ease: "none", // No easing for smoothness
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${endValue} top`, // End point based on sections
          scrub: 0.1, // Smooth scrolling
          pin: true, // Pin the trigger
          pinSpacing: true, // Avoid layout shifts
          snap: {
            snapTo: 1 / (sections.length), // Snap to each section
            duration: { min: 0.2, max: 0.8 }, // Snapping duration
            delay: 0.1, // Delay before snapping
            ease: "power1.inOut", // Smooth snapping
          },
        },
      }
    );

    // Cleanup animation on component unmount
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className={styles.scrollSectionOuter}>
      {/* Wrapper Section */}
      <div ref={triggerRef}>
        {/* Trigger */}
        <Introduction />
        
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
  );
}

export default ScrollSection;