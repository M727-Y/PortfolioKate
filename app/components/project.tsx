import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';
import project1 from '../images/ux/project1.png';

interface ProjectProps {
  imgSrc: typeof project1; // Image source URL
  tags?: string[];
}

export default function Project({ imgSrc, tags = [] }: ProjectProps) {
  return (
    <div className={styles.projectContainer}>
        <ul className={styles.tagContainer}>
          {tags?.length > 0 ? (
            tags.map((tag, index) => (
              <li key={index} className={styles.tag}>
                {tag}
              </li>
            ))
          ) : null}
          
        </ul>
        <Image src={imgSrc} alt="Project" className={styles.projectImage} />
    </div>
    
  );
}

