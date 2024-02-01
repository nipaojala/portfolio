import React from 'react'
import { motion } from 'framer-motion'
export const ScaleAnimation = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </>
  )
}
