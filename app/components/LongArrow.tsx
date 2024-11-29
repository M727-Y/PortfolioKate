import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
interface LongArrowProps {
    isActive: number; // Accept isActive as a prop
    reverse?: number;
  }
  const LongArrow: React.FC<LongArrowProps> = ({ isActive, reverse }) => {
    const arrowRef = useRef<SVGLineElement | null>(null); // Ref for the line element
    const polylineRef = useRef<SVGPolylineElement | null>(null); // Ref for the arrowhead
  
    useEffect(() => {
      const targetLength = isActive === 0 ? 200 : 100; // Line length based on isActive
      const targetColor = isActive === 0 ? "black" : "#CDD5E0"
      if (arrowRef.current && polylineRef.current) {
        gsap.to(arrowRef.current, {
          duration: 0.5,
          attr: { x2: targetLength }, // Animating x2 to adjust line length
          stroke: targetColor,
          ease: 'power2.inOut',
        });
  
        // Animate the arrowhead to follow the line and color
        if (reverse === 0) {
          gsap.to(polylineRef.current, {
            duration: 0.5,
            attr: {
              points: `${targetLength - 20},15 ${targetLength},25 ${targetLength - 20},35`, // Adjust points for the arrowhead
            },
            stroke: targetColor,
            ease: 'power2.inOut',
          });
        }
        gsap.to(arrowRef.current.parentElement, {
          duration: 0.5,
          stroke: targetColor,
          width: isActive === 0 ? '200px' : '100px',
          attr: { viewBox: `0 0 ${targetLength} 50` },
          ease: 'power2.inOut',
        });
        
      }
    }, [isActive]);
  
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="200" // Total width to accommodate the arrowhead
        height="50"
        viewBox="0 0 200 50"
        fill="none"
      >
        <line
          ref={arrowRef}
          x1="0"
          y1="25"
          x2="200" // Initial line length
          y2="25"
          strokeWidth="3"
        />
        {reverse === 1 ? (
          <polyline
            ref={polylineRef}
            points="20,15 0,25 20,35"
             
            fill="none"
           
            strokeWidth="3"
          />
        ) : (
          <polyline
            ref={polylineRef}
            points="180,15 200,25 180,35" // Initial arrowhead position
            fill="none"
         
            strokeWidth="3"
          />
        )}
      </svg>
    );
  };
export default LongArrow  