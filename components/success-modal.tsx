"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface SuccessModalProps {
  onClose: () => void
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="bg-white rounded-lg shadow-xl p-8 text-center max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <CheckCircle2 className="h-16 w-16 text-emerald-500" />
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-bold mb-2"
        >
          Successfully Sent!
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600"
        >
          Your withdrawal request has been processed. Funds will be transferred to your bank account within 3-5 business
          days.
        </motion.p>
      </motion.div>
    </div>
  )
}
