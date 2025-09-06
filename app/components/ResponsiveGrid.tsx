"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ResponsiveGridProps {
  children: ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
  staggerDelay?: number;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'md',
  className = '',
  animate = true,
  staggerDelay = 0.1
}) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const gridClasses = [
    'grid',
    `grid-cols-${columns.sm || 1}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`,
    columns.xl && `xl:grid-cols-${columns.xl}`,
    gapClasses[gap],
    className
  ].filter(Boolean).join(' ');

  if (!animate) {
    return (
      <div className={gridClasses}>
        {children}
      </div>
    );
  }

  return (
    <div className={gridClasses}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * staggerDelay }}
              viewport={{ once: true }}
            >
              {child}
            </motion.div>
          ))
        : <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
      }
    </div>
  );
};

export default ResponsiveGrid;