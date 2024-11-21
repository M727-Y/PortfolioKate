import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';


interface ProjectProps {
  imgSrc: string; // Image source URL
  link?: string;  // Optional link
}

export default function Project({ imgSrc, link }: ProjectProps) {
  return (
    <>
        <Image src={imgSrc} alt="Project"  className={styles.projectImage} />
    </>
    
  );
}

