'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

export function AnimatedGroup({
  children,
  variants,
  className,
  ...props
}) {
  const containerVariants = variants?.container || defaultContainerVariants
  const itemVariants = variants?.item || defaultItemVariants

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}