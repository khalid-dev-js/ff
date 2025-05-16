"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface WithdrawModalProps {
  onClose: () => void
  onSuccess: () => void
  remainingBalance: number
  currency: "USD" | "PKR"
  exchangeRate: number
}

export default function WithdrawModal({
  onClose,
  onSuccess,
  remainingBalance,
  currency,
  exchangeRate,
}: WithdrawModalProps) {
  const [amount, setAmount] = useState("")

  const formattedBalance =
    currency === "USD"
      ? `$${remainingBalance.toLocaleString()}`
      : `PKR ${(remainingBalance * exchangeRate).toLocaleString()}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSuccess()
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setAmount(value)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Withdraw to Bank</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bank">Bank Account</Label>
              <Input id="bank" value="**** **** **** 4582 - National Bank" disabled className="bg-gray-50" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="remaining">Remaining in Fiverr</Label>
              <Input id="remaining" value={formattedBalance} disabled className="bg-gray-50 font-medium" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Withdraw</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500">{currency === "USD" ? "$" : "₨"}</span>
                </div>
                <Input
                  id="amount"
                  placeholder="Enter amount"
                  className="pl-8"
                  value={amount}
                  onChange={handleAmountChange}
                  required
                />
              </div>
              <p className="text-sm text-gray-500">
                {currency === "USD"
                  ? `Minimum withdrawal: $100`
                  : `Minimum withdrawal: PKR ${(100 * exchangeRate).toLocaleString()}`}
              </p>
            </div>

            <div className="pt-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Withdraw Funds
                </Button>
              </motion.div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
