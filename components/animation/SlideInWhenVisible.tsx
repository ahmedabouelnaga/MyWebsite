import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
}

export default function SlideInWhenVisible({ children, direction = 'left', delay = 0 }: Props) {
  const directionOffset = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
  };

  return (
    <motion.div
      initial={{ 
        ...directionOffset[direction],
        opacity: 0 
      }}
      whileInView={{ 
        x: 0, 
        y: 0, 
        opacity: 1 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96] // Smooth easing
      }}
    >
      {children}
    </motion.div>
  );
}
