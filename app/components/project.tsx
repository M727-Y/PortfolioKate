import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';
import project1 from '../images/ux/project1.png';


interface ProjectProps {
  imgSrc: typeof project1; // Image source URL
  tags?: string[];
  height?: number; // Restricting to specific values
}

export default function Project({ imgSrc, tags = [], height = 100 }: ProjectProps) {
  
  const imageClass = tags.length > 0 ? styles.imageWithTags : styles.imageWithoutTags;
  // Dynamically assign a height class based on the `height` prop
  const heightClass = styles[`height${height}`]; 

  return (
    <div className={`${styles.projectContainer} ${heightClass}`}>
      
      
      {tags.length > 0 && (
        <ul className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`${styles.tag} ${tag.toLowerCase() === 'ux design' ? styles.uxTag : ''}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      
      <Image
        src={imgSrc}
        alt="Project"
        className={`${styles.projectImage} ${imageClass}`}
      />
    </div>
  );
}


