import { useRef } from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ScrollAnimator({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  const initialPositions = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initialPositions[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
