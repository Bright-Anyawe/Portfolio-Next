"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function UnderDevelopment() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <Image
                src="/assets/under-development.svg"
                alt="Under Development"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Under Development
          </h2>
          
          <p className="text-gray-300 text-center mb-8">
            This section is currently under development. We&apos;re working hard to bring you an amazing experience. Please check back soon!
          </p>

          <div className="flex flex-col space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.back()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Go Back
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/")}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Return Home
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 