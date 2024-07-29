import React from 'react'
import { motion } from 'framer-motion'

const myprojects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#9cd4d9]">
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
    >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Page en Construction</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-8">
            Revenez bientôt !
        </p>
        <div className="flex justify-center">
            <motion.div
                className="w-16 h-16 border-t-4 border-b-4 border-[#f7b5c0] rounded-full animate-spin"
            ></motion.div>
        </div>
    </motion.div>
</div>
  )
}

export default myprojects