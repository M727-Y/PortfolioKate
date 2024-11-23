import styles from '../page.module.css'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Project from "./project";
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
const uxProjects = [
  { src: project1, link: "", tags:["UX Design","UI Design"] },
  { src: project2, link: "", tags:["UX Design","UI Design"] },
  { src: project3, link: "", tags:["UI Design"] },
  { src: project4, link: "", tags:["UI Design"] },
]

const graphicProjects = [
  { src: grproject1, link: "" },
  { src: grproject2, link: "" },
  { src: grproject3, link: "" },
  { src: grproject4, link: "" },
  { src: grproject5, link: "" },
  { src: grproject6, link: "" },
  
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const triggerRef = useRef(null);
  const label1Ref = useRef(null);
  const label2Ref = useRef(null);
  const label1arrow = useRef(null);
  const label2arrow = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.log(typeof project1)
    const sections = Array.from(document.querySelectorAll(`.${styles.scrollSection}`));

    const endValue = window.innerHeight * sections.length-1; // Adjust end based on number of sections

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0, // Starting position
      },
      {
        // translateX: `-${(sections.length - 1) * 100}%`, // Final position moves to last section
        translateX: `-50%`,
        ease: "none", // No easing for smoothness
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${endValue} top`, // End point based on sections
          scrub: 0.1, // Smooth scrolling
          pin: true, // Pin the trigger
          pinSpacing: true, // Avoid layout shifts
          snap: {
            snapTo: (value) => {
              // Skip snapping for the first section
              if (value === 0) return value;
              return Math.round(value * (sections.length - 1)) / (sections.length - 1);
            }, // Snap to each section
            duration: { min: 0.2, max: 0.8 }, // Snapping duration
            delay: 0.1, // Delay before snapping
            ease: "power1.inOut", // Smooth snapping
          },
        },
      }
    );
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "center top",
        end: "center center",
        onEnter: () => updateLabels(i),
        onEnterBack: () => updateLabels(i),
      });
    });
    
    // Update labels dynamically
    const updateLabels = (activeIndex: number = 0): void => {
      gsap.to(label1Ref.current, {
        fontSize: activeIndex === 0 ? "4rem" : "3rem",
        duration: 0.3,
        ease: "power1.inOut",
        
      });
      // gsap.to(section1Ref.current, {
      //   opacity: activeIndex === 0 ? 1 : 0
        
      // });
      // gsap.to(section2Ref.current, {
      //   opacity: activeIndex === 1 ? 1 : 0ju
      // });
      // activeIndex === 0 ? document.querySelector(`.${styles.section1}`).classList.remove(styles.inactive) : document.querySelector('.section1').classList.add(styles.inactive);
      gsap.to(label2Ref.current, {
        fontSize: activeIndex === 1 ? "4rem" : "3rem",
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(label1arrow.current, {
        width: activeIndex === 0 ? "auto" : "5vw",
        // color: activeIndex === 0 ? "pink": "black",
      });
      gsap.to(label2arrow.current, {
        width: activeIndex === 1 ? "auto" : "5vw",
        // color:activeIndex === 1 ? "pink": "black",
      });
      
    };
    updateLabels(0);

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
        
        {/* <span
          
          className="divider"/>
          <span 
          style={{
            fontSize: activeImage % 2 === 0 ? 20 : 40,
            transition: 'font-size 0.5s ease-in-out', // Add transition property
          }}
          >UX/UI design</span>
          <span style={{fontSize:40}}>/</span>
          <span 
            style={{
              fontSize: activeImage % 2 === 0 ? 40 : 20,
              transition: 'font-size 0.5s ease-in-out', // Add transition property
            }}
          >Graphic design</span>
          <span className="divider"/>
        </div> */}
        <div className={styles.labels}>
          <span ref={label2Ref} className={styles.label}>Graphic Design<span ref={label2arrow} className={styles.symbol}>⟶</span></span>
          <span ref={label1Ref} className={styles.label}><span ref={label1arrow} className={styles.symbol}>⟵</span>UX/UI Design</span>
          
        </div>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          <div ref={section1Ref} className={`${styles.scrollSection} ${styles.section1}`}>
              {uxProjects.map((el, index)=>(
                <Project  key={index} imgSrc={el.src} tags={el.tags}></Project>
              ))}
              
          </div>
          <div ref={section2Ref} className={`${styles.scrollSection} ${styles.section2}`}>
              {uxProjects.map((el, index)=>(
                <Project  key={index} imgSrc={el.src} tags={el.tags}></Project>
              ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;